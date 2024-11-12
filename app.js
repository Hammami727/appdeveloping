let deferredPrompt;
const installButton = document.getElementById('installButton');

// Zeigt den Installations-Button an, wenn die PWA installiert werden kann
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Verhindert, dass der Standard-Installationsdialog erscheint
    deferredPrompt = e;
    installButton.style.display = 'block'; // Zeigt den Installationsbutton an
});

// Wenn der Installations-Button geklickt wird
installButton.addEventListener('click', () => {
    deferredPrompt.prompt(); // Zeigt den Installationsdialog
    deferredPrompt.userChoice.then((result) => {
        if (result.outcome === 'accepted') {
            console.log('Benutzer hat die Installation akzeptiert');
        } else {
            console.log('Benutzer hat die Installation abgelehnt');
        }
        deferredPrompt = null;
        installButton.style.display = 'none'; // Versteckt den Button nach der Installation
    });
});

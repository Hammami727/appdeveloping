// Service Worker Registrieren
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service Worker registriert: ', registration);
      }).catch((error) => {
        console.log('Service Worker Registrierung fehlgeschlagen: ', error);
      });
    });
  }
  
  // Installieren der App als PWA
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Verhindert das automatische Anzeigen des Installationsdialogs
    e.preventDefault();
    deferredPrompt = e;
    const installButton = document.getElementById('install-btn');
    installButton.style.display = 'block';
  
    installButton.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        deferredPrompt = null;
      });
    });
  });
  
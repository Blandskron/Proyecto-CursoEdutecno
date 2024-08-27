function openWhatsApp() {
    // Mostrar el chat de WhatsApp
        if (typeof ElfWidget !== 'undefined') {
              ElfWidget.open();
            }
        }
          
    // Mostrar el chat de WhatsApp automáticamente al cargar la página
        window.addEventListener('load', function() {
            setTimeout(function() {
              openWhatsApp();
            }, 2000); // Espera 2 segundos antes de abrir el chat
});
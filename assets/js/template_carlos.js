  // Función para cargar archivos HTML desde rutas específicas
  function loadHTML(elementId, url) {
    // Inicia una solicitud para obtener el contenido del archivo en la URL especificada
    fetch(url)
        // Convierte la respuesta de la solicitud a texto (HTML en este caso)
        .then(response => response.text())
         // Cuando la conversión a texto sea exitosa, ejecuta esta función
        .then(data => {
            // Mostrar el contenido del archivo HTML en la consola para revisión
            console.log(`Contenido cargado de ${url}:`, data);
            // Inserta el contenido HTML obtenido en el elemento del DOM con el ID especificado
            document.getElementById(elementId).innerHTML = data;
        })
        // Si ocurre un error en la solicitud o conversión, se ejecuta esta función
        .catch(error => console.error('Error al cargar el archivo HTML:', error));
}

// Invocar los archivos HTML desde sus carpetas correspondientes        
 loadHTML('contenido2', 'templates/servicios.html');     
 loadHTML('skill', 'templates/skill.html'); 
 
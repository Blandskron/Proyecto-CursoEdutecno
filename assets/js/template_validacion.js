const btn = document.getElementById('button');
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const alerta = document.getElementById('mensaje');
  alerta.classList.remove("alert-danger", "alert-success");
  alerta.classList.add("alert", "h6");

  var usuario = document.getElementById('name').value;
  if (usuario.length === 0) {
    alerta.classList.add("alert-danger");
    alerta.textContent = 'Ingrese un Nombre Por Favor.';
    return;
  }
  var email = document.getElementById('email').value;
  if (email.length === 0) {
    alerta.classList.add("alert-danger");
    alerta.textContent = 'Ingrese el Email Por Favor.';
    return;
  } else if (email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) === null) {
    alerta.classList.add("alert-danger");
    alerta.textContent = 'El Email que ha ingresado no es Correcto';
    return;
  }
  var mensaje = document.getElementById('message').value;
  if (mensaje.length === 0) {
    alerta.classList.add("alert-danger");
    alerta.textContent = 'Ingrese un Mensaje Por Favor.';
    return;
  }

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_szbdy7w';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'success',
        title: 'Enviado!',
        text: 'Su mensaje ha sido enviado correctamente.',
        showConfirmButton: true,
        timer: 2000,
        background: '#f0f8ff',
        confirmButtonColor: '#3085d6',
        iconColor: '#3085d6',
        customClass: {
          title: 'my-title-class',
          popup: 'my-popup-class'
        }
      }).then(() => {
        // Limpiar los campos del formulario
        document.getElementById('contactForm').reset();
        // Limpiar los mensajes de alerta
        alerta.textContent = '';
        alerta.classList.remove("alert", "h6", "alert-danger", "alert-success");
      });
    }, (err) => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Hubo un error al enviar su mensaje: ${JSON.stringify(err)}`,
        showConfirmButton: true,
        background: '#ffe0e0',
        confirmButtonColor: '#d33',
        iconColor: '#d33',
        customClass: {
          title: 'my-title-class',
          popup: 'my-popup-class'
        }
      });
    });
});


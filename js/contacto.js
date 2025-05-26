document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contacto');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("¡Gracias por contactarnos! Te responderemos pronto.");

    form.reset();
  });
});

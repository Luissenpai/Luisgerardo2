function enviarFormulario(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Ocultar la sección del formulario después de enviarlo
    document.getElementById('formulario').style.display = 'none';
}



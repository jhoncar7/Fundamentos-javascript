function limpiarErrores() {
  let errores = document.getElementsByClassName('text-danger');
  for (let i = 0; i < errores.length; i++) {
    errores[i].innerHTML = '';
  }
}

function validar(formulario) {
  limpiarErrores();

  if(formulario.nombres.value.trim().length <=5){
    document.getElementById('errornombres').innerText = 'Campo invalido';
    formulario.nombres.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById('errorEmail').innerText = 'Campo Invalido';
    formulario.email.focus();
    return false;
  }

  if(formulario.contrasena.value.trim().length <= 5){
    document.getElementById('errorContrasena').innerText = 'Campo Invalido';
    formulario.contrasena.focus();
    return false;
}

if(formulario.contrasena.value != formulario.confirmacion.value){
  document.getElementById('errorConfirmacion').innerText = 'Campo Invalido';
  formulario.confirmacion.focus();
    return false;
}

if (formulario.tipo.value == -1) {
  document.getElementById("errorTipo").innerText = "Campo obligatorio";
  formulario.tipo.focus();
  return false;
}

if (!formulario.acepto.checked) {
  document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
  formulario.acepto.focus();
  return false;
}

  return true;
}
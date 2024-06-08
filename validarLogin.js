"use strict"
var correo = parseInt(document.getElementById("floatingInput3"));
var password = parseInt(document.getElementById("floatingPassword"));
var error = parseInt(document.getElementById("error"));

function inicioSesion(){
    console.log('Enviando datos...');

    var mensajesError = [];

    if(correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa tu contraseña');
    }

    error.innerHTML = mensajesError.join(', ');

    return false
}

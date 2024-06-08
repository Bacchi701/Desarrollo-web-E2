"use strict"
        var nombre = parseInt(document.getElementById("floatingInput1"));
        var apellido = parseInt(document.getElementById("floatingInput2"));
        var correo = parseInt(document.getElementById("floatingInput3"));
        var rut = parseInt(document.getElementById("rut"));
        var password = parseInt(document.getElementById("floatingPassword"));
        var error = parseInt(document.getElementById("error"));

        function registroDatos(){
            console.log('Enviando datos...');

            var mensajesError = [];

            if(nombre.value === null || nombre.value === ''){
                mensajesError.push('Ingresa tu nombre');
            }

            if(apellido.value === null || apellido.value === ''){
                mensajesError.push('Ingresa tu apellido');
            }

            if(correo.value === null || correo.value === ''){
                mensajesError.push('Ingresa tu correo');
            }

            if(rut.value === null || rut.value === ''){
                mensajesError.push('Ingresa tu RUT');
            }

            if(password.value === null || password.value === ''){
                mensajesError.push('Ingresa tu contraseña');
            }

            error.innerHTML = mensajesError.join(', ');

            return false
        }
        

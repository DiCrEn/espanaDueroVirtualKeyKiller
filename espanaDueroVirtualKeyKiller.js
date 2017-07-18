// ==UserScript==
// @name         EspañaDuero Kill virtual keyboard
// @namespace    https://github.com/DiCrEn/espanaDueroVirtualKeyKiller/
// @version      0.1
// @description  Pequeño script para el navegador para quitar el molesto teclado virtual de la web www.espanaduero.es y poder acceder escribiendo la contraseña con el teclado físico.
// @author       DiCrEn
// @match        https://www.espanaduero.es/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.querySelector("#acceso-usuario") != null){
        document.querySelector("#clave").readOnly = false; //Ahora puedo escribir en el campo clave
        document.querySelector("#clave").onfocus = null; //Ahora ya no sale el horrible teclado virtual.
        document.querySelector("#datos").onsubmit = function(){
            //Al enviar el formulario copio los valores anteriores en los campos que realmente valen.
            document.querySelector("input[name='usuario']").value = document.querySelector("#user").value;
            document.querySelector("input[name='password']").value = document.querySelector("#clave").value;
        };
    }
})();

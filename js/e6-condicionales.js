function imprimir(mensaje, idElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerText = mensaje;
}
//EJEMPLO 1: COMPARAR NUMEROS IGUALES O NO IGUALES
// === (SON IGUALES) !== (NO SON IGUALES)
function numeroEsCinco() {
    let numero = parseFloat(document.getElementById("e1numero").value);
    let mensaje = "";

    if (numero === 5) {
        mensaje = "El numero introducido es igual a 5";
    }
    else {
        mensaje = "El numero introducido no es igual a 5";
    }

    imprimir(mensaje, "ej1resultado");

}
//EJEMPLO 2: COMPARAR NUMEROS
//   Mayor o igual >= o Mayor estricto > 
// Menor o igual <= o Menor estricto
function numeroMayorCinco() {
    let numero = parseFloat(document.getElementById("e2numero").value);
    let mensaje = "";

    if (numero > 5) {
        mensaje = "El numero es mayor que 5";

    }
    else {
        mensaje = "El numero no es mayor que 5";
    }
    imprimir(mensaje, "ej2resultado");
}

//EJEMPLO 3: COMPARAR TEXTOS
//Usar touppercase si queremos que sean iguales independientemente de mayusculas y minusculas. No ponerlo en caso contrario.
function ciudadNoEsMalaga() {
    let ciudad = document.getElementById("e3ciudad").value;
    let ciudadMalaga = "Malaga";
    let mensaje = "";
    if (ciudad.toUpperCase() !== ciudadMalaga.toUpperCase()) {
        mensaje = "La ciudad no es Malaga";
    }
    else {
        mensaje = "La ciudad es Malaga";
    }
    imprimir(mensaje, "ej3resultado");
}
//EJEMPLO 4: MOSTRAR UN MENSAJE DE ERROR SI EL FORMULARIO ES INVALIDO
//1. OBTENER EL FORMULARIO POR SU ID.
//2. LLAMAR A LA FUNCION CHECKVALIDITY
function mostrarNombreDelAnimal() {
    let formulario = document.getElementById("ejemplo4Condicionales");
    let mensaje = "";
    if (formulario.checkValidity()) {
        let nombreAnimal = document.getElementById("e4animal").value;
        mensaje = "El animal introducido es " + nombreAnimal;

    }
    else {
        mensaje = "ERROR, CORRIJA LOS ERRORES DEL FORMULARIO";
    }

    imprimir(mensaje, "ej4resultado");

}
//EJEMPLO 5, MULTIPLES IF ELSE
function mostrarPrecio() {
    let producto = document.getElementById("e5productos").value;
    let mensaje = "";
    if (producto === "camiseta") {
        mensaje = "El precio de la camiseta es 10 euros";
    }
    else if (producto === "pantalon") {
        mensaje = "El precio del pantalon son 20 euros";
    }
    else if (producto === "chaqueta") {
        mensaje = "El precio de la chaqueta son 30 euros";
    }
    else {
        mensaje = "El producto elegido no esta registrado";
    }
    imprimir(mensaje, "ej5resultado");
}

function mostrarPrecioViaje() {
    let viaje = document.getElementById("e6destinos").value;
    let numeroDias = parseInt(document.getElementById("e6numerodedias").value);
    let precioViaje;
    let precioTotal;
    let mensaje = "";
    let descuento = 0;

    if (viaje === "paris") {
        precioViaje = 10;
        if(numeroDias>10){
            descuento = 100;
        }
        else {
            descuento = 0;
        }
    }
    else if (viaje === "newyork") {
        precioViaje = 20;
    }
    else if (viaje === "roma") {
        precioViaje = 30;
    }
    else if (viaje === "canarias") {
        precioViaje = 40;
    }
    else {
        precioViaje = 0;
    }

    precioTotal = (precioViaje * numeroDias)-descuento;
    mensaje = "El precio del viaje a " + viaje + " es de " + precioTotal + " tiene un descuento de " + descuento;
    imprimir(mensaje,"ej6resultado");
    

}
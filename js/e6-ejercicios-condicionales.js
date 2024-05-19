//ejericios Sonia//
// Edad//
function numeroMayordieciocho() {
    let numero = parseFloat(document.getElementById("ejercioEdades").value);
    let mensaje = "";

    if (numero >= 18) {
        mensaje = "Es mayor o igual de 18 años";

    }
    else {
        mensaje = "Es menor de 18 años";
    }
    imprimir(mensaje, "ejercicioEdad1");
}

// Ejercicio2 comparr números//
function comparacionNumeros() {
    let numeroCom1 = parseFloat(document.getElementById("ejerciocomparacion1").value);
    let numeroCom2 = parseFloat(document.getElementById("ejerciocomparacion2").value);
    let mensaje = "";

    if (numeroCom1 >= numeroCom2) {
        mensaje = "El numero 1 es mayor o igual que el número 2";

    }
    else {
        mensaje = "El numero 2 es mayor que el número 1";
    }
    imprimir(mensaje, "ejercicioComparacionnumeros1");
}
function mayoriaEdad() {
    let numeroCom1 = parseFloat(document.getElementById("ejerciomayoredad").value);
    let mensaje = "";

    if (numeroCom1 >= 18) {
        mensaje = "Eres mayor de edad";

    }
    else {
        mensaje = "Eres menor de edad";
    }
    imprimir(mensaje, "ejercicioMayoriadeedad");
}


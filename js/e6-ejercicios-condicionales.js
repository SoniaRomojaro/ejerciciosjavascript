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
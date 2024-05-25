/**
 * 1. Calcular Edad
 * Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.
 */
function calcularEdad() {
    let numero = parseInt(document.getElementById("ex1number").value);
    let mensaje = "";

    if (numero >= 18) {
        mensaje = "Es mayor de edad";
    }
    else {
        mensaje = "Es menor de edad";
    }

    imprimir(mensaje, "ex1resultado");

}

/**
 * 2. Cual es mayor
 */

function cualMayor() {
    let numero = parseFloat(document.getElementById("ej2Numero").value);
    let numero2 = parseFloat(document.getElementById("ej2Numer").value);
    let mensaje = "";

    if (numero > numero2) {
        mensaje = "El numero mayor es " + numero;

    }
    else if (numero === numero2){
        mensaje = "Los numeros son iguales " + numero;
    }
    else {
        mensaje = "El numero mayor es " + numero2;
    }
    imprimir(mensaje, "ej2Mayor");

}
/**
 * 3. Crea un formulario para que el usuario introduzca su nota y vea si esta aprobado o suspenso.
Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio y debe ser entre 0 y 10.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje suspenso si la nota es menor que 5, y aprobado sino.
 */
function notaExamen(){
    let nota = parseFloat(document.getElementById("ej3nota").value);
    let mensaje ="";

    if (nota >= 5){
        mensaje = "Aprobado";
    }
    else{
        mensaje = "Suspenso";
    }
imprimir(mensaje,"ejer3resultado");
}

/**
 * 4. Crea un formulario para que el usuario introduzca su nombre y le diga si es un nombre largo o corto.
Agrega un elemento al formulario para introducir un nombre. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es un nombre largo, si tiene mas de 10 caracteres o es un nombre corto si tiene menos de 10.

 */
function nombreCortoLargo() {
    let nombre = document.getElementById("ejercicio5nombre").value;
    let mensaje = "";
    let longitud = nombre.length;

    if ( longitud >= 10) {
        mensaje = "El " + nombre + " es largo, pues tiene más de 10 carácteres";
    }
    else {
        mensaje = "El " + nombre + " es corto, pues tiene menos de 10 carácteres";
    }
    imprimir(mensaje, "ejercicio5resultado");
}

/**
 * 5. Crea un formulario para ver la estacion del año segun el mes introducido.
Agrega un elemento select al formulario para seleccionar un mes. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre la estación del año: PRIMAVERA, VERANO, OTOÑO o INVIERNO según el mes que haya seleccionado. Por ejemplo, si selecciona JUNIO, debe aparecer el mensaje VERANO.

 * 
 */
function estacion(){
    let mes = document.getElementById("ex6").value;
    let mensaje = "";
    if ( mes === "Diciembre" || mes === "Febrero" || mes === "Enero"){
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Invierno";
    }
    else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo"){
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Primavera";
    }
    else if (mes === "Junio" || mes === "Julio" || mes === "Agosto"){
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Verano";
    }
    else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre"){
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Otoño";
    }
    imprimir(mensaje, "ex6Resultado");
}
/** SOLUCION OPCIONAL 2, Mas recomendable la primera porque repite menos codigo pero esta seria correcta tambien. */
function mesEstacion(){
    let mesAño = document.getElementById("ex6").value;
    let mesMinuscula = mesAño.toLowerCase();
    let estacion = "";

    switch (mesMinuscula) {
        case "enero":
            estacion = "INVIERNO";
          break;
        case "febrero":
            estacion = "INVIERNO";
          break;
        case "marzo":
            estacion = "PRIMAVERA";
            break;
        case "abril":
            estacion = "PRIMAVERA";
            break;
        case "mayo":
            mes = "PRIMAVERA";
            break;
        case "junio":
           estacion = "VERANO";
            break;
        case "julio":
           estacion = "VERANO";
            break;
        case "agosto":
            estacion = "VERANO";
            break;
        case "septiembre":
            estacion = "OTOÑO"
            break;
        case "ocubre":
            estacion = "OTOÑO"
            break;
        case "noviembre":
            estacion = "OTOÑO"
            break;
        case "diciembre":
            estacion = "INVIERNO"
            break;
        default:
            estacion = "El campo no puede estar vacío";
          
      }

    imprimir(estacion, "ejer5resultado");

}
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
    else if (numero === numero2) {
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
function notaExamen() {
    let nota = parseFloat(document.getElementById("ej3nota").value);
    let mensaje = "";

    if (nota >= 5) {
        mensaje = "Aprobado";
    }
    else {
        mensaje = "Suspenso";
    }
    imprimir(mensaje, "ejer3resultado");
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

    if (longitud >= 10) {
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
function estacion() {
    let mes = document.getElementById("ex6").value;
    let mensaje = "";
    if (mes === "Diciembre" || mes === "Febrero" || mes === "Enero") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Invierno";
    }
    else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Primavera";
    }
    else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Verano";
    }
    else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Otoño";
    }
    imprimir(mensaje, "ex6Resultado");
}
/** SOLUCION OPCIONAL 2, Mas recomendable la primera porque repite menos codigo pero esta seria correcta tambien. */
function mesEstacion() {
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

/**
 *6 Crea una calculadora.
Agrega un formulario donde el usuario pueda introducir dos numeros y seleccionar la operacion suma, resta, multiplicacion o division. Los campos no pueden estar vacios.
Agrega un boton que al hacer click llame a una funcion que muestre el resultado de la operación seleccionada.
 * 
 * 
 */

function calculadoraNumeros() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    if (operacion === "sumar") {
        resultado = numero1 + numero2;
        mensaje = "La suma de " + numero1 + " mas " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "restar") {
        resultado = numero1 - numero2;
        mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
        mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "dividir") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
        }
        else {
            mensaje = "No se puede dividir entre 0";
        }
    }
    else {
        mensaje = "Operacion no permitida";
    }


    imprimir(mensaje, "e6calculadoraresultado");
}

// Mismo ejemplo con SWITCH
//VERSION EJERCICIO 6 CON SWITCH
function calculadoraNumerosSwitch() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            mensaje = mensaje = "La suma de " + numero1 + " más " + numero2 + " es igual a: " + resultado;
            break;
        case "restar":
            resultado = numero1 - numero2;
            mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
            break;
        case "dividir":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
            }
            else {
                mensaje = "No se puede dividir entre 0";
            }
            break;
        default:
            mensaje = "Operacion no permitida";
    }
    imprimir(mensaje, "e6calculadoraresultado");

}

/**
 * 7. Crea un formulario que muestre el precio final segun el producto y la forma de pago elegida.
Agrega un formulario donde el usuario pueda elegir entre los siguientes productos: 1. Camiseta 10 euros, 2. Sudadera 20 euros, 3. Bufanda 5 euros, este campo es obligatorio y solo puede elegir un producto. Incluye también un elemento donde pueda introducir la cantidad, que es tambien obligatorio y debe ser mayor a 0.
Agrega un boton comprar que al hacer click muestre el precio total del producto elegido teniendo en cuenta la cantidad. Por ejemplo si elige 2 camisetas, el precio final seria 20 euros.
 */

function calcularPrecioFinal() {
    let producto = document.getElementById("producto").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = 0;
    let mensaje = "";
    let precioProducto = 0;

    if (producto === "camiseta") {
        precioProducto = 10;
    }
    else if (producto === "sudadera") {
        precioProducto = 20;
    }
    else if (producto === "bufanda") {
        precioProducto = 5;
    }

    precio = precioProducto * cantidad;

    mensaje = "El precio final de su compra son " + precio + " Euros";

    imprimir(mensaje, "ex8Resultado");
}

/**
 * 8. Crea un formulario calcule el precio total de un hotel segun la habitacion y el numero de noches elegidas.
Agrega un formulario donde el usuario pueda elegir el tipo de habitacion: Suite: 100 euros, habitacion doble: 70 euros. Habitacion individual: 50 euros. Este campo es obligatorio. Otro campo para introducir el numero de noches que debe ser mayor a 0.
Agrega un boton que muestre el precio total. Si el usuario se queda por mas de 5 noches, se le aplica un descuento a la estancia del 20%.
 */

function CuantasNoches() {
    let habitacion = document.getElementById("ejer8habitacion").value;
    let numeroNoches = parseInt(document.getElementById("ejer8cantidadNoches").value);
    let precioPorNoche = 0;
    let precioFinal = 0;
    let mensaje = "";

    if (habitacion === "suite") {
        precioPorNoche = 100;
    }
    else if (habitacion === "doble") {
        precioPorNoche = 70;
    }
    else if (habitacion === "individual") {
        precioPorNoche = 50;
    }

    precioFinal = precioPorNoche * numeroNoches;
    if (numeroNoches > 5) {
        let descuento = (precioFinal * 20) / 100; // Aplicando el 20% de descuento
        precioFinal = precioFinal - descuento;
    }

    mensaje = "El precio total es de: " + precioFinal + " € ";


    imprimir(mensaje, "ejer8resultadonoches");
}

/**9. Crea un formulario calcule el precio total del alquiler de un coche.
Agrega un formulario donde el usuario pueda elegir el tipo de coche: Deluxe: 100 euros, Standard: 70 euros. Basic: 50 euros. Este campo es obligatorio. El usuario tambien debe poder elegir el numero de dias, este campo es obligatorio y debe ser mayor a 0. 
El usuario debe introducir tambien su año de nacimiento, este campo es obligatorio. Y debe elegir el seguro: todo riesgo 20 euros por dia. Basico 5 euros por dia
Agrega un boton que muestre el precio total. Teniendo en cuenta las siguientes reglas:
--> El usuario debe ser mayor de 25 años, sino mostrara un mensaje indicando que no puede alquilar el coche.
Si el coche se alquila por mas de 7 dias, se aplica un descuento del 10% al alquiler.
Si el usuario ha elegido el seguro basico, debe mostrar ademas del precio final, un mensaje indicando que debe dejar un deposito de 500 euros. */
function precioCoche() {
    let coche = document.getElementById("ej9Coche").value;
    let precioCoche = 0;
    //define el precio del coche segun la opcion elegida
    if (coche === "deluxe") {
        precioCoche = 100;
    } else if (coche === "standard") {
        precioCoche = 70;
    } else if (coche === "basic") {
        precioCoche = 50;
    }
    else {
        precioCoche = 0;
    }
    return precioCoche;
}

function precioSeguro() {
    let seguro = document.getElementById("ej9Seguro").value;
    let precioSeguro = 0;
    if (seguro === "todo riesgo") {
        precioSeguro = 20;
    }
    else {
        precioSeguro = 5;
    }

    return precioSeguro;
}



function mostrarPrecioCoche() {
    let numeroDias = parseInt(document.getElementById("ej9numerodedias").value);
    let anyoNacimiento = parseInt(document.getElementById("ej9numero").value);
    let anyoActual = 2024;
    //1. Calculamos la edad actual que es igual al anyo actual menos el de nacimeinto
    let edad = anyoActual - anyoNacimiento;
    let precioCoche = 0;
    let precioSeguro = 0;
    let precioTotal = 0;
    let mensaje = "";


    if (edad < 25) {
        mensaje = "No es mayor de 25, no puede alquilar un coche";
    }
    else {
        //1. obtenemos el precio del coche segun la opcion elegida
        precioCoche = precioCoche();
        //define el precio del seguro segun la opcion elegida
        precioSeguro = precioSeguro();
        //calcula el precio total
        precioTotal = (numeroDias * precioCoche) + (numeroDias * precioSeguro);

        //aplica un descuento si es mayor a 7 dias la estancia
        if (numeroDias > 7) {
            let descuento = precioTotal * 10 / 100;
            precioTotal = precioTotal - descuento;
        }
        //muestra un mensaje con el precio total, y si es basico ademas muestra un mensaje con el deposito a dejar.
        if (seguro === "basico") {
            let depositoSeguroBasico = 500;
            mensaje = "El precio total es " + precioTotal + ", ha elegido seguro basico, debe dejar un deposito de " + depositoSeguroBasico;
        }
        else {
            mensaje = "El precio total es de " + precioTotal + ", no es necesario deposito";
        }

    }

    imprimir(mensaje, "ej9resultado");

}

/**
 * 10. Crea un programa para mostrar el resultado final.
1. Agrega un nuevo campo para que el usuario introduzca un numero del 1 al 10. Este campo es obligatorio.
2. Agrega un boton adivinar.
- El usuario tendra 3 intentos.
 - Si el numero introducido es igual al ganador (el ganador sera el numero 3), mostrara un mensaje diciendo ha ganado.
- Si el numero introducido no es igual al ganador, mostrara un mensaje diciendo ha perdido, vuelva a intentarlo, y restara uno al numero de intentos.
- Si el numero de intentos es igual a 0, mostrara un mensaje diciendo, lo siento no puede jugar mas le quedan 0 intentos.
 */

let intentos = 3;

function adivinar() {
    let numeroElegido = parseInt(document.getElementById("ejer10numero").value);
    let numeroGanador = 3;
    let mensaje = "";

    if (intentos > 0) {

        if (numeroElegido === numeroGanador) {
            mensaje = "Has ganado!";
        }
        else {
            intentos--; // --: Es el operador de decremento, que reduce el valor de la variable a su izquierda en 1.
            mensaje = "Ha perdido, vuelve a intentarlo, te quedan: " + intentos + " intentos.";

        }

    }

    else {
        mensaje = "Ha perdido, no le quedan mas intentos";
    }

    imprimir(mensaje, "ejer10resultado");
}
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
        let descuento = (precioFinal * 20)/100; // Aplicando el 20% de descuento
        precioFinal = precioFinal - descuento;
    }

    mensaje = "El precio total es de: " + precioFinal + " € ";


    imprimir(mensaje, "ejer8resultadonoches");
}
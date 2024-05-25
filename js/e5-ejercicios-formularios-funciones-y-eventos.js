function wellcome() {
    let nombre = document.getElementById("ej1Nombre").value;
    let ciudad = document.getElementById("ej1Ciudad").value;
    let fechaNacimiento = document.getElementById("ej1Fecha").value;
    let mensaje = "Hola " + nombre + " bienvenida!" + " Vive en " + ciudad + " y ha nacido en " + fechaNacimiento;
    imprimir(mensaje, "respuesta1");
}

function calcularOperaciones() {
    //Para que los valores del formulario los trate como numeros, debe ir dentro de parseFloat (numero con decimales) o parseInt (numero entero, sin decimales)
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultadoSumar = numero1 + numero2;
    let resultadoRestar = numero1 - numero2;
    let resultadoMultiplicar = numero1 * numero2;
    let resultadoDividir = numero1 / numero2;


    let mensaje = "Los numeros " + numero1 + "y " + numero2 + "\n la suma: " + resultadoSumar + "\nResta: " + resultadoRestar + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir;

    imprimir(mensaje, "e2resultadOperaciones");
}

function cambioMoneda() {
    let num1euros = parseFloat(document.getElementById("e11number").value);
    let cambiolibras = 0.86;
    let cambiodolares = 1.08;
    let librastotales = num1euros * cambiolibras;
    let dolarestotales = num1euros * cambiodolares;
    let mensaje = "La cantidad de euros " + num1euros + " equivale a  " + librastotales + " libras y a  " + dolarestotales + " dolares";

    imprimir(mensaje, "cambio");
}

/*
Crea un formulario para calcular precio total de un producto. 
El usuario debe introducir el nombre del producto, el precio y la cantidad. Agrega validación Boostrap. Todos los campos son obligatorios. El nombre debe tener entre 3 y 20 caracteres. El precio no puede ser negativo. La cantidad no puede ser negativa. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre del producto, su cantidad, su precio y el precio total.
*/
function precioTotal() {
    let nombreProducto = document.getElementById("nombreProducto").value;
    let precioProducto = document.getElementById("precioProducto").value;
    let cantidadProducto = document.getElementById("cantidadProducto").value;

    let resultado = cantidadProducto * precioProducto;
    let mensaje = "Producto elegido:" + nombreProducto + " Precio: " + precioProducto + " cantidad: " + cantidadProducto + " tiene un precio total de " + resultado;

    imprimir(mensaje, "precioTotal");
}

/*
Crea un formulario para elegir la talla y el color de una camiseta. 
El usuario debe elegir de un select el color entre 5 colores posibles, y la talla de la XS a la XXL. Agrega validación Boostrap. Todos los campos son obligatorios. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la talla y el color de la camiseta elegidos.

*/

function datosCamiseta() {
    let tallaCamiseta = document.getElementById("eje5TallaCamiseta").value;
    let colorCamiseta = document.getElementById("eje5ColorCamiseta").value;

    let mensaje = "RESULTADO\nLa camiseta es de talla " + tallaCamiseta + " y de color " + colorCamiseta;
    imprimir(mensaje, "eje5FormulariosResultado");

}

/*
Crea un formulario para introducir la edad del usuario.
La edad debe ser un numero positivo y es obligatorio. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la edad en dias, la edad en minutos y la edad en segundos.

*/
function calcularEdad() {
    let edad = parseInt(document.getElementById("ej46Edad").value);
    const DIASANYO = 365;
    const HORASDIA = 24;
    const MINUTOSHORA = 60;
    const SEGUNDOSHORA = 60;
    let dias = edad * DIASANYO;
    let min = dias * HORASDIA * MINUTOSHORA;
    let sec = min * SEGUNDOSHORA;
    let mensaje = " Si tienes " + edad + " años" + " habrás vivido " + dias + " días o " + min + " minutos " + " o " + sec + " segundos. "
    imprimir(mensaje, "ex6resultado");
}
/*
7. Crea un formulario para mostrar información sobre un texto.
Crea un elemento textArea que reciba un texto de longitud entre 10 y 100 caracteres. Debe ser obligatorio. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el texto completo en mayusculas, la primera letra del texto, la última letra y su longitud.
*/

function mostrarTexto() {
    let texto = document.getElementById("e7texto").value;


    let textoMayuscula = texto.toUpperCase();
    let primeraLetra = texto.charAt(0); // texto[0]
    let longitudTexto = texto.length;
    let ultimaLetra = texto.charAt(longitudTexto - 1); //texto[longitudTexto-1]



    let mensaje = " Texto en mayúscula: " + textoMayuscula + " \nLa primera letra: " + primeraLetra + " \nSu última letra: " + ultimaLetra + " \nunto con su longitud: " + longitudTexto;
    imprimir(mensaje, "e7resultadoTexto");
}

/*
8. Crea un formulario para calcular la nota media.
Agrega 3 elementos que reciban numeros entre 0 y 10 y que no pueden estar vacío. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la media de los tres números.
 */
// Nota media//
function calcularNotamedia() {
    let Nota1 = parseInt(document.getElementById("ej8Nota1").value);
    let Nota2 = parseInt(document.getElementById("ej8Nota2").value);
    let Nota3 = parseInt(document.getElementById("ej8Nota3").value);
    let notaMedia = (Nota1 + Nota2 + Nota3) / 3;
    let mensaje = "Nota1: " + Nota1 + "; Nota 2: " + Nota2 + "; Nota 3: " + Nota3 + "; Nota media es igual a: " + notaMedia;
    imprimir(mensaje, "ex8resultado");
}
/**
 * 9. Crea un formulario para que el usuario pueda seleccionar una cantidad de camisetas, que puede ser vacio, 1,2 o 3, una cantidad de zapatos también entre vacio, 1,2 o 3 y una cantidad de sombreros, que puede ser vacio, 1,2, o 3.
Agrega 1 elemento para seleccionar la cantidad de cada producto. El elemento select puede estar vacio.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre de cada producto y su cantidad. Si ha dejado vacio, no mostrará nada en su cantidad. */

function mostrarProducto() {
    let numCamiseta = document.getElementById("ej9camiseta").value;
    let numZapatos = document.getElementById("ej5zapatos").value;
    let numSombreros = document.getElementById("ej5sombreros").value;

    let camiseta = "Camiseta";
    let zapatos = "Zapatos";
    let sombreros = "Sombreros";

    let mensaje = "El producto " + camiseta + " hay " + numCamiseta + " unidades, el producto " + zapatos + " hay " + numZapatos + " unidades y el producto "
        + sombreros + " hay " + numSombreros + " unidades. "


    imprimir(mensaje, "respuesta9");
}

/**
 * 10. Crea un formulario para que el usuario pueda introducir el nombre de su mascota, y seleccionar el tipo: perro, gato, tortuga, pajaro.
Agrega 1 elemento agregar el nombre de la mascota y el tipo. Ambos pueden estar vacios (el usuario puede no tener mascota, o no ser de ninguno de esos tipos)
Agrega un boton que al hacer click llame a una función que muestre un mensaje con los datos de la mascota, es decir, nombre y tipo.  */
function nombreTipo() {
    let nombre = document.getElementById("nombremascota").value;
    let mascota = document.getElementById("mascota").value;


    let mensaje = " Hola te llamas " + nombre + " y eres un/una !" + mascota;
    imprimir(mensaje, "eje10Resultado");
}
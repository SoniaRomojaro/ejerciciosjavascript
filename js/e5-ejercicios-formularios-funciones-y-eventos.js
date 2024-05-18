function wellcome(){
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

function cambioMoneda(){
    let num1euros = parseFloat(document.getElementById("e11number").value);
    let cambiolibras = 0.86;
    let cambiodolares = 1.08;
    let librastotales = num1euros * cambiolibras;
    let dolarestotales = num1euros * cambiodolares; 
    let mensaje = "La cantidad de euros " + num1euros + " equivale a  " + librastotales + " libras y a  " + dolarestotales + " dolares";
  
    imprimir(mensaje,"cambio");
}

/*
Crea un formulario para calcular precio total de un producto. 
El usuario debe introducir el nombre del producto, el precio y la cantidad. Agrega validación Boostrap. Todos los campos son obligatorios. El nombre debe tener entre 3 y 20 caracteres. El precio no puede ser negativo. La cantidad no puede ser negativa. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre del producto, su cantidad, su precio y el precio total.
*/
function precioTotal(){
    let nombreProducto = document.getElementById("nombreProducto").value;
    let precioProducto = document.getElementById("precioProducto").value;
    let cantidadProducto = document.getElementById("cantidadProducto").value;

    let resultado = cantidadProducto * precioProducto;
    let mensaje = "Producto elegido:" + nombreProducto + " Precio: " + precioProducto + " cantidad: " + cantidadProducto + " tiene un precio total de " + resultado;

   imprimir(mensaje,"precioTotal");
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
    imprimir(mensaje,"eje5FormulariosResultado");

}

/*
Crea un formulario para introducir la edad del usuario.
La edad debe ser un numero positivo y es obligatorio. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la edad en dias, la edad en minutos y la edad en segundos.

*/
function calcularEdad(){
    let edad = parseInt(document.getElementById("ej46Edad").value);
    const DIASANYO = 365;
    const HORASDIA = 24;
    const MINUTOSHORA = 60;
    const SEGUNDOSHORA = 60;
    let dias = edad * DIASANYO;
    let min = dias * HORASDIA *  MINUTOSHORA;
    let sec = min * SEGUNDOSHORA;
    let mensaje = " Si tienes " + edad + " años" + " habrás vivido " + dias + " días o " + min + " minutos " + " o " + sec + " segundos. "
    imprimir(mensaje, "ex6resultado");
}
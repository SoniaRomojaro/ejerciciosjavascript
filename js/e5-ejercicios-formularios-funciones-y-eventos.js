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
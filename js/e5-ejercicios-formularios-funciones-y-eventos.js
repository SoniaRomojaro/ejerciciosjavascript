//EJERCICIOS SONIA//
function saludarsonia () {
    let parrafo = document.getElementById("funcionsaludo");
    parrafo.innerText = "Gracias por meter los datos ";
}


//funcion imprimir Sonia que podra ser usada en las otras funciones
function imprimir(mensajesonia,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensajesonia;
}

function restar(){
    //1. Obtenemos los valores del formulario. Para ello ponemos el id del elemento del formulario y ponemos .value para obtener su valor y guardarlo en una variable
    let num1sonia = document.getElementById("numero11").value;
    let num2sonia = document.getElementById("numero12").value;
    let restarsonia = num1sonia - num2sonia;
    let mensajesonia = "La resta de los numeros " + num1sonia + " y " + num2sonia + " es igual a " + restarsonia;
    //Usamos la funcion de imprimir que hemos declarado antse
    imprimir(mensajesonia,"funcionessonia");
}


function sumar(){
    //1. Obtenemos los valores del formulario. Para ello ponemos el id del elemento del formulario y ponemos .value para obtener su valor y guardarlo en una variable
    let num1soniasuma = document.getElementById("numero13").value;
    let num2soniasuma = document.getElementById("numero14").value;
    let sumarsonia = num1soniasuma + num2soniasuma;
    let mensajesonia = "La suma de los numeros " + num1soniasuma + " y " + num2soniasuma + " es igual a " + sumarsonia;
    //Usamos la funcion de imprimir que hemos declarado antse
    imprimir(mensajesonia,"funcionessoniasuma");
}

function multiplicar(){
    //1. Obtenemos los valores del formulario. Para ello ponemos el id del elemento del formulario y ponemos .value para obtener su valor y guardarlo en una variable
    let num1soniamul = document.getElementById("numero15").value;
    let num2soniamul = document.getElementById("numero16").value;
    let multiplicarsonia = num1soniamul * num2soniamul;
    let mensajesonia = "La multiplicacion de los numeros " + num1soniamul + " y " + num2soniamul + " es igual a " + multiplicarsonia;
    //Usamos la funcion de imprimir que hemos declarado antse
    imprimir(mensajesonia,"funcionessoniamul");
}

function dividir(){
    //1. Obtenemos los valores del formulario. Para ello ponemos el id del elemento del formulario y ponemos .value para obtener su valor y guardarlo en una variable
    let num1soniadiv = document.getElementById("numero17").value;
    let num2soniadiv = document.getElementById("numero18").value;
    let dividirsonia = num1soniadiv / num2soniadiv;
    let mensajesonia = "La division de los numeros " + num1soniadiv + " y " + num2soniadiv + " es igual a " + dividirsonia;
    //Usamos la funcion de imprimir que hemos declarado antse
    imprimir(mensajesonia,"funcionessoniadiv");
}
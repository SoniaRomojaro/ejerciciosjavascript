/*
EJERCICIO 1
Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:

Su longitud

La posición de la palabra QA

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre

Crea una nueva palabra, con la misma frase quitando la palabra que tal.
*/


let mensajeBienvenidaE1 = "Hola que tal, bienvenida a QA";
let longitud = mensajeBienvenidaE1.length;
let posicionQa = mensajeBienvenidaE1.indexOf("QA");
let letraPrimera = mensajeBienvenidaE1[0];
let letraUltima = mensajeBienvenidaE1[longitud -1];
let fraseMayuscula = mensajeBienvenidaE1.toUpperCase();
let fraseMinuscula = mensajeBienvenidaE1.toLowerCase();
let studentName = "Rebeca";
let welcomeMessage = mensajeBienvenidaE1.replace("que tal, bienvenida a QA", studentName);
let welcomeMessage2 = mensajeBienvenidaE1.replace("Hola ","Hola "+ studentName);
let palabra2 = "";
let mensajeBienvenidaSinQueTal = mensajeBienvenidaE1.replace("que tal", palabra2);

let parrafo = document.getElementById("e1longitud");
parrafo.innerText = "La longitud de la frase " + mensajeBienvenidaE1 + " es " + longitud;

parrafo = document.getElementById("e1posicionQA");
parrafo.innerText = "La posicion de la palabra QA es " + posicionQa;

parrafo = document.getElementById("e1letraPrimera");
parrafo.innerText = "La primera letra de la frase " + mensajeBienvenidaE1 + " es " + letraPrimera;

parrafo = document.getElementById("e1letraUltima");
parrafo.innerText = "La ultima letra de la frase " + mensajeBienvenidaE1 + " es " + letraUltima;

parrafo = document.getElementById("e1fraseMayuscula");
parrafo.innerText = "La frase en mayuscula es" + fraseMayuscula;


parrafo = document.getElementById("e1fraseMinuscula");
parrafo.innerText = "La frase en minuscula es " + fraseMinuscula;


parrafo = document.getElementById("e1fraseNombre");
parrafo.innerText = "La frase con el nombre es " + welcomeMessage;

parrafo = document.getElementById("e1fraseSinQueTal");
parrafo.innerText = "La frase sin que tal es " + mensajeBienvenidaSinQueTal;

//OPCION 2 PARA IMPRIMIR
//IMPORTANTE, ESTE MODO VA A AGREGAR EL TEXTO SIEMPRE AL FINAL, EL ANTERIOR VA A ESTAR DONDE TU ELIJAS PONERLO EN EL HTML
/*let divEjercicios = document.getElementById("contenidoEjercicios");
let nuevoParrafo2;

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase sin que tal es " + mensajeBienvenidaSinQueTal;
divEjercicios.appendChild(nuevoParrafo2);

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase con el nombre es " + welcomeMessage;
divEjercicios.appendChild(nuevoParrafo2);
*/


/* EJERCICIO 2:
Crea una variable con una frase en la que te presentes y muestrala junto con:

Su longitud

La posición de tu nombre

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Muestra la frase cambiando tu nombre por otro que elijas.

Crea una nueva palabra, con la misma frase quitando tu nombre.
*/


let frasePresentacion = "Hola, me llamo Rebeca y me gusta leer";
let longitud2 = frasePresentacion.length;
let posicionName = frasePresentacion.indexOf("Rebeca");
let primeraLetra2 = frasePresentacion[0];
let ultimaLetra2 = frasePresentacion[longitud2 - 1];
let mensajeMayuscula = frasePresentacion.toUpperCase();
let mensajeMinuscula = frasePresentacion.toLowerCase();
let otherName = "Marina"
let mensaje4 = frasePresentacion.replace("Rebeca", otherName);
let mensaje5 = frasePresentacion.replace(" me llamo Rebeca", "")


let cadenas = document.getElementById("e2longitud");
cadenas.innerText = "La longitud de de la frase " + frasePresentacion + " es " + longitud2;

cadenas = document.getElementById("e2posicion");
cadenas.innerText = "La posición de la palabra \"Rebeca\" es " + posicionName;

cadenas = document.getElementById("e2letraPrimera");
cadenas.innerText = "La primera letra de la frase es " + primeraLetra2;

cadenas = document.getElementById("e2letraUltima");
cadenas.innerText = "La ultima de la frase es " +  ultimaLetra2;

cadenas = document.getElementById("e2fraseMayuscula");
cadenas.innerText = "La frase completa con letras mayusculas: " + mensajeMayuscula;

cadenas = document.getElementById("e2fraseMinuscula");
cadenas.innerText = "La frase completa con letras minusculas: " + mensajeMinuscula;

cadenas = document.getElementById("e2fraseNombre");
cadenas.innerText = "La frase original es " + frasePresentacion + " y la frase con el nuevo nombre es " + mensaje4;

cadenas = document.getElementById("e2fraseSinNombre");
cadenas.innerText = "La frase original es " + frasePresentacion + " y la frase sin el nombre es " +mensaje5;

/*EJERCICIO 3
Crea una variable con tu nombre completo y muestralo por pantalla. A continuación, quita los espacios de la variable y muestralo por pantalla.*/
let nombreConEspacios = "José Andrés Lorca Gálvez";
//CON EXPRESION REGULAR
//let quitarEspacios = nombreConEspacios.replace(/\s/g, "");
//CON REPLACE ALL, REEMPLAZA TODO EN LUGAR DE SOLO UNO
let quitarEspacios = nombreConEspacios.replaceAll(" ", "");

let e3Imprimir = document.getElementById("e3nombre");
e3Imprimir.innerText = "Mi nombre sin espacios es: " + quitarEspacios + " y con espacios " + nombreConEspacios;

/*EJERCICIO 4 
Crea una variable con una palabra en minuscula y muestralo por pantalla. Cambia la primera letra a mayuscula y muestrala por pantalla.*/
//EJERCICIO 4//

let palabraMinuscula= "rio";
let primeraLetra3 = palabraMinuscula[0]; 
let primeraMayuscula = primeraLetra3.toUpperCase();
let nuevaCadena3 = palabraMinuscula.replace(primeraLetra3,primeraMayuscula);

let nombrepalabraminuscula= document.getElementById("e4palabra");
nombrepalabraminuscula.innerText = "La palabra es " + palabraMinuscula;


let ejemplo31 = document.getElementById("e4palabramayuscula");
ejemplo31.innerText = "La palabra con la primera letra mayuscula es: " + nuevaCadena3;

//solucion alternativa al ejercicio 4
let palabra = "bristol";
//obtenemos la primera letra de la palabra y la pasamos a mayusculas
let primeraLetra22 = palabra.charAt(0).toUpperCase();
let ejercicio4 = document.getElementById("camel");
//unimos la primera letra en mayusculas con la palabra quitando la primera letra slice(1) lo que hace es quitar la primera letra de la palabra
ejercicio4.innerText = primeraLetra22 + palabra.slice(1);

/*EJERCICIO 5
Crea una cadena con el texto Hola Mundo y muestralo por pantalla. Reemplaza la palabra Hola por Adios y muestralo por pantalla.
*/

let holaMundo = "Hola mundo";
let despedida = holaMundo.replace("Hola", "Adios");
let ejercicio5 = document.getElementById ("hola");
ejercicio5.innerText = "Saludo inicial es " + holaMundo + " saludo final es: " + despedida;
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
let divEjercicios = document.getElementById("contenidoEjercicios");
let nuevoParrafo2;

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase sin que tal es " + mensajeBienvenidaSinQueTal;
divEjercicios.appendChild(nuevoParrafo2);

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase con el nombre es " + welcomeMessage;
divEjercicios.appendChild(nuevoParrafo2);


//EJERCICIO2//
//presentacion//
let contarLetras1 = "Hola me llamo Sonia";
let totaletras1 = contarLetras1.length;
let letraSposicion = contarLetras1.indexOf("Hola");
let primeraLetrafrase1 = contarLetras1[0];
let ultimaLetrafrase1 = contarLetras1[contarLetras1.length - 1]; 
let fraseMayuscula1 = contarLetras1.toUpperCase();
let fraseMinuscula1 = contarLetras1.toLowerCase();
let nuevaFrase1 = contarLetras1.replace("Hola me llamo Sonia" , "Hola me llamo María");

let nombreCambiado = "Marcos";
let nuevaFrase2 = contarLetras1.replace("Sonia", nombreCambiado);




let presentacionSonia1= document.getElementById("ejemplo20");
presentacionSonia1.innerText = "Hola me llamo Sonia";

//longitud//
let ejemplo21 = document.getElementById("ejemplo21");
ejemplo21.innerText = "la cadena "+ contarLetras1 + " tiene " + totaletras1 + " caracteres";



//posición//
let ejemplo22 = document.getElementById("ejemplo22");
ejemplo22.innerText = "la posicion de Sonia es "+ letraSposicion;



//primera letra//
let ejemplo23 = document.getElementById("ejemplo23");
ejemplo23.innerText = "La primera letra de la frase " + contarLetras1 + " es " + primeraLetrafrase1;


//última letra"
let ejemplo24 = document.getElementById("ejemplo24");
ejemplo24.innerText = "La última letra de la frase " + contarLetras1 + " es " + ultimaLetrafrase1;


//mayúscula minuscula//
let ejemplo25 = document.getElementById("ejemplo25");
ejemplo25.innerText = "La frase " + contarLetras1 + " ; en mayusculas " + fraseMayuscula1 + " ; en minusculas " + fraseMinuscula1;


//cambiando el nombre//
let ejemplo26 = document.getElementById("ejemplo26");
ejemplo26.innerText = "Esta es la nueva frase: " + nuevaFrase1; 


//Sustituir una palabra por una variable
let ejemplo27 = document.getElementById("ejemplo27");
ejemplo27.innerText = "Antes de reemplazar: " + contarLetras1 + ", despues de reemplazar: " + nuevaFrase2;



//EJERCICIO 2 CON DIV//
let nuevoParrafo11 = document.createElement("p");
nuevoParrafo11.innerText = "Hola me llamo Sonia"
divContenidoEjercicios.appendChild(nuevoParrafo11);


//longitud//
let nuevoParrafo12 = document.createElement("p");
nuevoParrafo12.innerText =  "la cadena "+ contarLetras1 + " tiene " + totaletras1 + " caracteres";
divContenidoEjercicios.appendChild(nuevoParrafo12);


//posición//
let nuevoParrafo13 = document.createElement("p");
nuevoParrafo13.innerText = "la posicion de Sonia es "+ letraSposicion;
divContenidoEjercicios.appendChild(nuevoParrafo13);


//primera letra//
let nuevoParrafo14 = document.createElement("p");
nuevoParrafo14.innerText = "La primera letra de la frase " + contarLetras1 + " es " + primeraLetrafrase1;
divContenidoEjercicios.appendChild(nuevoParrafo14);

//ultima letra//
let nuevoParrafo15 = document.createElement("p");
nuevoParrafo15.innerText = "La última letra de la frase " + contarLetras1 + " es " + ultimaLetrafrase1;
divContenidoEjercicios.appendChild(nuevoParrafo15);



//mayúscula minuscula//
let nuevoParrafo16 = document.createElement("p");
nuevoParrafo16.innerText = "La frase " + contarLetras1 + " ; en mayusculas " + fraseMayuscula1 + " ; en minusculas " + fraseMinuscula1;
divContenidoEjercicios.appendChild(nuevoParrafo16);


//cambiando el nombre//
let nuevoParrafo17 = document.createElement("p");
nuevoParrafo17.innerText = "Esta es la nueva frase: " + nuevaFrase1; 
divContenidoEjercicios.appendChild(nuevoParrafo17);


//nombre cambiado//
let nuevoParrafo18 = document.createElement("p");
nuevoParrafo18.innerText = "Antes de reemplazar: " + contarLetras1 + ", despues de reemplazar: " + nuevaFrase2;
divContenidoEjercicios.appendChild(nuevoParrafo18);




//EJERCICIO 3//
let nombreCompletosonia1= "Maria Perez Perez";
let nombre1= document.getElementById("ejemplo28");
nombre1.innerText = "Maria Perez Perez";


let sinEspacios = nombreCompletosonia1.replace("Maria Perez Perez" , "MariaPerezPerez");
let ejemplo29 = document.getElementById("ejemplo29");
ejemplo29.innerText = "Antes de reemplazar " + nombreCompletosonia1 + " despues de reemplazar " + sinEspacios;

//ejercicio 3 con DIV//
let nuevoParrafo19 = document.createElement("p");
nuevoParrafo19.innerText = "Nombre es "+ nombreCompletosonia1;
divContenidoEjercicios.appendChild(nuevoParrafo19);


let nuevoParrafo20 = document.createElement("p");
nuevoParrafo20.innerText = "Antes de reemplazar " + nombreCompletosonia1 + " despues de reemplazar " + sinEspacios;
divContenidoEjercicios.appendChild(nuevoParrafo20);


//EJERCICIO 4//

let palabraMinuscula= "casa";
let nombrepalabraminuscula= document.getElementById("ejemplo30");
nombrepalabraminuscula.innerText = "casa";



let primeraLetra3 = palabraMinuscula[0]; 
let primeraMayuscula = primeraLetra3.toUpperCase();
let nuevaCadena3 = palabraMinuscula.replace("casa","asa");


let ejemplo31 = document.getElementById("ejemplo31");
ejemplo31.innerText = "La palabra es: " + primeraMayuscula + nuevaCadena3;

//ejercicio 4 con DIV//
let nuevoParrafo21 = document.createElement("p");
nuevoParrafo21.innerText = "La palabra es: " + primeraMayuscula + nuevaCadena3;
divContenidoEjercicios.appendChild(nuevoParrafo21);


//EJERCICIO 4//
let holaMundo1= "Hola Mundo";
let ejercicioholamundo1= document.getElementById("ejemplo32");
ejercicioholamundo1.innerText = "Hola Mundo";

let nuevaCadena4 = holaMundo1.replace("Hola Mundo","Adiós Mundo");
let ejercicioholamundo= document.getElementById("ejemplo33");
ejercicioholamundo.innerText = nuevaCadena4;

//ejercicio 5 con DIV//
let nuevoParrafo22 = document.createElement("p");
nuevoParrafo22.innerText = "Hola Mundo";
divContenidoEjercicios.appendChild(nuevoParrafo22);


let nuevoParrafo23 = document.createElement("p");
nuevoParrafo23.innerText = nuevaCadena4;
divContenidoEjercicios.appendChild(nuevoParrafo23);


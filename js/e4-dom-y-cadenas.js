//JAVASCRIPT DOM. OBTENER ELEMENTOS DE LA PAGINA POR SU ID
//Obtener el elemento html con id ejemplo
let parrafoEjemplo = document.getElementById("ejemplo");
//Modificar el texto del elemento html con id ejemplo
parrafoEjemplo.innerText = "Hola Bootcamp QA";

//Obtener el elemento html con id ejemploTitulo
let tituloEjemplo = document.getElementById("ejemploTitulo");
let miNombre = "Reyes";
let miEdad = 33;
tituloEjemplo.innerText = "Hola mi nombre es " + miNombre + " mi edad es " + miEdad;

//Obtener el elemento html con id ejemplo2 y agregar un texto con etiquetas html
let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.innerHTML = "<b>Ejemplo 2 en negrita</b>";

//Crear un nuevo parrafo dentro del div con id contenido
let divContenido = document.getElementById("contenido");
let nuevoTitulo = document.createElement("h3");
nuevoTitulo.innerText = "Ejemplo Crear Elementos desde Javascript";
divContenido.appendChild(nuevoTitulo);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Hola soy un nuevo parrafo creado";
divContenido.appendChild(nuevoParrafo);


//Obtener el atributo del elemento a con id ejemplo 3 y agregarle una url
let ejemplo3 = document.getElementById("ejemplo3");
let paginaWeb = "https://bootcampqa.com";
ejemplo3.href = paginaWeb;

//Obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

//CADENAS EN JAVASCRIPT
//Escapar caracteres especiales en una cadena se hace con \
let cadenaEjemplo = "Hola mi nombre es \"Juan\" que tal estas";
let ejemplo5 = document.getElementById("ejemplo5");
ejemplo5.innerText = cadenaEjemplo;

//Contar caracteres de una cadena
let ejemploContar = "Bienvenidos a Bootcamp QA";
let totalLetrasCadenaEjemplo = ejemploContar.length;

let ejemplo6 = document.getElementById("ejemplo6");
ejemplo6.innerText = "La cadena " + ejemploContar + " tiene un total de " + totalLetrasCadenaEjemplo + "caracteres";

//Obtener la letra en la posicion que elijas de la cadena
let primeraLetra = ejemploContar[0]; //la primera siempre empieza en 0
let ultimaLetra = ejemploContar[ejemploContar.length - 1]; //El total de letras de la cadena, menos uno porque empieza en 0
let ejemplo7 = document.getElementById("ejemplo7");
ejemplo7.innerText = "La primera letra de la palabra " + ejemploContar + " es " + primeraLetra + " y la ultima letra es " + ultimaLetra;

//Cambiar la cadena todo a mayusculas o minusculas
let cadenaMayusculas = ejemploContar.toUpperCase();
let cadenaMinusculas = ejemploContar.toLowerCase();

let ejemplo8 = document.getElementById("ejemplo8");
ejemplo8.innerText = "La cadena " + ejemploContar + " mayusculas " + cadenaMayusculas + " minusculas " + cadenaMinusculas;

//sustituir texto de una cadena
//Sustituir una palabra por otra
let nuevaCadena = ejemploContar.replace("Bootcamp QA","Mi web");
let ejemplo9 = document.getElementById("ejemplo9");
ejemplo9.innerText = "Antes de reemplazar " + ejemploContar + " despues de reemplazar " + nuevaCadena;
//Sustituir una palabra por una variable
let mensajeBienvenida = "Bienvenido estudiante";
let nombreEstudiante = "Juan";
let nuevoMensajeBienvenida = mensajeBienvenida.replace("estudiante", nombreEstudiante);
let ejemplo10 = document.getElementById("ejemplo10");
ejemplo10.innerText = "Antes de reemplazar " + mensajeBienvenida + " despues de reemplazar " + nuevoMensajeBienvenida;






//EJERCICIOS DE SONIA
//EJERCICIO1//
let contarLetras = "Hola que tal, bienvenida a QA";
let parrafoBienvenida = document.getElementById("ejemplo11");
parrafoBienvenida.innerText = "Hola que tal, bienvenida a QA";


//longitud//

let totaletras = contarLetras.length;

let ejemplo12 = document.getElementById("ejemplo12");
ejemplo12.innerText = "la cadena "+ contarLetras + " tiene " + totaletras + " caracteres";


//posición//
let letraQposicion = contarLetras.length - 1;
let ejemplo13 = document.getElementById("ejemplo13");
ejemplo13.innerText = "la posicion de QA es "+ letraQposicion + " y " + totaletras + ", respectivamente" ;


//primera letra//
let primeraLetrafrase = contarLetras[0];
let ejemplo14 = document.getElementById("ejemplo14");
ejemplo14.innerText = "La primera letra de la frase " + contarLetras + " es " + primeraLetrafrase;


//última letra"
let ultimaLetrafrase = contarLetras[contarLetras.length - 1]; 
let ejemplo15 = document.getElementById("ejemplo15");
ejemplo15.innerText = "La última letra de la frase " + contarLetras + " es " + ultimaLetrafrase;


//mayúscula minuscula//
let fraseMayuscula = contarLetras.toUpperCase();
let fraseMinuscula = contarLetras.toLowerCase();


let ejemplo16 = document.getElementById("ejemplo16");
ejemplo16.innerText = "La frase " + contarLetras + " mayusculas " + fraseMayuscula + " minusculas " + fraseMinuscula;



//Sonia//
let nombreSon = document.getElementById("ejemplo17");
nombreSon.innerText = "Sonia";

nombreSonmodificada = document.getElementById("ejemplo18");
nombreSonmodificada.innerText = "Hola " + nombreSon.innerText;


//sin que tal//
let palabra2 = "";
let nuevaFrase = contarLetras.replace("que tal, palabra2");
let ejemplo19 = document.getElementById("ejemplo19");
ejemplo19.innerText = "Esta es la nueva frase: " + nuevaFrase; 




//EJERCICIO 1 CON DIV//
let divContenidoEjercicios = document.getElementById("contenidoEjercicios");
let nuevoTitulo1 = document.createElement("h3");
nuevoTitulo1.innerText = "Sonia Ejemplo Crear Elementos desde Javascript";
divContenidoEjercicios.appendChild(nuevoTitulo1);



let nuevoParrafo1 = document.createElement("p");
nuevoParrafo1.innerText = "Hola soy un nuevo parrafo creado";
divContenidoEjercicios.appendChild(nuevoParrafo1);


let nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "Hola que tal bienvenida a QA";
divContenidoEjercicios.appendChild(nuevoParrafo2);



let nuevoParrafo3 = document.createElement("p");
nuevoParrafo3.innerText = "la cadena "+ contarLetras + " tiene " + totaletras + " caracteres";
divContenidoEjercicios.appendChild(nuevoParrafo3);


let nuevoParrafo4 = document.createElement("p");
nuevoParrafo4.innerText = "la posicion de QA es "+ letraQposicion + " y " + totaletras + ", respectivamente" ;
divContenidoEjercicios.appendChild(nuevoParrafo4);


let nuevoParrafo5 = document.createElement("p");
nuevoParrafo5.innerText = "La primera letra de la frase " + contarLetras + " es " + primeraLetrafrase;
divContenidoEjercicios.appendChild(nuevoParrafo5);


let nuevoParrafo6 = document.createElement("p");
nuevoParrafo6.innerText = "La última letra de la frase " + contarLetras + " es " + ultimaLetrafrase;
divContenidoEjercicios.appendChild(nuevoParrafo6);



let nuevoParrafo7 = document.createElement("p");
nuevoParrafo7.innerText = "La frase " + contarLetras + " ; en mayúsculas es: " + fraseMayuscula + " ; en minúsculas es: " + fraseMinuscula
divContenidoEjercicios.appendChild(nuevoParrafo7);



let nuevoParrafo8 = document.createElement("p");
nuevoParrafo8.innerText = nombreSon.innerText;
divContenidoEjercicios.appendChild(nuevoParrafo8);


let nuevoParrafo9 = document.createElement("p");
nuevoParrafo9.innerText = "Hola " + nombreSon.innerText;
divContenidoEjercicios.appendChild(nuevoParrafo9);


let nuevoParrafo10 = document.createElement("p");
nuevoParrafo10.innerText = "Esta es la nueva frase: " + nuevaFrase; 
divContenidoEjercicios.appendChild(nuevoParrafo10);





//EJERCICIO2//
//presentacion//
let presentacionSonia1= document.getElementById("ejemplo20");
presentacionSonia1.innerText = "Hola me llamo Sonia";

//longitud//
let contarLetras1 = "Hola me llamo Sonia";
let totaletras1 = contarLetras1.length;
let ejemplo21 = document.getElementById("ejemplo21");
ejemplo21.innerText = "la cadena "+ contarLetras1 + " tiene " + totaletras1 + " caracteres";



//posición//
let letraSposicion = contarLetras1.length - 5;
let ejemplo22 = document.getElementById("ejemplo22");
ejemplo22.innerText = "la posicion de Sonia es "+ letraSposicion;



//primera letra//
let primeraLetrafrase1 = contarLetras1[0];
let ejemplo23 = document.getElementById("ejemplo23");
ejemplo23.innerText = "La primera letra de la frase " + contarLetras1 + " es " + primeraLetrafrase1;


//última letra"
let ultimaLetrafrase1 = contarLetras1[contarLetras1.length - 1]; 
let ejemplo24 = document.getElementById("ejemplo24");
ejemplo24.innerText = "La última letra de la frase " + contarLetras1 + " es " + ultimaLetrafrase1;



//mayúscula minuscula//
let fraseMayuscula1 = contarLetras1.toUpperCase();
let fraseMinuscula1 = contarLetras1.toLowerCase();
let ejemplo25 = document.getElementById("ejemplo25");
ejemplo25.innerText = "La frase " + contarLetras1 + " ; en mayusculas " + fraseMayuscula1 + " ; en minusculas " + fraseMinuscula1;


//cambiando el nombre//
let nuevaFrase1 = contarLetras1.replace("Hola me llamo Sonia" , "Hola me llamo María");
let ejemplo26 = document.getElementById("ejemplo26");
ejemplo26.innerText = "Esta es la nueva frase: " + nuevaFrase1; 


//Sustituir una palabra por una variable
let nombreCambiado = "Marcos";
let nuevaFrase2 = contarLetras1.replace("Sonia", nombreCambiado);
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


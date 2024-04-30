//1. DECLARAR UNA VARIABLE
//Nombre de variable recomendado en minuscula
let variable;
//Nombre de variable si tiene espacio, usar camelCase, que es la primera palabra minuscula y la siguiente mayuscula sin espacios
let miVariable;
//Podeis usar guiones para separar los espacios pero es mas recomendable camelCase.
let mi_variable;
//Los nombres de las variables no pueden comenzar por un numero 2Nombre
//Los nombres de las variables pueden tener un numero siempre y cuando no empiece por el
let variable2;

//2.INICIAR UNA VARIABLE
//Primero declarar la variable y luego iniciarla.
document.write("EJEMPLO 1: INICIAR UNA VARIABLE CIUDAD </br>");

let ciudad;
ciudad = "Madrid";
document.write("La variable ciudad tiene el valor: " + ciudad);

//Declarar la variable e iniciarla a la vez
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad = 33;
//cambiamos el valor de la variable edad
edad = 34;
document.write("La variable edad tiene el valor: " + edad);


//TIPOS DE VARIABLES
//NUMERO ENTERO O CON DECIMALES. LOS DECIMALES VAN CON PUNTO. Y SIEMPRE SIN COMILLAS LOS NUMEROS.
document.write("</br> EJEMPLO 3: CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es:" + numero);
document.write("</br>");
document.write("El numero con decimales es "+ numeroDecimales);
//CADENAS. Pueden usarse comillas simples o dobles. No las mezcles, usa solo una de ellas. Cuidado con caracteres especiales, no pueden ir comillas del mismo tipo dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARIABLE DE TIPO TEXTO - STRING </br>");
let saludo = "Hola que tal?";
let despedida = 'Adios me voy';
let numeroEnTexto = "33";
document.write("La variable de texto saludo es: "+ saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
//BOOLEANOS. true o false. En minuscula y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARIABLE DE TIPO BOOLEANO </br>");
let estaSoleado = true;
let esDeDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es de dia es:" + esDeDia);

//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");
let nombre;
nombre = "Sonia"; 
document.write("El nombre es: " + nombre);
document.write("</br>");
let apellidouno;
apellidouno = "Sanchez";
document.write("Primer apellido: " + apellidouno);
document.write("</br>");
let apellidodos;
apellidodos = "Ortiz";
document.write("Segundo apellido: " + apellidodos);
document.write("</br>");
document.write("Apellidos: " +apellidouno + " "+ apellidodos);
document.write("</br>");
document.write("Apellido uno: " + apellidouno + "; Apellido dos: "+ apellidodos);
document.write("</br>");
let = edad; 
edad = 25;
document.write("Edad: " + edad);
document.write("</br>");
let altura;
altura = 1.60;
document.write("Altura: " + altura);
document.write("</br>");
let miCiudad;
miCiudad = "Madrid";
document.write("Ciudad: " + miCiudad);
document.write("</br>");
let gustaPlaya = true;
document.write("¿Le gusta la playa?: "+ gustaPlaya);
document.write("</br>");
let gustaMontaña = true;
document.write("¿Le gusta la montaña?: "+ gustaMontaña);
document.write("</br>");
let gustaChocolate = false;
document.write("¿Le gusta el chocolate?: "+ gustaChocolate);
document.write("</br>");
let tieneMascota = true;
document.write("¿Tiene mascota?: "+ tieneMascota);
document.write("</br>");
let nombreamigo;
nombreamigo = "Pedro"; 
document.write("El nombre es: " + nombreamigo);
document.write("</br>");
let apellidounoamigo;
apellidounoamigo = "Rodriguez";
document.write("Primer apellido: " + apellidounoamigo);
document.write("</br>");
let apellidodosamigo;
apellidodosamigo = "Ortiz";
document.write("Segundo apellido: " + apellidodosamigo);
document.write("</br>");
let edadamigo;
edadamigo = 30;
document.write("Edad: " +edadamigo);
document.write("</br>");
let alturaamigo;
alturaamigo = 1.90;
document.write("Altura: " + alturaamigo);
document.write("</br>");
let miCiudadamigo;
miCiudadamigo = "Madrid";
document.write("Ciudad: " + miCiudadamigo);
document.write("</br>");
let gustaPlayaamigo = true;
document.write("¿Le gusta la playa?: "+ gustaPlayaamigo);
document.write("</br>");
let gustaMontañaamigo = true;
document.write("¿Le gusta la montaña?: "+ gustaMontañaamigo);
document.write("</br>");
let gustaChocolateamigo = false;
document.write("¿Le gusta el chocolate?: "+ gustaChocolateamigo);
document.write("</br>");
let tieneMascotaamigo = true;
document.write("¿Tiene mascota?: "+ tieneMascotaamigo);
document.write("</br>");
let peliculaFavorita
peliculaFavorita = "Bajo el Sol de la Toscana"; 
document.write("Película Favorita: " + peliculaFavorita);
document.write("</br>");
let director;
director = "Steven Spielber";
document.write("Director: " + director);
document.write("</br>");
let añoLanzamiento; 
añoLanzamiento = "2003";
document.write("Año lanzamiento: " + añoLanzamiento);
document.write("</br>");
let genero;
genero ="comedia";
document.write("Genero: " + genero);
document.write("</br>");
let duracionMinutos;
duracionMinutos = 120
document.write("Duración en minutos: " + duracionMinutos + " minutos");
document.write("</br>");
let premios = false;
document.write("¿Tiene premios?: " + premios);
document.write("</br>");
let peliculaFavoritaingles;
peliculaFavoritaingles = "Under the sun in Toscana"; 
document.write("Película Favorita: " + peliculaFavoritaingles);
document.write("</br>");
let generoingles;
generoingles ="comedy";
document.write("Genero: " + generoingles);
document.write("</br>");
let tituloCancion;
tituloCancion = "Si bastasen un par de canciones"; 
document.write("Canción favotita: " + tituloCancion);
document.write("</br>");
let artista; 
artista = "Eros Ramazotti";
document.write("Cantante:  " +artista);
document.write("</br>");
let album;
album = "Si bastasen un par de canciones";
document.write("Album: " + album);
document.write("</br>");
let añoLanzamiento2;
añoLanzamiento2 = 2000;
document.write("Año lanzamiento: " +añoLanzamiento);
document.write("</br>");
let duracionMinutos2; 
duracionMinutos2 = 3
document.write("Duración: " + duracionMinutos2 + " minutos");
document.write("</br>");
let videoclip = true;
document.write("¿Tiene videoclip?: "+ videoclip);
document.write("</br>");
let tituloCancion2;
tituloCancion2 = "Cien Gaviotas"; 
document.write("Canción favotita: " + tituloCancion2);
document.write("</br>");
let artista2; 
artista2 = "Ducan Dhu";
document.write("Cantante:  " +artista2);
document.write("</br>");
let album2;
album2 = "Cien gaviotas";
document.write("Album: " + album2);
document.write("</br>");
let añoLanzamiento21;
añoLanzamiento21 = 2000;
document.write("Año lanzamiento: " +añoLanzamiento21);
document.write("</br>");
let duracionMinutos21; 
duracionMinutos21 = 4
document.write("Duración: " + duracionMinutos21 + " minutos");
document.write("</br>");
let videoclip1 = true;
document.write("¿Tiene videoclip?: "+ videoclip1);
document.write("</br>");
let titulolibro;
titulolibro = "Aires difíciles"; 
document.write("Título libro: " + titulolibro);
document.write("</br>");
let autor; 
autor = "Almudena Grandes"; 
document.write("Autor: " + autor);
document.write("</br>");
let generolibro;
generolibro = "Drama";
document.write("Género: " + generolibro);
document.write("</br>");
let añopublicacion;
añopublicacion =2000;
document.write("Año publicacion: " +añopublicacion);
document.write("</br>");
let numeroPaginas;
numeroPaginas =200;
document.write("Número de páginas: " + numeroPaginas);
document.write("</br>");
let tienePelicula = true;
document.write("Tiene película: " +tienePelicula);
document.write("</br>");
let titulolibro2;
titulolibro2 = "1984"; 
document.write("Título libro: " + titulolibro2);
document.write("</br>");
let autor2; 
autor2 = "George Rwell"; 
document.write("Autor: " + autor2);
document.write("</br>");
let generolibro2;
generolibro2 = "Ciencia Ficción";
document.write("Género: " + generolibro2);
document.write("</br>");
let añopublicacion2;
añopublicacion2 =1949;
document.write("Año publicacion: " +añopublicacion2);
document.write("</br>");
let numeroPaginas2;
numeroPaginas2 =200;
document.write("Número de páginas: " + numeroPaginas2);
document.write("</br>");
let tienePelicula2 = true;
document.write("Tiene película: " +tienePelicula2);
document.write("</br>");
let nombreDeporte; 
nombreDeporte = "fútbol";
document.write("Nombre del deporte: " +nombreDeporte);
document.write("</br>");
let lugarOrigen;
lugarOrigen = "Italia";
document.write("Lugar de Origen: " + lugarOrigen);
document.write("</br>");
let polularidad;
polularidad = 10; 
document.write("Polularidad en escala de 1 a 10: " + polularidad);
document.write("</br>");
let equipamiento; 
equipamiento = "balón, ropa, campo";
document.write("Equipamiento: " +equipamiento);
document.write("</br>");
let deporteEquipo = true; 
document.write("Deporte de equipo: " +deporteEquipo);
document.write("</br>");
let exteriores= true;
document.write("Se practica en exteriores: " +exteriores);
document.write("</br>");
let nombreDeportenatacion; 
nombreDeportenatacion = "Natación";
document.write("Nombre del deporte: " +nombreDeportenatacion);
document.write("</br>");
let lugarOrigen2;
lugarOrigen2 = "España";
document.write("Lugar de Origen: " + lugarOrigen2);
document.write("</br>");
let polularidadnatación;
polularidadnatación = 7; 
document.write("Polularidad en escala de 1 a 10: " + polularidadnatación);
document.write("</br>");
let equipamientonatacion; 
equipamientonatacion = "piscina";
document.write("Equipamiento: " + equipamientonatacion);
document.write("</br>");
let deporteEquiponatacion = false; 
document.write("Deporte de equipo: " +deporteEquiponatacion);
document.write("</br>");
let exterioresnatacion= false;
document.write("Se practica en exteriores: " +exterioresnatacion);
document.write("</br>");

let destino; 
destino = "Madeira"; 
document.write("Destino: " +destino);
document.write("</br>");
let pais; 
pais = "Portugal"; 
document.write("País: " + pais);
document.write("</br>");
let clima; 
clima = "Mediterráneo";
document.write("Clima: " + clima);
document.write("</br>");
let poblacion
poblacion = "10 millones"
document.write("Poblacion: " + poblacion + " de habitantes");
document.write("</br>");
let atraccionesturisticas;
atraccionesturisticas = "cultura, gastronomía, etc."
document.write("Atracciones turísticas: " + atraccionesturisticas);
document.write("</br>");
let destinocostero= false;
document.write("Es destino costero: " + destinocostero);
document.write("</br>");
let destinourbano = false; 
document.write("Es destino urbano: " + destinocurbano);
document.write("</br>");

destino = "Malaga"; 
document.write("Destino: " + destino);
document.write("</br>");
pais = "España"; 
document.write("País: " + pais);
document.write("</br>");
clima = "Mediterráneo";
document.write("Clima: " + clima);
document.write("</br>");
poblacion = 500000
document.write("Poblacion: " + poblacion + " habitantes");
document.write("</br>");
atraccionesturisticas = "cultura, gastronomía, etc."
document.write("Atracciones turísticas: " + atraccionesturisticas);
document.write("</br>");
document.write("Es destino costero: " + destinocostero);
document.write("</br>");
let destinocurbano =true;
document.write("Es destino urbano: " + destinocurbano);
document.write("</br>");



//CONSTANTES
// PARA VALORES QUE NO CAMBIAN
const NUMERODEDIASSEMANA = 7;

document.write("la semana tiene "+ NUMERODIASSEMANA + "dias");
document.write("</br>");



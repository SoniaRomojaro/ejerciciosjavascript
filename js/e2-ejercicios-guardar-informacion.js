//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");

document.write("EJERCICIO 1</br>");
let nombre;
let apellidos;
let edad;
let altura;
let ciudad;
let gustaPlaya;
let gustaMontaña;
let gustaChocolate;
let tieneMascota;

nombre = "Samanta";
apellidos = "Ramos";
edad = 39;
altura = 1.70;
ciudad = "Malaga";
gustaPlaya = true;
gustaMontaña = true;
gustaChocolate = false;
tieneMascota = true;

document.write("Información de la persona:</br>");
document.write("Nombre:" + nombre + "</br>");
document.write("Apellidos:" + apellidos + "</br>");
document.write("Edad:" + edad + "</br>");
document.write("Altura:" + altura + "</br>");
document.write("Ciudad:" + ciudad + "</br>");
document.write("¿Le gusta la playa?</br>" + gustaPlaya + "</br>");
document.write("¿Le gusta la montaña?</br>" + gustaMontaña + "</br>");
document.write("¿Le gusta el chocolate?</br>" + gustaChocolate + "</br>");
document.write("¿Tienes mascota?</br>" + tieneMascota + "</br>");
document.write("</br>")

document.write("INFORMACION DE UN CONOCIDO</br>")
nombre = "Francisco";
apellidos = "Coronado";
edad = 58;
altura = 1.78;
ciudad = "Malaga";
gustaPlaya = false;
gustaMontaña = false;
gustaChocolate = false;
tieneMascota = true;

document.write("Información de la persona:</br>");
document.write("Nombre:" + nombre + "</br>");
document.write("Apellidos:" + apellidos + "</br>");
document.write("Edad:" + edad + "</br>");
document.write("Altura:" + altura + "</br>");
document.write("Ciudad:" + ciudad + "</br>");
document.write("¿Le gusta la playa?</br>" + gustaPlaya + "</br>");
document.write("¿Le gusta la montaña?</br>" + gustaMontaña + "</br>");
document.write("¿Le gusta el chocolate?</br>" + gustaChocolate + "</br>");
document.write("¿Tienes mascota?</br>" + tieneMascota + "</br>");
document.write("</br>");



document.write("</br> EJERCICIO 2</br>");
document.write("</br> asígnale los valores de tu película favorita y muéstrala en tu página </br>");
let movieTitle = "Ataque del Titan";
let director = "Tetsurō Araki";
let genero = "anime";
let yaerRelease = 2013;
let duration = 72;
let awards = true;

document.write("El anime es " + movieTitle + ", el director es el " + director + ", su año de lanzamiento fue en " + yaerRelease + " y tiene " + duration + " episodios.");
document.write("El genero es: " + genero);
document.write("</br>");
document.write("Tiene premios?: " + awards);
document.write("</br>");

document.write("</br> Cambiar titulo y genero a ingles </br>");
movieTitle = "Attack on Titan";
genero = "animation";

document.write("El anime es " + movieTitle + ", el director es el " + director + ", su año de lanzamiento fue en " + yaerRelease + " y tiene " + duration + " episodios.");
document.write("El genero es: " + genero);
document.write("</br>");
document.write("Tiene premios?: " + awards);
document.write("</br>");

document.write("</br> EJERCICIO  3 - DECLARAR VARIABLES SOBRE UNA CANCIÓN </br>");

let songTitle = "Sweet Child o Mine";
let artist = "Guns N'Roses";
let album = "Appetite For Destruction";
let releaseYear = 1987;
let minDuration = 5.6;
let hasVideoclip = true;
document.write("<br>");
document.write("The title of the song is:" + songTitle + "<br>");
document.write("The name of the artist is:" + artist + "<br>");
document.write("The name of the of the album is:" + album + "<br>");
document.write("What is the year of release?:" + releaseYear + "<br>");
document.write("How long is the song?:" + minDuration + "<br>");
document.write("Does the song a videoclip?:" + hasVideoclip + "<br>");

document.write("</br> EJERCICIO  3.1 - CAMBIAR LOS VALORES POR OTRA CANCIÓN </br>");

songTitle = "Su culo es miel";
artist ="Extermoduro";
album = "Canciones Prohibidas";
releaseYear = 1998;
minDuration = 5.5;
hasVideoclip = false;
document.write("<br>");
document.write("The title of the song is:" + songTitle + ", ");
document.write("The name of the artist is:" + artist + "<br>");
document.write("The name of the of the album is:" + album + "<br>");
document.write("What is the year of release?:" + releaseYear + "<br>");
document.write("How long is the song?:" + minDuration + "<br>");
document.write("Does the song a videoclip?:" + hasVideoclip + "<br>");

// Ejercicio 4: Declara variables para guardar la siguiente información sobre un libro. Asigna los valores de tu libro favorito y muéstrala en tu página. A continuación cambia los valores de las variables por el del libro favorito de alguien que conozcas.
document.write("EJERCICIO  4 <br>");
let libro = "El corazón helado";
let autor = "Almudena Grandes";
let genero2 = "Novela histórica, ficción";
let publicacion = 2007;
let numeroPaginas = 800;
let tienePelicula = false;

document.write("MI LIBRO FAVORITO</br>");
document.write("El título del libro es " + libro + "</br>");
document.write("El nombre de la autora es " + autor + "</br>");
document.write("El género del libro es " + genero2 + "</br>");
document.write("El libro se publicó en " + publicacion + "</br>");
document.write("El libro tiene "  + numeroPaginas +" " + "páginas " + "</br>");
document.write("¿El libro tiene película? "+ tienePelicula + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");


libro = "El Conde de Montecristo";
autor = "Alexandre Dumas";
genero2 = "Novela histórica, aventuras";
publicacion = 1846;
numeroPaginas = 1000;
tienePelicula = true;

document.write("LIBRO FAVORITO DE ALGUIEN QUE CONOZCO</br>");
document.write("El título del libro es " + libro + "</br>");
document.write("El nombre de la autora es " + autor + "</br>");
document.write("El género del libro es " + genero2 + "</br>");
document.write("El libro se publicó en " + publicacion + "</br>");
document.write("El libro tiene "  + numeroPaginas +" " + "páginas " + "</br>");
document.write("¿El libro tiene película? "+ tienePelicula + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

document.write("<h4>EJERCICIO 5: ASIGNAR VALORES A VARIABLES CON DATOS DE DEPORTES Y CAMBIARSELOS </h4>");
let nombreDeporte, lugarDeporte, popularidadDeporte, equipamientoDeporte, esDeporteEquipo, esDeporteExterior;
nombreDeporte = "Voleibol";
lugarDeporte = "Estados Unidos";
popularidadDeporte = 8;
equipamientoDeporte = "Red y pelota";
esDeporteEquipo = true;
esDeporteExterior = true;

document.write("<p>1. Informacion sobre el deporte: <b>" + nombreDeporte + "</b></p>");
document.write("<p>· Lugar de origen = " + lugarDeporte + "</p>");
document.write("<p>· Popularidad = " + popularidadDeporte + "</p>");
document.write("<p>· Equipamiento necesario = " + equipamientoDeporte + "</p>");
document.write("<p>· ¿Es un deporte de equipo? = " + esDeporteEquipo + "</p>");
document.write("<p>· ¿Se práctica en exteriores? = " + esDeporteExterior + "</p>");

//Cambiar valores y volverlos a mostrar por pantalla
nombreDeporte = "Natación";
lugarDeporte = "Gran Bretaña";
popularidadDeporte = 9;
equipamientoDeporte = "Bañador, gorro y gafas";
esDeporteEquipo = true;
esDeporteExterior = true;

document.write("<p>2. Informacion sobre el deporte: <b>" + nombreDeporte + "</b></p>");
document.write("<p>· Lugar de origen = " + lugarDeporte + "</p>");
document.write("<p>· Popularidad = " + popularidadDeporte + "</p>");
document.write("<p>· Equipamiento necesario = " + equipamientoDeporte + "</p>");
document.write("<p>· ¿Es un deporte de equipo? = " + esDeporteEquipo + "</p>");
document.write("<p>· ¿Se práctica en exteriores? = " + esDeporteExterior + "</p>");
document.write("<hr>");

document.write("</br> EJERCICIO  6 - DECLARAR VARIABLES PARA VIAJES. DESTINO DE VIAJE FAVORITO</br>");

let destination = "Kioto";
let country = "Japón";
let predominantClimate = "Damp";
let population = 1465000;
let touristAttraction = "Fushimi Inari-Taisha (Santuario principal al dios Inari) Templo del Pabellón de Oro (Kinkaku-ji), Kiyomizu-dera (Templo del agua pura) el mercado del distrito de Nishiki, Eikan-do (templo con unos jardines perfectos), Castillo Nijo";
let coastalDestination = true;
let urbanDestination = true;
document.write("<br>");
document.write("Nombre del destino:" + destination + "<br>");
document.write("Nombre país:" + country + "<br>");
document.write("¿Cuál es el clima predominante?:" + predominantClimate + "<br>");
document.write("¿Cuál es su población?:" + population + "<br>");
document.write("Principales atracciones turísticas:" + touristAttraction + "<br>");
document.write("¿Es un destino costero?:" + coastalDestination + "<br>");
document.write("Es un destino urbano?:" + urbanDestination + "<br>");


document.write("</br> EJERCICIO  6.1 - CAMBIAR VARIABLES CON DESTINO MÁLAGA</br>");

destination = "Málaga";
country = "España";
predominantClimate = "Soleado";
population = 579076;
touristAttraction = "Fortaleza de la Alcazaba, Catedral de Málaga, Castillo de Gibralfaro, Puerto de Málaga, Calle Larios, Plaza de la Constitución, \ Teatro Romano, Mirador del Gibralfaro, Basílica de Santa María de la Victoria, Iglesia de los Mártires.";


document.write("<br>");
document.write("Nombre del destino:" + destination + "<br>");
document.write("Nombre país:" + country + "<br>");
document.write("¿Cuál es el clima predominante?:" + predominantClimate + "<br>");
document.write("¿Cuál es su población?:" + population + "<br>");
document.write("Principales atracciones turísticas:" + touristAttraction + "<br>");
document.write("¿Es un destino costero?:" + coastalDestination + "<br>");
document.write("Es un destino urbano?:" + urbanDestination + "<br>");

document.write("</br> EJERCICIO  6 VERSION 2</br>");

let destino; 
let pais; 
let clima; 
let poblacion;
let atraccionesTuristicas;
let destinoCostero= false;
let destinoUrbano = false; 

destino = "Madeira"; 
pais = "Portugal";
clima = "Mediterráneo";
poblacion = 10000000;
atraccionesTuristicas = "cultura, gastronomía, etc.";
 


document.write("Destino: " +destino);
document.write("</br>");

document.write("País: " + pais);
document.write("</br>");

document.write("Clima: " + clima);
document.write("</br>");

document.write("Poblacion: " + poblacion + " de habitantes");
document.write("</br>");

document.write("Atracciones turísticas: " + atraccionesTuristicas);
document.write("</br>");

document.write("Es destino costero: " + destinoCostero);
document.write("</br>");

document.write("Es destino urbano: " + destinoUrbano);
document.write("</br>");

destino = "Malaga"; 
pais = "España"; 
clima = "Mediterráneo";
poblacion = 500000;
atraccionesTuristicas = "cultura, gastronomía, etc.";
destinoUrbano =true;

document.write("Destino: " + destino);
document.write("</br>");

document.write("País: " + pais);
document.write("</br>");

document.write("Clima: " + clima);
document.write("</br>");

document.write("Poblacion: " + poblacion + " habitantes");
document.write("</br>");

document.write("Atracciones turísticas: " + atraccionesTuristicas);
document.write("</br>");
document.write("Es destino costero: " + destinoCostero);
document.write("</br>");

document.write("Es destino urbano: " + destinoUrbano);
document.write("</br>");
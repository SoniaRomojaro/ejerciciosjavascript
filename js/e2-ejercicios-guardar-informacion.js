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




//EJERCICIOS HECHOS POR SONIA
let miNombre;
let apellidosSegundo;
let edadSegundo;
let alturaDos;
let ciudadSegundo;
let gustaPlayasegundo;
let gustaMontañasegundo;
let gustaChocolatesegundo;
let tieneMascotasegundo;

miNombre ="Sonia";
apellidosSegundo = "Sanchez";
edadSegundo = 30;
alturaDos =1.65;
ciudadSegundo = "Madrid";
gustaPlayasegundo = true;
gustaMontañasegundo = true;
gustaChocolatesegundo = false;
tieneMascotasegundo = true;

document.write("INFORMACION DE LA PERSONA:</br>");
document.write("Mi nombre es: " + miNombre + "</br>");
document.write("Apellidos: " + apellidosSegundo +"</br>");
document.write("Edad: " + edadSegundo +"</br>");
document.write("Altura: " + alturaDos + "</br>");
document.write("Ciudad: " + ciudadSegundo + "</br>");
document.write("¿Le gusta la playa?: " + gustaPlayasegundo + "</br>");
document.write("¿Le gusta la montaña?: " + gustaMontañasegundo + "</br>");
document.write("¿Le gusta el chocolate?: " + gustaChocolatesegundo + "</br>");
document.write("¿Tiene mascota?: " + tieneMascotasegundo + "</br>");

document.write("INFORMACION DE UN CONOCIDO:</br>");
miNombre ="Pepe";
apellidosSegundo = "Sanchez";
edadSegundo = 35;
alturaDos =1.70;
ciudadSegundo = "Madrid";
gustaPlayasegundo = false;
gustaMontañasegundo = true;
gustaChocolatesegundo = false;
tieneMascotasegundo = false;

document.write("Información de la persona:</br>");
document.write("Nombre: " + miNombre + "</br>");
document.write("Apellidos: " + apellidosSegundo +"</br>");
document.write("Edad: " + edadSegundo +"</br>");
document.write("Altura: " + alturaDos + "</br>");
document.write("Ciudad: " + ciudadSegundo + "</br>");
document.write("¿Le gusta la playa?: " + gustaPlayasegundo + "</br>");
document.write("¿Le gusta la montaña?: " + gustaMontañasegundo + "</br>");
document.write("¿Le gusta el chocolate?: " + gustaChocolatesegundo + "</br>");
document.write("¿Tiene mascota?: " + tieneMascotasegundo + "</br>");



document.write("EJERCICIO 7 EJERCICIOS DE CONSTANTES:</br>");
const NUMEROMESESAÑO = 12;
const  NUMERODEDIASSEMANADOS =7;
let numeroHabitantescuidad;
let edadCantante;
const  ESTACIONESAÑO = 4;
let cuidadVivo;
const NUMEROHORASDIA = 24;
let precioGasolina;
let numeroLibros;

numeroHabitantescuidad = 3000000;
edadCantante = 40;
cuidadVivo = "Madrid";
precioGasolina = 1.75;
numeroLibros = 50;

document.write("El año tiene " + NUMEROMESESAÑO + " meses" + "</br>");
document.write("La semana tiene " + NUMERODEDIASSEMANADOS + " días" + "</br>");
document.write(" Número de habitantes de la cuidad: " + numeroHabitantescuidad + " habitantes" +"</br>");
document.write(" Edad cantante favorito: " + edadCantante + " años" +"</br>");
document.write("El año tiene " + ESTACIONESAÑO + " estaciones" +"</br>");
document.write("Vivo en  " + cuidadVivo +"</br>");
document.write("El día tiene " + NUMEROHORASDIA + " horas" + "</br>");
document.write("La gasolina cuesta " + precioGasolina + " euros" + "</br>");
document.write("He leído " + numeroLibros + " libros" + "</br>");


document.write("EJERCICIOS DE OPERACIONES:</br>");
let precioManzana = 2.5;
let precioPera = 1.5
let precioPlatano = 1.8; 
let precioManzanapera;
let precioPlatanopera;
let kilosperas = 2;
let precio2kilosperas;
let kilosplatanos = 3; 
let kilos2manzanas = 2; 
let kilos3peras = 3;
let prec2kgmanzanas3peras;
let kilos1deplatanos = 1.5;
let kilos3manzanas =3; 
let prec1kgplata2kgperas3kmanza;
let kilos25peras =2.5;
let kilos35platanos = 3.5;
let prec25kgperas35kgplatanos


precioManzanapera = precioManzana + precioPera;
precioPlatanopera = precioPlatano +precioPera;
precio2kilosperas = precioPera * kilosperas;
precio3kilosplatanos = precioPlatano * kilosplatanos;
prec2kgmanzanas3peras = (kilos2manzanas * precioManzana) + (kilos3peras * precioPera);
prec1kgplata2kgperas3kmanza = (kilos1deplatanos * precioPlatano) + (kilosperas * precioPera) + (kilos3manzanas * precioManzana);
prec25kgperas35kgplatanos = (kilos25peras * precioPera) + (kilos35platanos * precioPlatano);

document.write("Precio manzanas " + precioManzana + " euros por Kg" + "</br>");
document.write("Precio peras " + precioPera + " euros por Kg" + "</br>");
document.write("Precio total de manzanas y peras " + precioManzanapera + " euros"+ "</br>"); 
document.write("Precio plátanos " + precioPlatano + " euros por Kg" + "</br>");
document.write("Precio total de plátanos y peras " + precioPlatanopera + " euros"+ "</br>"); 
document.write("Precio de 2 kg de peras son " + precio2kilosperas + " euros" + "</br>");
document.write("Precio de 3 kg de platanos son " + precio3kilosplatanos + " euros" + "</br>");
document.write("Precio de 2 kg de manzanas y 3 kg de peras son " + prec2kgmanzanas3peras + " euros" + "</br>");
document.write("Precio de 1,5 kg de plátanos, 2 kg de peras y 3 kg de manzanas son " + prec1kgplata2kgperas3kmanza + " euros" + "</br>");
document.write("Precio de 2,5 kg de peras y 3,5 Kg de plátanos son " + prec25kgperas35kgplatanos + " euros" + "</br>");

let notaDeexamen1 = 7.5;
let notaDeexamen2 = 10.5;
let notaDeexamen3 = 8;
let notaDeexamen4 = 9.5;
let notaDeexamen5 = 7;
let totalDeexamenes = 5;
let notaMediaexamen;

notaMediaexamen = (notaDeexamen1 + notaDeexamen2 + notaDeexamen3+ notaDeexamen4 + notaDeexamen5)/ totalDeexamenes;

document.write("Nota del examen 1: " + notaDeexamen1 +", " + "Nota del examen 2: " + notaDeexamen2 + ", " + "Nota del examen 3: " + notaDeexamen3 + ", " + "Nota del examen 4: " + notaDeexamen4 + ", " + "Nota del examen 5: " +  notaDeexamen5 + ", " + "Da una media de : " + notaMediaexamen + " </br>");


let basecuadrado = 5;
let alturacuadrado =5;
let area; 

area = basecuadrado * alturacuadrado; 

document.write("Área del cuadrado es base por altura. La base es " + basecuadrado + " cm y la altura es " + alturacuadrado + " cm. Por lo que el área es " + area + " cm" + "</br>");

let baserectangulo = 8;
let alturarectangulo =6;
let arearectangulo; 

arearectangulo = baserectangulo * alturarectangulo; 

document.write("Área del rectángulo es base por altura. La base es " + baserectangulo + " cm y la altura es " + alturarectangulo + " cm. Por lo que el área es " + arearectangulo + " cm" + "</br>");


let basetriangulo = 10;
let alturatriangulo = 8; 
let areatriángulo; 

areatriángulo = (basetriangulo * alturatriangulo) / 2; 

document.write("Área del triángulo es base por altura dividido por 2. La base es " + basetriangulo + " m y la altura es " + alturatriangulo + " m. Por lo que el área es " + areatriángulo + " m" + "</br>");


radiocirculo = 4;
const PI2 = 3.14; 

areacirculo = PI2 * (radiocirculo) ** 2
document.write("Área del círculo es pi por radio al cuadrado. El radio es " + radiocirculo +  " cm. Por lo que el área es " + areacirculo + " cm " + "</br>");


let basetrapecio1 = 6;
let basetrapecio2= 10; 
let alturatrapecio = 8; 
let areatrapecio; 

areatrapecio = alturatrapecio * ((basetrapecio1 +  basetrapecio2) / 2); 

document.write("Área del trapecio es suma de las bases por su altura entre 2. La base1 es " + basetrapecio1+ " cm, la base2 es " + basetrapecio2 + " cm y la altura es " + alturatrapecio+ " cm. Por lo que el área es " + areatrapecio + " cm" + "</br>");


let diagonal1rombo = 12;
let diagonal2rombo = 16;
let arearombo; 

arearombo = (diagonal1rombo * diagonal2rombo)/2; 

document.write("Área del rombo es la multiplicación de sus diagonales entre 2. La diagonal1 es " + diagonal1rombo + " cm y la diagonal2 es " + diagonal2rombo + " cm. Por lo que el área es " + arearombo + " cm" + "</br>");

let baseparalelogramo = 7;
let alturaparalelogramo = 9;
let areaparalelogramo; 

areaparalelogramo = baseparalelogramo * alturaparalelogramo

document.write("Área del paralelogramo es base por altura. Su base es " + baseparalelogramo + " m y la altura es " + alturaparalelogramo + " m. Por lo que el área es " + areaparalelogramo + " m" + "</br>");


let apotemapentagono = 1;
let ladopentagono = 6;
let areapentagono; 

areapentagono = ((5 * ladopentagono)* apotemapentagono)/2

document.write("Área del pentágono es cinco veces la longitud de su lado multiplicado por su apotema dividido entre dos. Su lado es " + ladopentagono + " cm y la apotema es " + apotemapentagono + " cm. Por lo que el área es " + areapentagono + " cm" + "</br>");

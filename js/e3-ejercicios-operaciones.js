//HACER LOS EJERCICIOS DE LAS OPERACIONES hecho por SONIA
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

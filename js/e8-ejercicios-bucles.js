/**1. Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario.
1. Agrega un campo para introducir un numero mayor que 0.
2. Agrega un boton que al pulsarlo muestre la suma de todos los numeros desde el 1 hasta el numero indicado. */
function mostrarSuma(){
    let numero = parseInt(document.getElementById("e1sumanumeros").value);
    let mensaje = "";   
    let suma = 0;
    for (let i=0; i<= numero; i++){
        suma = suma + i;
    }
    mensaje += "la suma de los números es " + suma;
    imprimir(mensaje, "ex1solucion");
}

/**2. Muestra una palabra el numero de veces que indique el usuario.
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre la palabra en mayusculas el numero de veces indicado por el usuario.  */

function mostrarPalabra(){

    let palabra = document.getElementById("ex2repeticion").value;
    let numero2 = parseInt(document.getElementById("ex2numerorepeticion").value);
    let mensaje2 ="";

    for(let i = 1; i<=numero2; i++){
        mensaje2 += i + " " + palabra.toUpperCase() + " ";
    }
    imprimir(mensaje2, "e2resultado");
}

/**3. Muestra AMAPOLA o MARGARITA el numero de veces que indique el usuario, segun la palabra introducida:
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre el numero de veces indicado, la palabra AMAPOLA, si la palabra introducida por el usuario empieza por VOCAL, que muestre la palabra MARGARITA en cualquier otro caso.
 */

function eleccionPalabra() {
    let palabra = document.getElementById("ex3palabra").value;
    palabra = palabra.toLowerCase();
    let numero = parseInt(document.getElementById("ex3numerorepeticion").value);
    let mensaje = "";
    for(let i = 1; i <= numero; i++){
        if (palabra[0]==='a' || palabra[0]==='e'  || palabra[0]==='i'  || palabra[0]==='o'  || palabra[0]==='u'){
            mensaje += i + "Amapola" + " ";
        }
        else{
            mensaje += i + "Margarita" + " ";
        }
    }
    imprimir(mensaje, "e3resultado");
}




//lista nombres

    


let listaNombres1 = ["Maria", "ana", "Juan", "PEDRO", "Pepe"];

function mostrarListaMinusculas1(){
   
    let longitud = listaNombres1.length;
    let mensaje = "";

    for(let i=0; i<longitud;i++){
        
            listaNombres1[i] = listaNombres1[i].toUpperCase();
      
                     
    }

    mensaje = "La lista en mayusculas es " + listaNombres1;

    imprimir(mensaje,"e13solucion");

}


function ponerNombre () {
    let nombre = document.getElementById("ej5palabra").value;
    listaNombres1.push(nombre);
    mensaje = "La lista es" + listaNombres1;
    imprimir(mensaje,"ejercicio5solucion");

}

   
function mostrarListaMayusculas(){
   
    let longitud = listaNombres1.length;
    let mensaje = "";

    for(let i=0; i<longitud;i++){
        
            listaNombres1[i] = listaNombres1[i].toUpperCase();
                          
    }

    mensaje = "La lista en mayusculas es " + listaNombres1;

    imprimir(mensaje,"e14solucion");

}


function mostrarLetraA(){
   
    let longitud = listaNombres1.length;
    let mensaje = "";

    for(let i=0; i<longitud;i++){
        
    
     if (listaNombres1[i]==='A')          
    imprimir(mensaje, "e15solucion");
}
 
}

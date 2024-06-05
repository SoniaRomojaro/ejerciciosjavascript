function imprimir(mensaje,id){
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//EJEMPLO 1: FOR. Mostrar el mismo mensaje 100 veces
//1. Iniciamos el contador a 0. 2. Definimos el numero de repeticiones. 3. Incrementamos con i++ para que el contandor vaya avanzando
function mostrarFrase(){
    let mensaje = "Hello world ";
    let mensajeFinal = "";
    let repeticiones = 100;

    for(let i=0; i<repeticiones;i++){
        //+= significa que se agrega texto al final, no se sustituye como el =
        mensajeFinal += i + mensaje;
    }

    imprimir(mensajeFinal,"e1solucion");
    
}

//EJEMPLO 2: FOR
//Mostrar la tabla de multiplicar
function mostrarTabla() {
    let numero = parseInt(document.getElementById("e2tablamultiplicar").value); //cogemos el numero introducido en el formulario
    let repeticiones = 11; //repetimos el bucle de 0 a 10
    let mensaje = "";
    for (let i=0;i<repeticiones; i++){
        let resultado = numero * i; //multiplicamos el numero introducido por el valor de i, que sera 0,1,2,3....
        mensaje += "Tabla de multiplicar" + numero + "x"+ i + "=" + resultado + "\n"; //agregamos el resultado al mensaje
    }
    imprimir(mensaje,"e2solucion"); //lo mostramos en el html
}

//EJEMPLO 3: FOR PARA LISTAS
//En el for, la i, indica la posicion del elemento de la lista.

function mostrarListaMinusculas(){
    let listaNombres = ["Maria", "ana", "Juan", "PEDRO", "Pepe"];
    let longitud = listaNombres.length;
    let mensaje = "";

    for(let i=0; i<longitud;i++){

        if(listaNombres[i] === "Maria"){
            listaNombres[i] = listaNombres[i].toUpperCase();
        }
        else{
            listaNombres[i] = listaNombres[i].toLowerCase();
        }
        
    }

    mensaje = "La lista en minusculas es " + listaNombres;

    imprimir(mensaje,"e3solucion");

}

//EJEMPLO 4
let listaNumeros = [];

function imprimirLista () {
    let mensaje = "La lista de numeros es " + listaNumeros;
    imprimir(mensaje,"e4listaNumeros");
}

function agregarNumero () {
    let numero = document.getElementById("e4numerolista").value;
    listaNumeros.push(numero);
    imprimirLista();
}
//Recorre la lista de numeros. Sumatotal tiene el resultado total, y le va sumando de uno en uno cada numero de la lista.
//Le agregamos un condicional if numero es mayor a 5, para que solo sume los numeros de la lista que sean mayores a 5
function sumarMayoresA5() {
    let sumaTotal = 0;
    for(let numero of listaNumeros){
        numero = parseInt(numero);
        if(numero>5){
            sumaTotal = sumaTotal + numero;
        }        
    }
    let mensaje = "La suma total de la lista es" + sumaTotal;
    imprimir(mensaje,"e4sumatotal");
}


//WHILE
//While se usa cuando queremos repetir el mismo codigo pero no sabemos cuantas veces. Queremos repetirlo hasta que se cumpla una condicion concreta.

function buscarNumero () {
    let numeroAbuscar = 5;
    let mensaje = "";
    let i = 0;
    while(listaNumeros[i]!=numeroAbuscar && i<listaNumeros.length){
        mensaje+= "El numero " + numeroAbuscar + " no se encuentra en la posicion " + i + " vamos a por el siguiente..."
        i++;
    }
    //Si ha salido porque ha terminado la lista dice que no lo ha encontrado, y si sigue siendo la i menor a la longitud es que se ha salido porque ha encontrado el elemento que buscaba.
    if(i<listaNumeros.length){
        mensaje = "El numero " + numeroAbuscar + "se encuentra en la posicion " + (i+1);
    }
    else{
        mensaje = "El numero " + numeroAbuscar + "no se encuentra en la lista";
    }
    

    imprimir(mensaje,"e5buscarnumero");


}
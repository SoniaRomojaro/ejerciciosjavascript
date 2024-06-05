/**
 * 1. Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos.
 */
let listaAlumnos = ["Pedro", "Juan", "Antonia", "Clara", "Susana", "Lara", "Marcos", "Iván", "Daniel", "Paco"];


//EJERCICO 1
function mostrarListado() {
    mensaje = "Los alumnos son: " + listaAlumnos;
    imprimir(mensaje, "listadoalumnos");
}

/**
 * 2. Muestra el nombre del alumno de la posicion que elijas. Para ello:
Agrega un campo para elegir el alumno que quieren mostrar, no puede estar vacio y debe ser entre 1 y 10.
Agrega un boton mostrar alumno, que muestre el nombre del alumno elegido.
 */

function posicionLista() {

    let posicion = parseInt(document.getElementById("ej2posicion").value);
    let alumnoSeleccionado = listaAlumnos[posicion];
    let mensaje = "El alumno seleccionado es " + alumnoSeleccionado;
    imprimir(mensaje, "ej2resultado");


}

/**
 * 3. Agrega un boton mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre.
 */

function alumnosOrdenados() {
    listaAlumnos.sort();
    mostrarListado();
}

/**
 * 4. Agrega una nueva opcion para agregar un nuevo alumno. Para ello:
Agrega un campo para introducir el nombre del alumno. No puede estar vacio y debe tener maximo 30 caracteres.
Agrega un boton agregar, que al pulsarlo agrege al nuevo alumno a la lista y muestre la lista de alumnos actualizada.
 */

function agregarAlumno() {
    let nuevoAlumno = document.getElementById("ej4nombre").value;
    listaAlumnos.push(nuevoAlumno);
    let mensaje = "La nueva lista es " + listaAlumnos;
    imprimir(mensaje, "respuesta4");
    //mostrarListado();
}

/** 5. Agrega una opcion para eliminar un alumno de una posicion elegida.
Agrega un campo para introducir la posicion del alumno a eliminar. Debe ser un numero entre 1 y 500.
Agrega un boton eliminar, que al pulsarlo, elimine el alumno de la posicion introducida y muestre la lista de alumnos actualizada. Agrega una comprobacion para mostrar un mensaje de error si la posicion introducida es mayor a la longitud total de la lista.*/


function elegirEliminarPosicion() {
    let posicion = parseInt(document.getElementById("e5posicionelegida").value);
    let posicionLista = posicion - 1; //como la lista empieza en 0, le restamos 1. Que quiere decir que el 1, corresponde a la posicion 0
    let mensaje = "";


    if (posicion < 1 || posicion > listaAlumnos.length) {
        mensaje = "Error, la posición introducida es mayor a la longitud total de la lista";
    }
    else {
        listaAlumnos.splice(posicionLista, 1);
        mensaje = "Alumno eliminado, la lista actualizada es: " + listaAlumnos.join(", "); //El método join se usa para convertir todos los elementos de un array en una sola cadena de texto.
        mostrarListado();
    }


    imprimir(mensaje, "ejer5resultadoeliminar");
}

/**6. Agrega una opcion para buscar un alumno. Para ello:
Agrega un campo para introducir el nombre del alumno a buscar.
Agrega un boton buscar, que al pulsarlo muentre un mensaje con el primer alumno que contengan el nombre introducido. */

function buscarAlumno(){
    let alumnoLista = document.getElementById("buscar").value;
    let indice = listaAlumnos.indexOf(alumnoLista);

    let mensaje = "" ;

    if ( indice !== -1){
        mensaje = "El alumno  " + alumnoLista + " está en la lista con los nombres: " + listaAlumnos[indice]  + " en la posicion " + indice;
    }
    else {
        mensaje = "El alumno no está en la lista";
    }

    imprimir(mensaje, "ex6resultado");
}
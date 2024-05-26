let listaAlumnos = ["Pedro","Juan","Antonia", "Clara", "Susana","Lara", "Marcos", "Iván", "Daniel", "Paco"];


//EJERCICO1
function mostrarListado() {
    mensaje = "Los alumnos son: " + listaAlumnos;
    imprimir(mensaje,"listadoalumnos");
}

//EJEMPLO 2
function Alumno(){
    let primerAlumno = (document.getElementById("alumno").value);
    let mensaje = primerAlumno  
    imprimir(mensaje,"alumnolista");
}

//ordenar
function ordenarLista(){
    listaAlumnos.sort();
    mostrarListado();
}


//nuevo alumno
function agregar () {
    let nuevoAlumno = document.getElementById("nuevoalumno").value;
    listaAlumnos.push(nuevoAlumno);
    mostrarListado();
}

//eliminar alumno
function eliminarPosicionElegida(){
    let posicion = parseInt(document.getElementById("eliminaralumno").value);
    listaAlumnos.splice(posicion-1,1);
    if(posicion > 12){
        mensaje = "Posición es mayor que la lista";
       

    }else {
       mostrarListado();
    }
    imprimir(mensaje,"mayorlista");
}

//buscar alumno
function buscarAlumno(){
    let posicion = parseInt(document.getElementById("buscaralumnos").value);
   
}
//viaje 1.	Crea un nuevo objeto, llamado viaje, que contenga las siguientes propiedades: destino, precio, duracion en dias y lista de ciudades a visitar. 
//Agrega un boton a tu pagina, llamado mostrar info de viaje, que muestre toda la informacion del viaje.
//imprimir

function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}


let viaje = {
    destino: "Italia",
    precio: 1000,
    duracion: 10,
    cuidades: ["Roma", "Venecia"]

}


function mostrarViaje() {
    let mensaje = "El destino es " + viaje.destino + ". El precio es de " + viaje.precio + "euros. Serán " + viaje.duracion + " días. Se visitarán " + viaje.cuidades + " Descripcion: "+ viaje.descripcion;
    imprimir(mensaje,"e1viaje");
}

//propiedad

function cambiarpropiedadViaje() {
   let nuevaPropiedad = document.getElementById("propiedadViaje").value;
    if (nuevaPropiedad === "destino"){
        let nuevoDestino = document.getElementById("nuevoValor").value;
        viaje.destino = nuevoDestino;

    }
    else if (nuevaPropiedad === "precio"){
    let nuevoPrecio = document.getElementById("nuevoValor").value;
       viaje.precio = nuevoPrecio;
   
    }
    else if (nuevaPropiedad === "duracion"){
        let nuevoDuracion = document.getElementById("nuevoValor").value;
        viaje.duracion = nuevoDuracion;
       
     }
     else if(nuevaPropiedad === "cuidades"){
        let nuevoCuidades = document.getElementById("nuevoValor").value;
        viaje.cuidades = nuevoCuidades;
       
     }
    
   mostrarViaje();

}

//descripcion
function descripcionViaje() {
    let descripcion = document.getElementById("descripcionvia").value;
    viaje["descripcion"] = descripcion;
    mostrarViaje();
}

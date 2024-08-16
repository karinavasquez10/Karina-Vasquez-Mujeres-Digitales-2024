// Definición de variables
let nombre = "Karina";
let edad = 23;
let precio = 99.90;
let seriesFavoritas = ["Juego de tronos", "Bridgerton", "Ratched"];
let peliculasFavoritas = [
    {
        nombre: "Encanto",
        añoEstreno: 2021,
        protagonistas: ["Carolina Gaitan", "Cecilia Botero", "Mauro Castillo"]
    },
    {
        nombre: "Damsel",
        añoEstreno: 2024,
        protagonistas: ["Millie Bobby", "Nick Robinson", "Matt Slack"]
    }
];

// Mostrar los valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFavoritas.join(", "));
console.log("Películas Favoritas:");
peliculasFavoritas.concat(pelicula=>{
    console.log("nombre:", pelicula.nombre);
    console.log("Año Estreno:", añoEstreno);
    console.log("protagonistas:", pelicula.protagonistas.join(", "));
})


// Incrementar la edad uno en uno
edad += 1;
console.log("Edad incrementada:", edad);

// Agregar una serie a la lista 
seriesFavoritas.push("Casa de Papel");
console.log("Series Favoritas Actualizadas:", seriesFavoritas.join(", "));
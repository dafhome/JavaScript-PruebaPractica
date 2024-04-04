// 2. (2 puntos) Pedirle al usuario un tipo de mascota, y su nombre. Crear una función que reciba esos datos, e imprima en pantalla o consola un mensaje del tipo: “tu mascota es un (mascota introducida por usuario) y su nombre es (nombre introducido por usuario)”. No necesita return.

function datosMascota (a,b){
    document.getElementById("frase").innerHTML = `Tu mascota es un/a ${a} y su nombre es ${b}`;
}

let mascota = prompt("Indicame que tipo de mascota tienes. Ej.: perro, gato, periquito, etc.").toLowerCase();
let nombre = prompt("¿Como se llama tu mascota?");

datosMascota(mascota,nombre);
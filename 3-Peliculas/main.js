// 3. (2,5 puntos) Tienes un array vacío ‘películas’. Pides al usuario que introduzca algunos títulos de película, que se irán añadiendo al array uno a uno. Para salir, que escriba ‘salir’. Debería evi- tarse que se añada el valor ‘salir’ a la lista de películas. Después:
// - Ordenar alfabéticamente los títulos (usar el método JS correspondiente)
// - Imprimir en consola o pantalla el array, pero cada título en una línea diferente

const peliculasArray = [];
let validar = false;

while (!validar){
    let pelicula = prompt("Indica un nombre de película");
    if (pelicula.toLowerCase() == "salir"){
        validar=true;
    }
    else {
        peliculasArray.push(pelicula);
    }
}

console.log(peliculasArray);

const peliculasOrdenadas = [].concat(peliculasArray);

peliculasOrdenadas.sort();

console.log(peliculasOrdenadas);

document.getElementById("pelis").innerHTML = "";

for (let i=0; i<peliculasOrdenadas.length; i++){
    document.getElementById("pelis").innerHTML += `<p>Pelicula${i+1}: ${peliculasOrdenadas[i]}</p>`;
}

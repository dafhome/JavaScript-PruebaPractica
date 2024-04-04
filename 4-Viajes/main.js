// 4. (3 puntos) Interacción con el DOM de HTML, y con el estilo de CSS. En un campo input se pregunta en qué medio quieres viajar, pide que se introduzca la palabra “barco”, “bicicleta” o “lo- comotora” (u otros). Según la respuesta:
// - Mostrar en pantalla un mensaje y una imagen adecuados a cada caso
// - Cambiar el color de fondo de la página (tres colores diferentes según la respuesta)


const transportes = [
    ["bicicleta", "https://ciclosfera.com/img/d7c0217e3bf8c5381bf9048ce930b47b.872.0.0.0.3360d17a.webp", "¡Pedalea con alegría y verás que la vida es una cadena llena de aventuras! En una bicicleta, cada camino se convierte en una pista de diversión y cada pedaleo en una sonrisa liberadora.", "green"],
    ["coche", "https://ciutatdelmotor.com/wp-content/uploads/Como-preparar-tu-coche-antes-viaje.jpg", "¡Enciende el motor y deja que la aventura te guíe! En un coche, el viaje es tan emocionante como el destino. Con la radio como banda sonora y la carretera como escenario, cada kilómetro es una nueva historia que contar.", "grey"
    ],
    ["barco", "https://www.ucaragon.com/wp-content/uploads/2019/07/cruise-ship-3484854_960_720-003.jpg", "¡Zarpemos hacia la felicidad! En un barco, cada ola es una caricia del mar y cada destino una isla de diversión. Navegar es como bailar sobre el agua, ¡y la vida es una fiesta eterna en alta mar!", "blue"],
    ["tren", "https://www.ceupe.com/images/easyblog_articles/3372/b2ap3_large_viaje-en-tren.jpg", "¡Chu-chu, vamos a la diversión! Sube al tren de la felicidad, donde los asientos son cómodos y las vistas son inigualables. En cada vagón, una nueva historia por contar y muchos momentos para disfrutar.", "red"],
    ["def", "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/15/5fa43d71a111f.jpeg", "Introduce arriba en que medio de transporte prefieres viajar", "#013B96"]
]



function elegirTransporte() {
    let transport = document.getElementById("transporte").value;
    transport = transport.toLowerCase();
    let i;
    switch (transport) {
        case "bicicleta":
            i = 0;
            break;
        case "coche":
            i = 1;
            break;
        case "tren":
            i = 3;
            break;
        case "barco":
            i = 2;
            break;
        default:
            i = 4;
    }
    if (i < 5) {
        document.getElementById("imagen").style.backgroundImage = `url(${transportes[i][1]})`;
        document.getElementById("text").innerText = transportes[i][2];
        document.getElementById("texto").style.backgroundColor = transportes[i][3];
    }
}

document.getElementById("boton").addEventListener("click", elegirTransporte);
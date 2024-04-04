// 1. (2,5 puntos) Tus seis familiares quieren entrar en el torneo de ping-pong de tu barrio. Hay al-
// gunos gastos de inscripción:
// - Adultos, pagan 10 euros, y menores de 18 años, pagan 5 euros
// Para cobrarles el ticket, el cajero pregunta la edad a los seis participantes.
// Crear un programa para preguntar y calcular el monto total de las seis inscripciones, que debes mostrar en pantalla o consola.

let adulto = 10;
let menor = 5;
let total = 0;
let numeroAdultos = 0;
let numeroMenores = 0;


function calcularEntrada(){

    for (let i=0; i<6; i++){
        let edad = parseInt(prompt("Indicame cuantos años tiens:" ));
        //Control de valor no numerico o negativo. 
        while (isNaN(edad)==true||edad<0){
            edad = parseInt(prompt("Necesito que me indiques tu edad como un valor numerico mayor que 0:" ));
            console.log("ha entrado");
        }
        //Añado esto para poder comprobar que edades se han introducirlo y que se pueda corregir más facilmente. 
        console.log(`${i+1}: ${edad}`);

        if (edad<18){
            numeroMenores++;
            total = total+menor;
        }
        else{
            numeroAdultos++;
            total = total+adulto;
        }    
    }

    if (numeroAdultos>0){
        document.getElementById("adultos").innerHTML = `${numeroAdultos}        Adultos     ${numeroAdultos*adulto}€`;    
    }
    if (numeroMenores>0){
        document.getElementById("menores").innerHTML = `${numeroMenores}        Menores     ${numeroMenores*menor}€`;    
    }

    document.getElementById("total").innerHTML = `${numeroAdultos+numeroMenores}    TOTAL   ${total}€`;
    
}

alert ("Os iré preguntando la edad a cada uno de vosotros, máximo 6 personas:")

calcularEntrada();



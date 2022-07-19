// Nivell 3 - Exercici 1
// Crea una matriu de deu funcions i emplena-la mitjançant 
// un bucle de manera que cada funció compti del 0 al 9 per 
// la consola. Invoca cada funció de l'array iterativament. 
// Haurà de mostrar-se per consola el compte del 0 al 9 deu 
// vegades.

let matrix = [];
var m = 0;      // row
var n = 0;      // column

function iterate(){
    var index = 0;

    while (index < 10){
        console.log(index);
        index++;
    }
}

while(n < 10){
    matrix.push(iterate);
    n++;
}

while (m < 10) {
    matrix[m]();
    m++;
}
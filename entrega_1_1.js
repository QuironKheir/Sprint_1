// ********************************************************************************************* //
//     ______  ______      ______   ____     ______   ____     ____               __    __       //
//    /\__  _\/\__  _\    /\  _  \ /\  _`\  /\  _  \ /\  _`\  /\  _`\    /'\_/`\ /\ \  /\ \      //
//    \/_/\ \/\/_/\ \/    \ \ \L\ \\ \ \/\_\\ \ \L\ \\ \ \/\ \\ \ \L\_\ /\      \\ `\`\\/'/      //
//       \ \ \   \ \ \     \ \  __ \\ \ \/_/_\ \  __ \\ \ \ \ \\ \  _\L \ \ \__\ \`\ `\ /'       //
//        \_\ \__ \ \ \     \ \ \/\ \\ \ \L\ \\ \ \/\ \\ \ \_\ \\ \ \L\ \\ \ \_/\ \ `\ \ \       //
//        /\_____\ \ \_\     \ \_\ \_\\ \____/ \ \_\ \_\\ \____/ \ \____/ \ \_\\ \_\  \ \_\      //
//        \/_____/  \/_/      \/_/\/_/ \/___/   \/_/\/_/ \/___/   \/___/   \/_/ \/_/   \/_/      //
//                                                                                               //
//    By:   Andres Jonathan Enriquez Jimenez           Specialization:   < BE Nodejs  >          //
//       <enriquezjimenez.andrese@gmail.com>           File:             entrega_1_3.js          //
//                                                     Created:          < 2022/07/19 >          //
//                                                                                               //
// ********************************************************************************************* //
let s = 0; while (s < 10) {console.log(" "); s++;};
// Descripció;
// Treballarem amb funcions i templates literals, elements fonamentals en la programació amb 
// JavaScript ;)
//
//
//
// Utilitza l'intèrpret de node en tots els casos.

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 1 - Exercici 1");
console.log(" ");
// Crea una funció que mostri per consola el nom d'usuari/ària 
// en invocar-la passant-li el nom com a paràmetre.

var nom_usuari = 'Andrés Jonathan Enríquez Jiménez';      // Declare a variable as a string.

function print_user(name){                                // Create a function that prints by 
    console.log(name);                                    // console.
};

print_user(nom_usuari);                                   // Run the function.


console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 2 - Exercici 1");
console.log(" ");
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant 
// template literals, guardant-los en variables i referenciant-les 
// en la impressió del missatge.

var nom_usuari = "Andrés";
var cognom_usuari = "Enríquez";

function print_usuari(first, last){
    console.log(`My name is ${first} and my last name is ${last}`); // Using a literal template
}

print_usuari(nom_usuari, cognom_usuari);

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 2 - Exercici 2");
console.log(" ");
// Invoca una funció que retorni un valor des de dins d'una template 
// literal.

// Template literals: 
// * These are literal strings that enable the use of embedded 
//   expressions. With them, it is possible to use character strings 
//   of more than one line, and character string interpolation 
//   functionalities.

function invoca(){
    return "Andrés Jonathan Enríquez Jiménez";
}

console.log(`Hi, Nice too meet you. I'm ${invoca()}.`)

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 3 - Exercici 1");
console.log(" ");
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

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 3 - Exercici 2");
console.log(" ");
// Crea una funció anònima autoinvocable igualada a 
// una variable que mostri per consola el nom de 
// l'usuari/ària a rebut com a paràmetre.

//var user = (function(){
//    console.log('Andrés Jonathan Enríquez Jiménez');
//})();

var user = function (){console.log("Andrés Jonathan Enríquez Jiménez")};
(function() {user();}());
// Nivell 1 - Exercici 1
// Mostra per la consola el resultat d'una arrow 
// function autoinvocable que sumi dos nombres.

// arrow funtions
// param => expression
// (param1, paramN) => {expression};

var nom1 = "Andrés ";
var nom2 = "Enríquez ";

let arrow = ((str1, str2) => {
    console.log(str1 + str2);
})(nom1, nom2);
// Nivell 2 - Exercici 1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant 
// template literals, guardant-los en variables i referenciant-les 
// en la impressió del missatge.

var first_name = "Andrés";
var last_name = "Enríquez";

// Using a literal template
function print_user(first, last){
    console.log(`My name is ${first} and my last name is ${last}`);
}

print_user(first_name, last_name);
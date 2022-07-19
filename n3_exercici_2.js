// Nivell 3 - Exercici 2
// Crea una funció anònima autoinvocable igualada a 
// una variable que mostri per consola el nom de 
// l'usuari/ària a rebut com a paràmetre.

//var user = (function(){
//    console.log('Andrés Jonathan Enríquez Jiménez');
//})();

var user = function (){console.log("Andrés Jonathan Enríquez Jiménez")};
(function() {user();}());
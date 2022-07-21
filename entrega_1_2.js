// ********************************************************************************************* //
//     ______  ______      ______   ____     ______   ____     ____               __    __       //
//    /\__  _\/\__  _\    /\  _  \ /\  _`\  /\  _  \ /\  _`\  /\  _`\    /'\_/`\ /\ \  /\ \      //
//    \/_/\ \/\/_/\ \/    \ \ \L\ \\ \ \/\_\\ \ \L\ \\ \ \/\ \\ \ \L\_\ /\      \\ `\`\\/'/      //
//       \ \ \   \ \ \     \ \  __ \\ \ \/_/_\ \  __ \\ \ \ \ \\ \  _\L \ \ \__\ \`\ `\ /'       //
//        \_\ \__ \ \ \     \ \ \/\ \\ \ \L\ \\ \ \/\ \\ \ \_\ \\ \ \L\ \\ \ \_/\ \ `\ \ \       //
//        /\_____\ \ \_\     \ \_\ \_\\ \____/ \ \_\ \_\\ \____/ \ \____/ \ \_\\ \_\  \ \_\      //
//        \/_____/  \/_/      \/_/\/_/ \/___/   \/_/\/_/ \/___/   \/___/   \/_/ \/_/   \/_/      //
//                                                                                               //
//    By:   Andres Jonathan Enriquez Jimenez           specialization:   < BE Nodejs  >          //
//       <enriquezjimenez.andrese@gmail.com>           File:             entrega_1_2.js          //
//                                                     Created:          < 2022/07/20 >          //
//                                                                                               //
// ********************************************************************************************* //
let s = 0; while (s < 10) {console.log(" "); s++;};
// Descripció:
// Les arrow functions són una evolució de les funcions tradicionals. Les classes van ser 
// introduïdes en EcmaScript 6 i treballarem amb elles en profunditat.
//
//
//
// Utilitza l'intèrpret de node en tots els casos.

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 1 - Exercici 1");
console.log(" ");
// Mostra per la consola el resultat d'una arrow 
// function autoinvocable que sumi dos nombres.

// Nota: Arrow Funtions Structure
//          * param => expression
//          * (param1, paramN) => {expression};

// self-invoking function        
//          (<function>)(<parameter>, <parameter>, ...)
console.log(((x, y) => (x + y))(4, 6));                    // [Function (anonymous)]

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 2 - Exercici 1");
console.log(" ");
// Crea una arrow function que, rebent un paràmetre, 
// retorni un objecte amb un atribut que tingui com 
// a valor el paràmetre rebut.

let array_func = (parametre_rebut) => {
    let objecte = { atribut: parametre_rebut,}
    return objecte;
}
console.log(array_func("Catalina"));


console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 2 - Exercici 2");
console.log(" ");
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
// La classe inclourà un mètode dirNom que imprimeixi per consola el 
// paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

// NOta: classes in JavaScript.
// They are a syntactic improvement on inheritance based on JavaScript prototypes.
// Uses the word "class".
// The name starts with a uppercase.
// Properties are assigned in a method constructor().

class Persona {
    // Define attributes
    constructor(nom){
        this.nom = nom;
    }
    // Define methods
    dirNom() 
    {
        console.log(this.nom);
    }
}

var student = new Persona("Catalina");
student.dirNom();

console.log("//////////////////////////////////////////////////////////////////");
console.log("Nivell 3 - Exercici 1");
console.log(" ");
// Escriu una function creadora d'objectes que faci instàncies 
// d'una classe abstracta. Invoca-la amb diferents definicions.


// create the "Virus abstract class" using "throw", this avoids the creation.
class Virus {
    constructor ( ){
        throw new Error(`No es pot construir una objecte`);
    }
}

function creadoraFunc (action, objective)
{
    // instantiate an Virus abstract class
    let infect = Object.create(Virus.prototype);

    // assign attributes using "prototype"
    infect.action = action;
    infect.objective = objective;

    // return the instantiated values
    return infect;
}


// We invoke with different definitions
let Gusano_Morris = creadoraFunc("Slow computer", "Windows 2000");
console.log(Gusano_Morris.action);
console.log(Gusano_Morris.objective);
console.log(" ");
let CIH_Chernobyl = creadoraFunc("Information contained in the computer deleted", "Windows XP");
console.log(CIH_Chernobyl.action);
console.log(CIH_Chernobyl.objective);
console.log(" ");
let I_love_you = creadoraFunc("Trojan installed", "Windows Vista");
console.log(I_love_you.action);
console.log(I_love_you.objective);
console.log(" ");
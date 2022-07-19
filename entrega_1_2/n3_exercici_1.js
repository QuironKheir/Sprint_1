// Nivell 2 - Exercici 2
// Escriu una function creadora d'objectes que faci instàncies 
// d'una classe abstracta. Invoca-la amb diferents definicions.

// this:
// * In most cases, the value of this is determined by how a function is called (runtime binding).

// throw:
// * The throw statement throws a user-defined exception.
// * Execution of the current function will stop (the statements after throw won't be executed), 
//   and control will be passed to the first catch block in the call stack. 
// * If no catch block exists among caller functions, the program will terminate.

// new operator: 
// * lets developers create an instance of a user-defined object type or of one of the built-in 
//   object types that has a constructor function.
// 

// Prototypes:
//  are the mechanism by which JavaScript objects inherit features from one another. 

// revisar : https://es.education-wiki.com/3282486-abstract-classes-in-javascript
// revisar : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

function Animal (nombre) {
    this.nombre = nombre;
    if (this.constructor === Animal) {
        throw new Error("!No se puede crear una instancia de la clase abstracta!");
    }
}


Animal.prototype.hablar = function () {
    console.log(this.nombre + ' hace un ruido.');
}

Animal.prototype.sexo = function () {
    console.log(this.nombre + ' es hembra.');
}

class Perro extends Animal {
    hablar() {
        super.hablar();
        console.log(this.nombre + ' ladra.');
    }
}

var p = new Perro('Mitzie');
p.hablar();
p.sexo();
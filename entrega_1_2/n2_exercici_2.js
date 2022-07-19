// Nivell 2 - Exercici 2
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
// La classe inclourà un mètode dirNom que imprimeixi per consola el 
// paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

// classes in JavaScript.
// -----------------------
// They are a syntactic improvement on inheritance based on JavaScript prototypes.
// Uses the word "class".
// The name starts with a uppercase.
// Properties are assigned in a method constructor().

class Persona {
    constructor(nom){
        this.nom = nom;
    }
    dirNom() {
        console.log(this.nom);
    }
}

var student = new Persona("Catalina");
student.dirNom();
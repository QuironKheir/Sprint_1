// Nivell 2 - Exercici 1
// Crea una arrow function que, rebent un paràmetre, 
// retorni un objecte amb un atribut que tingui com 
// a valor el paràmetre rebut.

let array_func = (parametre_rebut) => {
    let objecte = { atribut: parametre_rebut,}
    return objecte;
}
console.log(array_func("Catalina"));
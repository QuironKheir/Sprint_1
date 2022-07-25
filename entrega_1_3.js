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
//                                                     Created:          < 2022/07/22 >          //
//                                                                                               //
// ********************************************************************************************* //
let s = 0; while (s < 10) {console.log(" "); s++;};
// Descripció:
// Una Promise és un objecte que representa la terminació o el fracàs d'una operació asíncrona. 
// Una funció callback és una funció que es passa a una altra funció com un argument i s'invoca 
// dins de la funció externa per completar algun tipus de rutina o acció. Conèixer-les bé és una 
// de les bases importants per a la programació amb Node.
//
// Utilitza l'intèrpret de node en tots els casos.

// //////////////////////////////////////////////////////////////////
// "Nivell 1 - Exercici 1"
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
// Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent 
// de si la Promise es resol o no.

// Promise: It is used to work with asynchronous requests and reduce the excessive use of callbacks.
//          * resolve method: Everything was successful.
//          * reject method:  There was a problem.
// The "resolve function" is directly linked to the "then" method.
// The "reject function" is directly linked to the "catch" method.
// web reference: https://www.youtube.com/watch?v=pHBmmbDQl0o

function miPromesa(resol){
    return new Promise(function(resolve, reject){
        if (resol === true){
            resolve("Nivell 1 - Exercici 1: Promise es resol!");
        }else{
            reject("Nivell 1 - Exercici 1: Promise no es resol!")
        }
    });
};

miPromesa(true)
    .then(function(msg1){console.log(msg1);})
    .catch(function(msg2){console.log(msg2);});

miPromesa(false)
    .then(function(msg1){console.log(msg1);})
    .catch(function(msg2){console.log(msg2);});




// //////////////////////////////////////////////////////////////////
// Nivell 1 - Exercici 2
// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un 
// missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

// Arrow Functions 
// const arrowFunc = (parametre, callback ) => {  };
// https://www.youtube.com/watch?v=bb8VZNiK3cg
//
// Callback: Es una funcion la cual es utilizada como parametro en otra funcion
// https://www.youtube.com/watch?v=DaXuPcdKqQ4


function callback(val){                             // Creamos la Funcion Callback.
    console.log(`Nivell 1 - Exercici 2: Se esta ejecuanto  ${val}. `);
};

let arrowFunc = (parametre, callback)=>{            // Creamos la funcion Arrow Function.
    if(parametre === true){
        callback("la secuencia 1");
    }else{
        callback("la secuencia 2");
    }
}

var par = true;                                     // * Utilizamos la función "callback" como 
arrowFunc(par, callback);                           //   parametro de la fucnion "arrowFunc"
par = false;                                        // * Variamos el parametro
arrowFunc(par, callback);


// //////////////////////////////////////////////////////////////////
// Nivell 2 - Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una 
// Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let object = employees.find(obj => obj.id === id);
        if (object) {
            resolve(object.name);
        } else {
            reject(`ID not found`);
        }
    });
};

getEmployee(1)
    .then(function(user){
        console.log(`Nivell 2 - Exercici 1: id = 1   ${user}`);
    })
    .catch(function(msg){
        console.log(`Nivell 2 - Exercici 1: id = 1   ${msg}`);
    });

getEmployee(2)
    .then(function(user){
        console.log(`Nivell 2 - Exercici 1: id = 2   ${user}`);
    })
    .catch(function(msg){
        console.log(`Nivell 2 - Exercici 1: id = 2   ${msg}`);
    });

getEmployee(3)
    .then(function(user){
        console.log(`Nivell 2 - Exercici 1: id = 3   ${user}`);
    })
    .catch(function(msg){
        console.log(`Nivell 2 - Exercici 1: id = 3   ${msg}`);
    });

getEmployee(4)
    .then(function(user){
        console.log(`Nivell 2 - Exercici 1: id = 4   ${user}`);
    })
    .catch(function(msg){
        console.log(`Nivell 2 - Exercici 1: id = 4   ${msg}`);
    });

// Nivell 2 - Exercici 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte 
// employee i retorni el seu salari.

let getSalary = (objecte_Employee) => {
    return new Promise((resolve, reject) => {
        let  id = (Object.values(objecte_Employee))[0];
        let object = salaries.find(obj => obj.id === id);
        if (object) {
            resolve(object.salary);
        } else {
            reject('The ID doesn`t exit!');
        }
    });
};
   
getSalary(employees[0])
    .then(function(salary){
        console.log(`Nivell 2 - Exercici 1: employees[0] = ${salary}`);
    })
    .catch(function(msg){c
        onsole.log(`Nivell 2 - Exercici 1: ${msg}`);
    });

getSalary(employees[1])
    .then(function(salary){
        console.log(`Nivell 2 - Exercici 1: employees[1] = ${salary}`);
    })
    .catch(function(msg){
        console.log(`Nivell 2 - Exercici 1: ${msg}`);
    });

getSalary(employees[2])
    .then(function(salary){
        console.log(`Nivell 2 - Exercici 1: employees[2] = ${salary}`);
    })
    .catch(function(msg){
        console.log(`Nivell 2 - Exercici 1: ${msg}`);
    });

//     console.log("//////////////////////////////////////////////////////////////////");
//     console.log("Nivell 2 - Exercici 3");
//     console.log(" ");
// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
// de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.


let id1 = 1
getEmployee(id1)
    .then(function(name){
        console.log(`Nivell 2 - Exercici 3: id = 1    ${name}`);
        return getSalary(employees[id1 - 1]);
    })
    .then(function(msg){
        console.log(`Nivell 2 - Exercici 3: id = 1    ${msg}`);
    });

let id2 = 2
getEmployee(id2)
    .then(function(name){
        console.log(`Nivell 2 - Exercici 3: id = 2    ${name}`);
        return getSalary(employees[id2 - 1]);
    })
    .then(function(msg){
        console.log(`Nivell 2 - Exercici 3: id = 2    ${msg}`);
    });

let id3 = 3
getEmployee(id3)
    .then(function(name){
        console.log(`Nivell 2 - Exercici 3: id = 3    ${name}`);
        return getSalary(employees[id3 - 1]);
    })
    .then(function(msg){
        console.log(`Nivell 2 - Exercici 3: id = 3    ${msg}`);
    });

//     console.log("//////////////////////////////////////////////////////////////////");
//     console.log("Nivell 3 - Exercici 1");
//     console.log(" ");
// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per 
// la consola.


ide1 = 1
getEmployee(ide1)
    .then(function(name){
        console.log(`Nivell 3 - Exercici 1: id = 1 ${name}`);
        return getSalary(employees[ide1 - 1]);
    })
    .then(function(msg){
        console.log(`Nivell 3 - Exercici 1: id = 1 ${msg}`);
    })
    .catch(function(error){
        console.log(error);
    });


ide2 = 2
getEmployee(2)
    .then(function(name){
        console.log(`Nivell 3 - Exercici 1: id = 2 ${name}`);
        return getSalary(employees[ide2 - 1]);
    })
    .then(function(msg){
        console.log(`Nivell 3 - Exercici 1: id = 2 ${msg}`);
    })
    .catch(function(error){
        console.log(error);
    });

ide3 = 3;
getEmployee(ide3)
    .then(function(name){
        console.log(`Nivell 3 - Exercici 1: id = 3 ${name}`);
        return getSalary(employees[ide3 - 1]);
    })
    .then(function(msg){
        console.log(`Nivell 3 - Exercici 1: id = 3 ${msg}`);
    })
    .catch(function(error){
        console.log(error);
    });
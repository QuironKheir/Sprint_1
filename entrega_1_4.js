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
//       <enriquezjimenez.andrese@gmail.com>           File:             entrega_1_4.js          //
//                                                     Created:          < 2022/07/24 >          //
//                                                                                               //
// ********************************************************************************************* //

// Descripció
// La finalitat de les funcions asíncrones és simplificar el comportament de l'ús síncron de 
// Promises i realitzar algun comportament específic en un grup de Promises. De la mateixa manera 
// que les Promises són semblants a les devolucions de crides estructurades, les funcions amb 
// async/await s'assemblen a una combinació de generadors i promises.
//
// Utilitza l'intèrpret de node en tots els casos.

// Nivell 1 - Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de 
// l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a 
// la tasca anterior.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
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


let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let object = employees.find(obj => obj.id === id)
        if (object) {
            resolve(object.name);
        } else {
            reject(`The ID ${id} not found`);
        }
    })
}

let getSalary = (id) => {
    return new Promise((resolve, reject) => {
        let object = salaries.find(obj => obj.id === id);
        if (object) {
            resolve(object.salary);
        } else {
            reject('The ID doesn`t exit!');
        }
    });
};

async function asyncFunc(id) {
    const employee = await getEmployee(id);
    const salary = await getSalary(id);
    return console.log(`Empleat/da: ${employee},    Salari: ${salary}`);
}

asyncFunc(1);
asyncFunc(2);
asyncFunc(3);

// Nivell 1 - Exercici 2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectui la 
// seva funció resolve() després de 2 segons de la seva invocació.

const asyncFunc_2s = () => {
    var event = true;
    const promesa = new Promise((resolve, reject) => {
        if (event === true){
            setTimeout(() => {
                resolve('Summoned after 2 seconds.');
            }, 2000);
        }
        else{
            reject(`Error`);
        }
    });
    return promesa;
};

const asyncFunc_Cridar = async () => { 
    const cridar = await asyncFunc_2s();
    return cridar;
};

asyncFunc_Cridar().then(msg =>console.log(msg));

// Nivell 2 - Exercici 1
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

const doubleFunc_2s = (num) => {
    var event = true;
    const promesa = new Promise((resolve, reject) => {
        if (event === true){
            setTimeout(() => {
                resolve(num + num);
            }, 2000);
        }
        else{
            reject(`Error`);
        }
    });
    return promesa;
};

doubleFunc_2s(2).then(double => console.log(`Twice the number is: ${double}`));

// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció 
// anterior.

const doubleFunc_Sum = async (a, b, c) => { 
    const a_double = await doubleFunc_2s(a);
    const b_double = await doubleFunc_2s(b);
    const c_double = await doubleFunc_2s(c);
    const result = a_double + b_double + c_double;
    return result;
};
doubleFunc_Sum(2, 3, 4).then(sum => console.log(`The sum is:  ${sum}`));

// Nivell 3 - Exercici 1
// Força i captura tants errors com puguis dels nivells 1 i 2.

asyncFunc(1).catch(err => console.log(err));
asyncFunc_Cridar().catch(err => console.log(err));
doubleFunc_2s(2).catch(err => console.log(err));
doubleFunc_Sum(2, 3, 4).catch(err => console.log(err));
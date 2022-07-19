// Nivell 2 - Exercici 2
// Crea una funció que retorni una Promise que invoqui la funció resolve() o 
// reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin 
// un missatge diferent depenent de si la Promise es resol o no.

function retornPromise() {
    return new Promise((resolve, reject) => {
        let resol = 1;
        if (resol) 
        {
            resolve('missatge 1');
        } 
        else 
        {
            reject('missatge 2');
        }
    });
};

retornPromise()
    .then((bo) => {
console.log(`Buena suerte, ${bo}`);
});

retornPromise()
    .catch((dulent) => {
console.log(`Buena suerte, ${mensajeHayMulta}`);
});
    
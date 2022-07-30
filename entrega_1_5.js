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
//                                                     Created:          < 2022/07/26 >          //
//                                                                                               //
// ********************************************************************************************* //

// Descripció
// Els mòduls natius de Node.js permeten als desenvolupadors/es d'aplicacions i mòduls dur a terme 
// diferents tasques: gestió d'arxius, processament d'informació, codificació i encriptació, entre 
// d'altres. Necessitaràs donar un cop d'ull a la documentació de Node!
//
// Utilitza l'intèrpret de node en els exercicis i pensa que potser cal incloure instruccions 
// d'instal·lació i/o execució perquè es pugui revisar cada part dels exercicis.

// Nivell 1 - Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require( 'fs' );

function write_to_file(fitxer, text) {
    console.log("Writing into existing file");
    fs.writeFile(fitxer, text, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        console.log("");
    });
};

let File = 'file.txt'
write_to_file(File,"Welcome IT Academy - BE Nodejs");

// Nivell 1 - Exercici 2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function show_by_console_file(fitxer){
    fs.readFile(fitxer, function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        console.log("");
    });
}

show_by_console_file(File);

// Nivell 1 - Exercici 3
// Crea una funció que comprimeixi el fitxer del nivell 1.

const zlib = require("zlib");                           // Including zlib and fs module

const compress_file = (fitxer) => {
    const inp = fs.createReadStream(fitxer);            // Creating readable Stream
    const out = fs.createWriteStream(`compress_${fitxer}.gz`);   // Creating writable stream
    const brot = zlib.createBrotliCompress();           // Calling createBrotliCompress method

    inp.pipe(brot).pipe(out);                           // Piping
    console.log("File Compression Finished!");
}

compress_file(File);

// Nivell 2 - Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

const recursive_message = number => {
    timeout = setTimeout( msg = () => {
        if (number != -1) {
            console.log(`Your computer will self-destruct in ${number} seconds.`)
        recursive_message(number - 1);
        }
        
    }, 1000);
    
    if ( number === -1)
        console.log(`KA-BOOOM. 
We are legion. 
    Anonymous.`)
};

recursive_message(5);

// Nivell 2 - Exercici 2
// Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
const { spawn } = require('child_process');

const list_directory_on_console = () => {
    const child = spawn('dir', ['C:'], {shell: true});
    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

list_directory_on_console();

// Nivell 3 - Exercici 1
// Crea una funció que crei dos fitxers codificats en hexadecimal i en base64 respectivament, 
// a partir del fitxer del nivell 1.
const { Buffer } = require('buffer')

const txtToHex = (info) => {
    const buf = Buffer.from(info, 'utf8')
    return buf.toString('hex')
}

const txtToBase64 = (info) => {
    const buf = Buffer.from(info, 'utf8')
    return buf.toString('base64')
}

const HexAndBase64 = (fitxer) => {
    fs.readFile(fitxer, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        const hexDecodedContent = txtToHex(data)
        fs.writeFile(`hex_${fitxer}`, hexDecodedContent, (err) => {
            if (err) {
                throw err
            }
            console.log('File with hexadecimal created')
        })
        const base64DecodedContent = txtToBase64(data)
        fs.writeFile(`base64_${fitxer}`, base64DecodedContent, (err) => {
            if (err) {
                throw err
            }
            console.log('File with base64 created')
        })
    })
}

HexAndBase64(File);

// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, 
// i esborri els fitxers inicials.
var encryptor = require('file-encryptor');
const fs2 = require('fs').promises

function delete_file(fitxer){
    fs2.unlink(fitxer)
        .then(() => {console.log(`File removed  ${fitxer}`)})
        .catch(err => {console.error('Something wrong happened removing the file', err)})
}

function encrypt(fitxer){
    var key = 'My Secret Key';
    var input = fitxer;
    var output = `enc_${fitxer}`;
    var option = { algorithm : 'aes192' };
    
    encryptor.encryptFile(input, output, key, option, function(err) {
        if (err){
            throw err;
        }
        console.log("Successfully Encrypted!");               
    });
}

function delete__Promise(fitxer) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delete_file(fitxer));
        }, 2000);
    });
}

function encript_Promise(fitxer) {
    return new Promise(resolve => {
        resolve(encrypt(fitxer));
    });
}

async function encript_and_delet_file(fitxer) {
    const cipher_file = await encript_Promise(fitxer);
    const delete_file = await delete__Promise(fitxer);
}

setTimeout( encript_and_delet_file, 4000, 'base64_file.txt');
setTimeout( encript_and_delet_file, 4000, 'hex_file.txt');



// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar 
// una còpia de l'inicial.
var encryptor2 = require('file-encryptor');
//const { Buffer2 } = require('buffer')
const fs3 = require('fs')

const HexTotxt = (info) => {                            ///////////////////////////////////////////////////
    const bufA = Buffer.from(info, 'hex')
    return bufA.toString('utf8')
}
const Hex_to_txt = (fitxer) => {
    fs.readFile(fitxer, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        const Content1 = HexTotxt(data)
        fs.writeFile(`decoder_${fitxer}`, Content1, (err) => {
            if (err) {
                throw err
            }
            console.log('Decoded file hex created');
        })
    })
}


const Base64Totxt = (info) => {
    const bufB = Buffer.from(info, 'base64')
    return bufB.toString('utf8')
}
function Base64_to_txt (fitxer) {
    fs.readFile(fitxer, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        const Content2 = Base64Totxt(data)
        fs.writeFile(`decoder_${fitxer}`, Content2, (err) => {
            if (err) {
                throw err
            }
            console.log('Decoded file base64 created');
        })
    })
}
function decrypt(fitxer){                                  ////////////////////////////////////////////////
    var key = 'My Secret Key';
    var input = fitxer;
    var output = `de_${fitxer}`;
    var option = { algorithm : 'aes192' };

    encryptor2.decryptFile(input, output, key, option, function(err) {
        if (err){
            throw err;
        }
        console.log("Successfully Decrypted!");               
    });
}
function decrypt_Promise(fitxer) {
    return new Promise(resolve => {
        resolve(decrypt(fitxer));
    });
}

async function decrypt_and_decodec_file(fitxer) {
    const cipher_file = await decrypt_Promise(fitxer);
    if(fitxer.substring(fitxer.length-12, fitxer.length) === "hex_file.txt"){
        setTimeout( Hex_to_txt, 8000, 'de_enc_hex_file.txt');
    }

    if(fitxer.substring(fitxer.length-12, fitxer.length) === "e64_file.txt"){
        setTimeout( Base64_to_txt, 8000, 'de_enc_base64_file.txt');
    }
}


setTimeout( decrypt_and_decodec_file, 8000, 'enc_hex_file.txt');
setTimeout( decrypt_and_decodec_file, 12000, 'enc_base64_file.txt');

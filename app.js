const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza} = require ('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido a Adivina el numero secreto!!');
    console.log('Intenta adivinar el numero del 1 al 100. \n');
    //while (condicion) { //codigo a ejecutar mientras se cumpla la condicion}//
    while (numeroAdivinado != numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    
    }
};

juegoAdivinanza();

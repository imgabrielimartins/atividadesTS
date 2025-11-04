import readlinesync = require("readline-sync");

const setNumeros: Set<number> = new Set<number>([]);
let numeroDigitado;
let numeroEncontrado;

for(let i = 0; i < 10; i++){
numeroDigitado = readlinesync.questionInt("Digite um numero: ");
setNumeros.add(numeroDigitado);
}

numeroEncontrado = readlinesync.questionInt("Digite o numero que deseja encontrar: ");

if(setNumeros.has(numeroEncontrado)){
    console.log(`O numero ${numeroEncontrado} foi encontrado!`);
}else{
        console.log(`O numero ${numeroEncontrado} não foi encontrado!`);
}
import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();
let numeroDigitado: number;
let numeroEncontrado: number;

for(let i = 0; i < 10; i++){
numeroDigitado = readlinesync.questionInt("Digite o numero: ");
numeros.push(numeroDigitado);
}

numeroEncontrado = readlinesync.questionInt("Digite o numero que deseja encontrar: ");

let posicao = numeros.indexOf(numeroEncontrado);

if (posicao !== -1) {
    console.log(`O número ${numeroEncontrado} está na posição: ${posicao}`);
} else {
    console.log(`O número ${numeroEncontrado} não foi encontrado.`);
}
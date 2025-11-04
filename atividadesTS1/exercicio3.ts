import readlinesync = require("readline-sync");

const setNumeros: Set<number> = new Set<number>([]);
let numeroDigitado;

for(let i = 0; i < 10; i++){
numeroDigitado = readlinesync.questionInt("Digite o numero: ");
setNumeros.add(numeroDigitado);
}

// converte para array
let ordenados = Array.from(setNumeros).sort((a, b) => a - b);

console.log("Listar dados do Set: ");

for(let numero of ordenados){
    console.log(numero);
}
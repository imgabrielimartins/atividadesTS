import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();
let corDigitada;

for(let cor = 0; cor < 5; cor++){
corDigitada = readlinesync.question(`Digite a cor ${cor + 1}: `);
cores.push(corDigitada);
}

console.log("Listar todas as cores:");
console.log(cores);

console.log("Ordenar as cores:");
console.log(cores.sort());
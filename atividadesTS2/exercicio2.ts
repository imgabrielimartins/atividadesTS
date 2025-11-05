import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();
let livrosOpcoes: number;

do{
    console.log("# ## ### #### #########   Livraria   ########## #### ### ## #");
    console.log("1 - Adicionar novo livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar um livro");
    console.log("0 - Sair");

    livrosOpcoes = readlinesync.questionInt("Entre com a opcao desejada:");

    switch(livrosOpcoes){
        case 1:
            let nomeLivro = readlinesync.question("Digite o nome do livro que deseja adicionar:");
            pilha.push(nomeLivro);
            console.log("Livro adicionado!");
            console.log("Pilha:");
            pilha.printStack();
        break;
        case 2:
             console.log("Todos os livros:");
            pilha.printStack(); 
        break;
        case 3:
             if (pilha.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                const livroRemovido = pilha.pop();
                console.log("Um livro foi retirado da pilha!");
                console.log("Pilha:");
                pilha.printStack();
            }
        break;

        case 0:
             console.log("Finalizando programa!");
        break;

        default:
            console.log("Houve um erro! Digite um numero de 0 a 3!");
        break;
    }


}while(livrosOpcoes !== 0);

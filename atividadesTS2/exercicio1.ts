import { Queue } from "./Queue1";
import readlinesync = require("readline-sync"); 

const fila = new Queue<string>();
let clienteBanco: number;

do{
    console.log("# ## ### #### #########   Banco   ########## #### ### ## #");
    console.log("1 - Adicionar novo cliente");
    console.log("2 - Listar todos os clientes da fila");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair");


    clienteBanco = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(clienteBanco){
        case 1:
            let nomeCliente = readlinesync.question("Digite o nome do cliente: ");
                 fila.enqueue(nomeCliente);
                 console.log("Cliente adicionado a fila!");
                 console.log("Fila:");
                 fila.printQueue();
        break;

        case 2:
            console.log("Lista de clientes na fila:");
            fila.printQueue(); 
        break;
        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                const clienteChamado = fila.dequeue();
                console.log("Cliente foi chamado!");
                console.log("Fila:");
                fila.printQueue();
            }
        break;
        case 0: 
            console.log("Finalizando programa! Tenha um ótimo dia!");
        break;

        default:
            console.log("Houve um erro! Digite um numero de 0 a 3!");
        break;
    }

} while (clienteBanco !== 0);
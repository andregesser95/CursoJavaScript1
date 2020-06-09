class Cliente {
    nome;
    cpf;
}

class ContaCorrete {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo > valor) {
            this.saldo -= valor;
        } else {
            console.log('Saldo inferior ao valor de saque!!');            
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '07286140906';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '89548798575';

const contaCorrentRicardo = new ContaCorrete();
contaCorrentRicardo.saldo = 0;
contaCorrentRicardo.agencia = 1001;
console.log(contaCorrentRicardo.saldo);

contaCorrentRicardo.saldo = 100;
console.log(contaCorrentRicardo.saldo);

let valorSacado = 50;
contaCorrentRicardo.sacar(valorSacado);
console.log(contaCorrentRicardo.saldo);

console.log(cliente1);
console.log(cliente2);


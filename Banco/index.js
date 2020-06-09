class Cliente {
    nome;
    cpf;
}

class ContaCorrete {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo > valor) {
            this._saldo -= valor;
        } else {
            console.log('Saldo insuficiente!!');
        }
        return valor;
    }

    depositar(valor) {
        if (valor < 0) {
            console.log('Valor inválido!');
            return;
        }
        this._saldo += valor;
    }

    get saldo() {
        return this._saldo;
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '07286140906';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '89548798575';

const contaCorrentRicardo = new ContaCorrete();
contaCorrentRicardo.agencia = 1001;

contaCorrentRicardo.depositar(100);
contaCorrentRicardo.depositar(100);
contaCorrentRicardo.depositar(100);
let valorSacado = contaCorrentRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrentRicardo);



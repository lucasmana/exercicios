class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this._saldo = saldo;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!')
        } else {
            this._saldo -= valor;
        }
    }


    get saldo() {
        return this._saldo;
    }
}
const conta = new ContaBancaria('Maria', 1000);
conta.depositar(500);
conta.sacar(300);
console.log(`Saldo atual : R$ ${conta.saldo}`)

const contaBancaria = {
    contaA: {
        titular: 'Lucas Manassés Silva de Araújo',
        saldo: 2000,
        depositarValor(valor) {
            this.saldo += valor;
            return ` ${this.titular},você depositou o valor de ${this.saldo}`
        },

        sacarValor(valor) {
            if (valor > this.saldo) {
                return `Saldo insuficiente. seu saldo é R$ ${this.saldo}. você não pode sacar o valor de R$ ${valor} `
            } else {
                this.saldo -= valor
                return `${this.titular}, você sacou R$ ${valor}. Novo saldo: R$ ${this.saldo - valor}`;
            }


        }

    }
};
console.log(contaBancaria.contaA.depositarValor(700))
console.log(contaBancaria.contaA.sacarValor(7000))
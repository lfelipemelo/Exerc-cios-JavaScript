let Banco = {
    conta: "123456", 
    saldo: 1000,     
    tipoConta: "Corrente",
    agencia: "7890", 

    buscarSaldo: function () {
        return this.saldo;
    },

    deposito: function (valor) {
        this.saldo += valor;
        console.log("Depósito de R$" + valor + " realizado. Novo saldo: R$" + this.saldo);
    },

    saque: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$" + valor + " realizado. Novo saldo: R$" + this.saldo);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    },

    numeroConta: function () {
        return this.conta;
    }
};


console.log("Saldo atual: R$" + Banco.buscarSaldo());
Banco.deposito(500);
Banco.saque(200);
console.log("Número da conta: " + Banco.numeroConta());

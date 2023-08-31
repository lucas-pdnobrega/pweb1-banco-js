class Poupanca extends Conta {
    constructor(numero, saldo=0, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    debitar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    creditar(valor){
        this.saldo += valor;
    }

    transferir(destino, valor){
        this.debitar(valor);
        destino.creditar(valor);
    }
}
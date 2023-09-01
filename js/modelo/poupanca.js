class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    creditar(valor){
        super.creditar(valor);
    }

    juros(data) {
        if (this.dataAniversario === data) {
            this.creditar(super.saldo*0.05);
        }
    }

    toString() {
        return `Poupança { Número : ${super.numero} | Saldo : ${super.saldo} | Data Aniversário : ${this.dataAniversario} }`
    }
}
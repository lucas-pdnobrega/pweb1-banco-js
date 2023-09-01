class ContaBonificada extends Conta {
    constructor(numero, saldo) {
        super(numero, saldo);
    }

    creditar(valor) {
        super.creditar(valor * 1.1);
    }

    toString() {
        return `Conta Bonificada { Número : ${super.numero} | Saldo : ${super.saldo} }`
    }

}

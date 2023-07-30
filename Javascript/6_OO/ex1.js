class Conta {
    constructor(saldo) {
        this.saldo = saldo || 0
    }

    get getSaldo() {
        return `R$ ${this.saldo}`
    }


    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor
        }

        console.log(`Valor atualizado R$ ${this.saldo}`)


    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Você não possui saldo para saque.')
        } else {
            this.saldo -= valor
            console.log(`Valor atualizado R$ ${this.saldo}`)
        }

    }
}



let conta1 = new Conta()

conta1.depositar(-100)
conta1.depositar(200)
conta1.sacar(300)
conta1.sacar(150)

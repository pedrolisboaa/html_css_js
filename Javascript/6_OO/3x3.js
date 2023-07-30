class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    informarEndereco(){
        console.log(`Endereco completo: \n${this.estado} \n${this.cidade} \n${this.bairro} \n${this.cidade}`)
    }

    set setRua(novaRua){
        this.rua = novaRua
    }

    set setBairro(bairro){
        this.bairro = bairro
    }

    set setCidade(cidade){
        this.cidade = cidade
    }

    set setEstado(estado){
        this.estado = estado
    }

    // atualizarEndereco(rua, bairro, cidade, estados){
    //     this.rua = rua
    //     this.bairro = bairro
    //     this.cidade = cidade, estados = estados
    // }
}


let pedro = new Endereco('Lote 18', 'Quadra 3', 'Jardim Botânico', 'Distrio Federal')
pedro.informarEndereco()
pedro.setBairro = 'Guará 1'
pedro.setCidade = 'teste'

pedro.informarEndereco()


class Cachorro{
    constructor(nome, corPelmagem, sexo, raca='SRD'){
        this.raca = raca
        this.nome = nome
        this.corPelmagem = corPelmagem
        this.sexo = sexo
        this.orelhas = 2
    }

    get getRaca(){
        return this.raca
    }

    set setRaca(raca){
        this.raca = raca
    }

    apresentarInformacoes(){
        console.log(`Esse é um ${this.raca} de ${this.nome} com a pelagem ${this.corPelmagem} e do sexo ${this.sexo}.`)
    }
}

Cachorro.prototype.patas = 4
Cachorro.prototype.raca = 'SRD'

const husky = new Cachorro('Apollo', 'Cinza e Branco', 'Macho', 'Husky')
const poodle = new Cachorro(nome='lulu', corPelmagem='Cinza', sexo='Femea')


husky.apresentarInformacoes()
console.log(husky.patas)
console.log(husky)
console.log(poodle)

console.log(poodle.getRaca)
console.log(husky.getRaca)
poodle.setRaca = 'Poddle'
console.log(poodle.getRaca)


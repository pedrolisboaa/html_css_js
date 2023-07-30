const cachorro = {
    // Atríbutos
    nome: '',

    // Métodos
    nomearCachorro: function(){
        this.nome = nome
    },

    latir: function(){
        console.log(`Au au au au !!!! - ${this.nome}`)
    },

    rosnar: function(){
        console.log(`Grrrrrrrrrr! = ${this.nome}`)
    }
}


let viraLata = cachorro
let husky = cachorro


cachorro.latir()
cachorro.rosnar()
console.log('-----------------')

viraLata.nome = 'Caramelo'
viraLata.latir()
viraLata.rosnar()
console.log('----------------')

husky.nome = 'Trovão'
husky.latir()
husky.rosnar()
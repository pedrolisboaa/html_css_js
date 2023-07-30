function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca

    this.uvir = function(){
        console.log(`O ${this.nome} está uivando - AUUUUUUUU!!!`)
    }

    this.latir = function(){
        console.log(`O ${this.nome} está latindo - Au Au Au Au!!!`)
    }
}

let husky = new Cachorro('Husky', 'Apolo')

husky.uvir()
husky.latir()
let cachorro = {
    patas: '',
    raca: '',

    latir: function(){
        console.log(`O ${this.raca} está latindo! Auauauau!`)
    }
}


let labrador = Object.create(cachorro)
let pastorAlemao = Object.create(cachorro)

labrador.raca = 'Labrandor'
pastorAlemao.raca = 'Pastor Alemão'



labrador.latir()
pastorAlemao.latir()
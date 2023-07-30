function criarCachorro(raca, nome, cor){
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.nome =  nome
    cachorro.cor = cor

    cachorro.informarDados = function(){
        console.log(`Esse é o ${nome} ele é um ${raca} com coloração ${cor}`)
    }

    return cachorro
}


let pastorAlemao = criarCachorro('Pastor Alemão', 'K9', 'Preto com Marrom')
let labrador = criarCachorro('Labrador', 'Jorge', 'Dourador')


console.log(pastorAlemao)
console.log(labrador)

pastorAlemao.informarDados()
labrador.informarDados()
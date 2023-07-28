let carro = {
    marca: 'FIAT',
    modelo: 'Uno',
    motor: true,
    rodas: 4,
    cor: 'branco'
}

let adicionais = {
    aerofolio: true,
    rodaDeLigaLeva: true
}

console.log(carro.marca)
console.log(carro.cor)

delete carro.cor

console.log(carro.cor)


carro.velocidadeMaxima = 220
console.log(carro)

Object.assign(carro, adicionais)
console.log(carro)
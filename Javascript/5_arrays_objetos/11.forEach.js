let numeros = [1, 2, 3, 4, 5]
let nomes = ['pedro', 'lisboa']

let numerosQuadrados = []

nomes.forEach(x => {
    console.log(`O nome é ${x.toUpperCase()}`)
});


numeros.forEach(numero => {
    numerosQuadrados.push(numero ** 2)
})

console.log(numerosQuadrados)
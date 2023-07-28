let onibus = {
    rodas: 8,
    limiteDePassageiros: 40, 
    portas: 2
}


console.log(onibus.rodas)
console.log(onibus.limiteDePassageiros)
console.log(onibus.portas)
console.log(Object.values(onibus))


onibus.janelas = 20
delete onibus.rodas

console.log(onibus.janelas)


console.log(onibus)
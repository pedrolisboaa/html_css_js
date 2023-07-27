function calculateAverage(numeros){
    let somador = 0
    for (let i = 0; i < numeros.length; i++) {
        somador += numeros[i]   
    }

    return somador / numeros.length
}


console.log(calculateAverage([1, 2, 3, 4, 5]))


function reverseString(palavra){
    let nova_palavra = palavra.split('').reverse().join('')

    return nova_palavra
}
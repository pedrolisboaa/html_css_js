function numeroPositivo(numero){
    if (numero >= 0){
        return `O número ${numero} ja é possitivo`
    }else{
        return Math.abs(numero)
    }
}


console.log(numeroPositivo(0))
console.log(numeroPositivo(1))
console.log(numeroPositivo(-1))
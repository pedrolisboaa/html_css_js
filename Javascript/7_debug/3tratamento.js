function checarNumero(numero){
    let n = Number(numero)
    if(Number.isNaN(n)){
        console.log('Informe somente números')
    }else{
        console.log('é um número')
    }
}


checarNumero('p')
checarNumero('5')
checarNumero(5)
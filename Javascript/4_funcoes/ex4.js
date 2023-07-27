function numeroAleatorio(numeroMaximo){
    return Math.floor(Math.random() * numeroMaximo + 1)
}


console.log(numeroAleatorio(100))

for (let i = 0; i < 100; i++) {
    console.log(numeroAleatorio(100))
    
}
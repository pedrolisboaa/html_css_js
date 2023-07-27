function contadorDeLetras(palavra){
    let tamanho = 'muito pequena.'
    let texto = `${palavra} tem ${palavra.length} letras é muito ${tamanho}`
    if (palavra.length > 10){
        tamanho = 'muito grande.'
    }
    console.log(texto)
}


contadorDeLetras('pedro')
contadorDeLetras('pedrohenrique')
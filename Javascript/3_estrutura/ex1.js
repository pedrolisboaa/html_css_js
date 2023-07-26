nome = 'Pedro Lisboa'
idade = 30
sexo_masculino = true


if (sexo_masculino){
    console.log(`${nome} possui ${idade} anos e é do sexo masculino`)
}else{
    console.log(`${nome} possui ${idade} anos e é do sexo feminino`)
}


function  classificarNumero(x){
    if (x == 0 ){
        return 'Neutro'
    }else if (x < 0){
        return 'Negativo'
    }else if (x > 0 && n % 2 == 0 ){
        return "Positivo e Par"
    }

    return 'Positivo e Ímpar'
}

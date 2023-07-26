function soma(a, b){
    if (a == undefined || b == undefined){
        return 'Erro, esta faltando um número'
    }else{
        x = Number(a) + Number(b) 
        return x
    }
}



function soma2(a=0, b=0){
    return a + b
}


console.log(soma(5, 10))
console.log(soma(5))
console.log(soma2(5))
console.log(soma2(5, 1))
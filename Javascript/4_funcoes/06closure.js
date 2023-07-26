function lembrarSoma(x){
    return function(y){
        return x + y
    }
}

let soma1 = lembrarSoma(4)
console.log(soma1(10))
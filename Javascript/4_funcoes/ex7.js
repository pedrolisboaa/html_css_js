function tipoDeDado(dado){
    let retorno = `${dado} é uma ${typeof(dado)}`

    if (dado == String){
        return retorno
    }

    if (dado == Number){
        return retorno
    }

    return retorno
}

console.log(tipoDeDado('pedro'))
console.log(tipoDeDado(36))
console.log(tipoDeDado(false))
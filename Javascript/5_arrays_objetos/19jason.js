let pessoa = {
    "nome":"Pedro",
    "sobrenome": "Lisboa",
    "idade": 30
}

//Transformando em um JSON
let pessoaJSON = JSON.stringify(pessoa)
//Transformando JSON em String
let pessoaString = JSON.parse(pessoaJSON)

console.log(pessoa)
console.log(typeof(pessoa))

console.log(pessoaJSON)
console.log(typeof(pessoaJSON))


console.log(pessoaString)
console.log(typeof(pessoaString))



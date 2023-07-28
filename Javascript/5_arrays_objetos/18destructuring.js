let pessoaPedro = {
    nome: 'Pedro',
    sobrenome: 'Lisboa',
    idade: 30
}

const {nome: vNome, sobrenome: vSobrenome, idade: vidade} = pessoaPedro

console.log(vSobrenome)

let nome = ['pedro', 'henrique', 'lisboa']
let [nome1, nome2, nome3] = nome

console.log(nome1)
console.log(nome2)
console.log(nome3)
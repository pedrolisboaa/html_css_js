let nomes = ['pedro']

nomes.push('Henrique')
nomes.push('Nascimento')
nomes.push('Lisboa')
console.log(nomes)

let testeRemocao = nomes.pop()

console.log(nomes)
console.log(testeRemocao)

nomes.shift()
console.log(nomes)

nomes.unshift('primeiro nome')
console.log(nomes)
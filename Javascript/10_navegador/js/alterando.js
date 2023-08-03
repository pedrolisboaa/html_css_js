// Inserindo com insertBefore
let novoElemento = document.createElement('p')

let texto = document.createTextNode('Esse texto é um teste para inserir.')
novoElemento.appendChild(texto)

let elementoAlvo = document.querySelector('#esse')
let elementoPai = document.querySelector('.main')
elementoPai.insertBefore(novoElemento, elementoAlvo)


// Inserindo com appendChild
let novoNomeMae = document.createElement('h3')
let novoNome = document.getElementsByClassName('nome_completo')
let paiDoNome = novoElemento.parentNode

paiDoNome.appendChild(novoNomeMae)


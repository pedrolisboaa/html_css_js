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

// Outro exemplo de appendChild
let divPai = document.getElementById('divAppend')
let novaTagTitulo = document.createElement('h2')
novaTagTitulo.textContent = 'Esse é o novo título que vai ser inserido com o append'
divPai.appendChild(novaTagTitulo)


// Replace

let aquiEPai = document.getElementById('footer')
let aquiEOFilho = document.querySelector('footer p')
let novoFilho = document.createElement('h1')
novoFilho.textContent = 'Aqui é o novo footer que foi realizado a mudança '
aquiEPai.replaceChild(novoFilho, aquiEOFilho)

// Inserido texto
let elementoSemTexto = document.getElementById('header')
let novoTextoDoHeader = document.createTextNode('Aqui é um texto criado pelo createTextNode')
elementoSemTexto.appendChild(novoTextoDoHeader)


// Criando varioas elemento
const array = ['maçã', 'banana', 'abacaxi', 'uva', 'pera']
let selecionandoDiv = document.getElementById('futura_lista')
let ulDaLista = document.createElement('ol')
selecionandoDiv.appendChild(ulDaLista)

for(let i = 0; i < array.length; i++){
    let itemLista = document.createElement('li')
    itemLista.textContent = `${array[i]}`
    ulDaLista.appendChild(itemLista)
}


// mudando um atributo
let link = document.querySelector('p a')
let linkGoogle = 'https://www.google.com.br'
console.log(link.getAttribute('href'))
link.setAttribute('href', linkGoogle)
console.log(link.getAttribute('href'))

// Consultado altura e largura
let tamanhoTitulo = document.querySelector('h1')
console.log(tamanhoTitulo.offsetWidth) // considerando as bordas
console.log(tamanhoTitulo.offsetHeight)

console.log(tamanhoTitulo.clientWidth) // sem considerar as bordas
console.log(tamanhoTitulo.clientHeight)

// pegando as posições
console.log(tamanhoTitulo.getBoundingClientRect())

// Mudando os CSS com Javascript

tamanhoTitulo.style.color = 'blue'

let todosOsParagrafos = document.querySelectorAll('p')
for (let i = 0; i < todosOsParagrafos.length; i++) {
    if(i % 2 == 0){
        todosOsParagrafos[i].style.backgroundColor = 'orange'
        todosOsParagrafos[i].style.color = 'blue'
    }else{
        todosOsParagrafos[i].style.backgroundColor = 'blue'
        todosOsParagrafos[i].style.color = 'orange'
    }
    
    
}

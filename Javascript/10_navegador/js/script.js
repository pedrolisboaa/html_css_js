// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[1])
// console.log(document.body.childNodes[1].childNodes[1].innerText)


// Encontrando elementos pelo DOM
// PoR TAG
console.log('*****Por TAG*****')
console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('p'))


//POR ID
console.log('*****Por ID*****')
console.log(document.getElementById('titulo'))
console.log(document.getElementById('titulo').innerText)
let segundoTitulo = document.getElementById('titulo2')
console.log(segundoTitulo.innerText)

//POR CLASSE
console.log('*****POR NOME DE CLASSE*****')
console.log(document.getElementsByClassName('item-lista'))

let itensLista = document.getElementsByClassName('item-lista')
for (let i = 0; i < itensLista.length; i++) {
    console.log(itensLista[i].innerText)   
}

// POR QUERY
console.log('*****POR QUERY*****')
let comQuery = document.querySelector('.main p ')
console.log(comQuery)
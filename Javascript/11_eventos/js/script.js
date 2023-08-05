function msg(){
    console.log('Clicou em mim.')
}

//Colocando um evento no botão 
let botaoQueDisparaAlert = document.getElementById('botao_alert')
botaoQueDisparaAlert.addEventListener('click', function(){
    alert('Não disse que ia disparar!')
    console.log('Apareci aqui também ')
})


let titulo = document.getElementById('titulo')
titulo.addEventListener('mouseover', () => console.log('Passei aqui!'))


// Removento elemento
let botaoQueRetiraEvento = document.getElementById('botao_sem_evento')

botaoQueRetiraEvento.addEventListener('click', function(){
    botaoQueDisparaAlert.removeEventListener('click', msg)
})


// OBJETO
let btnObjeto1 = document.getElementById('btn-obj-1')
let btnObjeto2 = document.getElementById('btn-obj-2')

function mensagem(evento){
    console.log(evento)
}

btnObjeto1.addEventListener('click', mensagem)
btnObjeto2.addEventListener('click', function(evento){
    console.log(evento)
})

// propagação
let paragrafo = document.querySelector('p')
let botaoDentroDoParagrafo = document.querySelector('p button')

paragrafo.style.background = 'red'

paragrafo.addEventListener('click', function(){console.log('Clicou no Paragrafo')})
botaoDentroDoParagrafo.addEventListener('click', function(evento){
    console.log('Clicou no Botão')
    evento.stopPropagation()

})




"use strict"


let regTeste1 = new RegExp('pedro')
let regTeste2 = /henrique/
let nomeCompleto = 'Pedro henrique do Nascimento Lisboa'


console.log(regTeste1.test('hdaushdjasdpedroahsudhasjkda'))
console.log(regTeste2.test('pedrodonbascimentolisboa'))
console.log(regTeste2.test(nomeCompleto))


//let regComNumero = /[1234567890]/
let regComNUmero = /[0-9]/
let regComNumeros2 = /[1-2]/
let texto = 'Eu tenho 30 anos!'

console.log(regComNUmero.test(texto))
console.log(regComNumeros2.test(texto))
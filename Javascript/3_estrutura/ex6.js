let carteira = false
let idade = 16


if (carteira && idade >= 18){
    console.log('Você pode dirigir.')
}else if (!carteira &&  idade >= 18){
    console.log('Você pode dirigitar somente quando tirar carteira.')
}else{
    console.log('Você poderá tirar carteira somente quando tiver 18 anos.')
}
let array1 = [1, 2, 3, 4, 5]
let array2 = [1, 2, 3]

function tamanhoArray(array){
    if (array.length > 4 ){
        console.log('O array possui muitos elementos')
    }else {
        console.log('O array possui poucos elementos.')
    }
}


tamanhoArray(array1)
tamanhoArray(array2)
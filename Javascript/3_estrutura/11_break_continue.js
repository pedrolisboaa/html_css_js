let x = 10

for(let i = 0; i < x; i++){

    if (i == 3){
        console.log('Estou saindo')
        break
    }
    console.log(i)
}


for(let i = 0; i < x; i++){

    if (i == 3){
        console.log('Pulei no continue')
        continue
    }
    console.log(i)
}
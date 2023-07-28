let q = 10
let w = 20
let e = 30
let r = 40
let t = 50

function somador(...args){
    let somador = 0
    for(let i = 0; i < args.length; i++){
        somador += args[i]
    }
    
    return somador
}

console.log(somador(q, w, e, r, t))
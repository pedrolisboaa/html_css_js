class Carrinho {
    constructor(itens, qtd, valorTotal){
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    additem(item){
        
    }
}


let carrinho = new Carrinho([
    {
        id: 1,
        nome: 'Camisa', 
        qtd: 1,
        preco: 40
    },
    {
        id:2,
        nome: 'Calça',
        qtd: 2,
        preco: 100
    }
], 3, 240)


console.log(carrinho)
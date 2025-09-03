const produto = {
    ProdutoA: {
        nome: 'Escova de dentes',
        descrição: 'Escova de dentes com cerdas macias.',
        preco: 5.70,
        quantidade: 90,
        total() {
            return ` Preço:R$ ${this.preco.toFixed(2)}\n quantidade: ${this.quantidade}\n total:${this.preco * this.quantidade}`;
        }
    },
    ProdutoB: {
        nome: 'Shampoo',
        descrição: 'Shampoo de amendoas(Dove)',
        preco: 43.00,
        quantidade: 27,
        total() {
            return ` Preço:R$ ${this.preco.toFixed()}\n quantidade: ${this.quantidade}\n total:${this.preco * this.quantidade}`;
        }
    },

};
console.log(produto.ProdutoA.total())
console.log(produto.ProdutoB.total())









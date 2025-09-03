const livro = {
    titulo:'Mais que o carpinteiro',
    autor:'Josh Mcdowell',
    ano: 2010,
    retorno(nome) {
        this.nome = nome
        return `O livro ${this.titulo} foi escrito por${this.autor} em ${this.ano} na ${this.nome}`;
    }    
}
console.log(livro.retorno('frança'));


const Lucas = {
  nomeCompleto: 'Lucas Manassés Silva de Araújo',
  idade: 19,
  formação: 'Graduando em Análise e Desenvolvimento de Sistemas',
  estado: 'Pernambuco',
  cidade: 'Recife',
  religião: 'Cristão',
  pregar() {
    console.log(`Canteeee na terra`)
  },
  trabalho() {
    return 'Condando em JavaScript';
  },
  descricao() {
    return `O programador ${this.nomeCompleto},${this.formação} e que mora no estado de ${this.estado}, na cidade de ${this.cidade},trabalha ${this.trabalho()}`;
  }
};
console.log(Lucas.descricao());





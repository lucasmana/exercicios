  


const igreja = {
  pessoas: 'membros',
  coordernador:'pastor',
  subLider:'presbítero',
  pastor(){
    return `expõe e explana a Palavra de Deus`;},
  departamentos:{
    uniao:{
      dirigentes:'Ana e Augusto',
      ensaios:'sextas-feiras',
      horario:'19:00 H',
      faixaEtária:'12-18',
      informcoesUniao(nome){
      return (`A união de adolescentes El-shadai, terá ensaio às ${this.ensaios},às ${this.horario}, sob a tutela dos dirigentes ${this.dirigentes} e o solista será ${nome}`);
      }
    },
    jovens:{
      ensaios:'sábados',
      horario:'14:00 H',
      dirigentes:'silvio',
      faixaEtária:'+ 18',
      },
    coral:{
      ensaios:'segundas-feiras',
      horario:'18:30 H',
      maestro:'silvio',
      condição:'Maior de idade e ser membro das IEADPE por mais de 3 anos.',
    }
  }
};
console.log(igreja.departamentos.uniao);
console.log(igreja.departamentos.uniao.informcoesUniao('caio'));






class Trabalho {
    constructor(){
 this.redeBrasil = {
    departamentos: {
        ti: {
            funcionarios: {
                chefe: 'Magno Régis',
                estagiario: 'Lucas Manasses',
                numeroSetor: [1, 2, 3, 4, 5],
                res (){
                    return `${this.chefe}, ${this.estagiario}sdfasfa ${this.numeroSetor}`;
                   }
            },
         },
            almoxerifado:{
                funcionarios:{
                    chefeSetor: 'Marcos Araújo',
                    auxiliar:'Anderson cicero', 
                    funcao(){
                        return `Realizar pagamentos mensais e semanais. Comprar produtos de acordo com a nessecidade da empresa `;
                    }
                }

             }
        
               }
            };
        }
    }
    const trabalho = new Trabalho();
console.log(redeBrasil.departamentos.ti.funcionarios.numeroSetor);
console.log(redeBrasil.departamentos.ti.funcionarios.res());
console.log(redeBrasil.departamentos.almoxerifado.funcionarios.chefeSetor.includes('M')) 


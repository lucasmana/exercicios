const agenda = {
    AgendaContatosDeFornecedores: {
        ti: {
            nomes: ['Telecon, algar, intelbras'],
            telefones: {
                Telecon: [988768383, 9898992],
                algar: [324234323, 23423434],
                intebras: [988083581, 984950823]
            }
        },
        listarContatosNomes() {
            return `${this.ti.nomes}`;
        },
        buscarContato() {
            return `Contatos Telecon: ${this.ti.telefones.Telecon.join('-')}\nContatos Algar: ${this.ti.telefones.algar.join('-')}\nContatos Intelbras: ${this.ti.telefones.intebras.join('-')}`;

        },
           adicionarContato(empresa, numero) {
            // Se não informar número, gera um aleatório
            if (!numero) {
                numero = Math.floor(Math.random() * 1000000000);
            }

            // Adiciona no array da empresa informada
            if (this.ti.telefones[empresa]) {
                this.ti.telefones[empresa].unshift(numero);
                return `Número ${numero} adicionado em ${empresa}`;
            } else {
                return `Empresa ${empresa} não encontrada.`;
            }
        }
    }
};

console.log(agenda.AgendaContatosDeFornecedores.adicionarContato("Telecon")); // adiciona número aleatório
console.log(agenda.AgendaContatosDeFornecedores.adicionarContato("algar")); // adiciona número aleatório
console.log(agenda.AgendaContatosDeFornecedores.adicionarContato("intebras")); // adiciona número aleatório
console.log(agenda.AgendaContatosDeFornecedores.listarContatosNomes());
console.log(agenda.AgendaContatosDeFornecedores.buscarContato());
console.log(agenda.AgendaContatosDeFornecedores.adicionarContato());










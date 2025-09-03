const aluno = {
    nome:'Lucas Manassés',
    notas:[10,7],
    media(){
        let soma = this.notas.reduce((a,b)=> a + b, 0);
        return soma/ this.notas.length;0
        
    }
}
console.log(aluno.media());


const usuario = {
    usuarioA:{
        nome:'lucas Manassés',
        email:'lucasmanamfs2020@gmail.com',    
        login(){
            return`Usuário ${this.nome} logado com o email ${this.email}`;
        }
    }
}
console.log(usuario.usuarioA.login());
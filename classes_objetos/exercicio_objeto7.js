const biblioteca = {
  livros: [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true },
    { titulo: "1984", autor: "George Orwell", disponivel: false }
  ],

  // Método para emprestar um livro
  emprestarLivro(titulo) {
    const livro = this.livros.find(l => l.titulo === titulo);
    if (livro) {
      if (livro.disponivel) {
        livro.disponivel = false;
        return `📕 Você emprestou o livro "${livro.titulo}".`;
      } else {
        return `⚠️ O livro "${livro.titulo}" já está emprestado.`;
      }
    } else {
      return `❌ Livro "${titulo}" não encontrado na biblioteca.`;
    }
  },

  // Método para devolver um livro
  devolverLivro(titulo) {
    const livro = this.livros.find(l => l.titulo === titulo);
    if (livro) {
      if (!livro.disponivel) {
        livro.disponivel = true;
        return `✅ Você devolveu o livro "${livro.titulo}".`;
      } else {
        return `⚠️ O livro "${livro.titulo}" já estava disponível.`;
      }
    } else {
      return `❌ Livro "${titulo}" não encontrado na biblioteca.`;
    }
  }
};


console.log(biblioteca.emprestarLivro("Dom Casmurro"));
// 📕 Você emprestou o livro "Dom Casmurro".

console.log(biblioteca.emprestarLivro("1984"));
// ⚠️ O livro "1984" já está emprestado.

console.log(biblioteca.devolverLivro("1984"));
// ✅ Você devolveu o livro "1984".

console.log(biblioteca.emprestarLivro("Harry Potter"));
// ❌ Livro "Harry Potter" não encontrado na biblioteca.

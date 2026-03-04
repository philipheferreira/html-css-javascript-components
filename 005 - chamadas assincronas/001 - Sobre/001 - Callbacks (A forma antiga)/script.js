console.log("Início");

function fazAlgoDemorado(callback) {
  // Simula uma tarefa que leva 2 segundos
  setTimeout(function() {
    console.log("Tarefa demorada concluída!");
    callback(); // Executa a função que foi passada
  }, 2000);
}

fazAlgoDemorado(function() {
  console.log("Executando o callback!");
});

console.log("Fim");

// --- Saída no console ---
// Início
// Fim
// (espera 2 segundos)
// Tarefa demorada concluída!
// Executando o callback!

/* Problema: Se você tem várias operações assíncronas que dependem 
uma da outra, você acaba com o famoso "Callback Hell" ou "Pirâmide 
da Morte", um código aninhado e de difícil leitura. */

// Exemplo de Callback Hell
pegarUsuario(function(usuario) {
  pegarPostsDoUsuario(usuario.id, function(posts) {
    pegarComentariosDoPost(posts[0].id, function(comentarios) {
      // ... e continua aninhando
    });
  });
});
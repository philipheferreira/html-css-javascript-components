console.log("Início");

const minhaPromise = new Promise((resolve, reject) => {
  // Simula uma tarefa que pode dar certo ou errado
  const sucesso = true;
  setTimeout(() => {
    if (sucesso) {
      resolve("Tarefa concluída com sucesso!"); // Dá certo
    } else {
      reject("Algo deu errado!"); // Dá errado
    }
  }, 2000);
});

minhaPromise
  .then(resultado => {
    console.log(resultado); // Executado se a Promise for resolvida
  })
  .catch(erro => {
    console.error(erro); // Executado se a Promise for rejeitada
  })
  .finally(() => {
    console.log("Operação finalizada."); // Executado sempre
  });

console.log("Fim");

// --- Saída no console ---
// Início
// Fim
// (espera 2 segundos)
// Tarefa concluída com sucesso!
// Operação finalizada.


console.log("Início");

function tarefaAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarefa concluída com sucesso!");
    }, 2000);
  });
}

// Criamos uma função async para poder usar o await
async function executar() {
  try {
    console.log("Aguardando a tarefa...");
    const resultado = await tarefaAssincrona(); // Pausa aqui até a promise resolver
    console.log(resultado); // Só executa depois que a promise resolveu
  } catch (erro) {
    console.error("Ocorreu um erro:", erro);
  } finally {
    console.log("Operação finalizada.");
  }
}

executar();

console.log("Fim");

// --- Saída no console ---
// Início
// Aguardando a tarefa...
// Fim
// (espera 2 segundos)
// Tarefa concluída com sucesso!
// Operação finalizada.
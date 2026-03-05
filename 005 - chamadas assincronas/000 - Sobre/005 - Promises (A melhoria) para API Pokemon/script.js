// --- Exemplo com Promises ---

console.log("\n=== Iniciando busca com Promises ===");

// A função fetch já retorna uma Promise!
fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then(response => {
    if (!response.ok) {
      // Se a resposta não for ok, lançamos um erro para ser pego pelo .catch
      throw new Error('Erro de rede: ' + response.statusText);
    }
    return response.json(); // .json() também retorna uma Promise!
  })
  .then(pokemon => {
    console.log(`1. Pokémon encontrado: ${pokemon.name}`);
    // Retornamos a nova Promise da próxima requisição fetch
    return fetch(pokemon.abilities[0].ability.url);
  })
  .then(response => response.json()) // Processamos a resposta da segunda requisição
  .then(habilidade => {
    console.log(`2. Habilidade encontrada: ${habilidade.name}`);
    console.log(`3. Efeito: ${habilidade.effect_entries.find(e => e.language.name === 'en').short_effect}`);
  })
  .catch(error => {
    // Um único .catch() trata erros de qualquer etapa da cadeia!
    console.error("Ocorreu um erro na busca com Promises:", error);
  })
  .finally(() => {
    console.log("=== Busca com Promises finalizada ===");
  });


  /* Análise: O código é linear e muito mais limpo. O tratamento de erros é centralizado em um único .catch(),
   o que é uma grande melhoria. No entanto, ainda estamos lidando com uma cadeia de .then().
   */
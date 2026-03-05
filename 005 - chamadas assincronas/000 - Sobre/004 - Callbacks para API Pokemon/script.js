// --- Exemplo com Callbacks ---

console.log("=== Iniciando busca com Callbacks ===");

/*
O que a funcionalidade faz
1. Buscar os dados do Pokémon de número 25 (Pikachu).
2. Com a resposta, pegar a URL da sua primeira habilidade ("static").
3. Fazer uma nova requisição para buscar os detalhes dessa habilidade.
4. Exibir o nome da habilidade e seu efeito.
 */

// Função genérica para fazer requisições usando callbacks
function buscarDados(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Requisição concluída
      if (xhr.status === 200) { // Status de sucesso
        callback(null, JSON.parse(xhr.responseText));
      } else {
        callback(new Error("Erro ao buscar os dados: " + xhr.status), null);
      }
    }
  };
  xhr.send();
}

// Início da nossa lógica encadeada
buscarDados('https://pokeapi.co/api/v2/pokemon/25', function(erroPokemon, pokemon) {
  if (erroPokemon) {
    console.error(erroPokemon.message);
    return;
  }
  console.log(`1. Pokémon encontrado: ${pokemon.name}`);

  const primeiraHabilidadeUrl = pokemon.abilities[0].ability.url;
  
  // Segunda chamada, aninhada dentro do primeiro callback
  buscarDados(primeiraHabilidadeUrl, function(erroHabilidade, habilidade) {
    if (erroHabilidade) {
      console.error(erroHabilidade.message);
      return;
    }
    console.log(`2. Habilidade encontrada: ${habilidade.name}`);
    console.log(`3. Efeito: ${habilidade.effect_entries.find(e => e.language.name === 'en').short_effect}`);
    console.log("=== Busca com Callbacks finalizada ===");
  });
});

/* Análise: Note como as funções ficam cada vez mais aninhadas à direita. Imagine isso com 4 ou 
5 chamadas... a legibilidade e a manutenção se tornam um pesadelo. */
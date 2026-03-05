// --- Exemplo com Async/Await ---

console.log("\n=== Iniciando busca com Async/Await ===");

// Criamos uma função assíncrona para poder usar o await
async function buscarDadosDoPokemon() {
  try {
    // O await pausa a função até a Promise do fetch ser resolvida
    const responsePokemon = await fetch('https://pokeapi.co/api/v2/pokemon/25');
    if (!responsePokemon.ok) {
      throw new Error('Erro de rede: ' + responsePokemon.statusText);
    }
    const pokemon = await responsePokemon.json();
    console.log(`1. Pokémon encontrado: ${pokemon.name}`);

    // Fazemos a segunda requisição, também usando await
    const responseHabilidade = await fetch(pokemon.abilities[0].ability.url);
    const habilidade = await responseHabilidade.json();
    console.log(`2. Habilidade encontrada: ${habilidade.name}`);
    console.log(`3. Efeito: ${habilidade.effect_entries.find(e => e.language.name === 'en').short_effect}`);

  } catch (error) {
    // Qualquer erro lançado em um await é pego aqui
    console.error("Ocorreu um erro na busca com Async/Await:", error);
  } finally {
    console.log("=== Busca com Async/Await finalizada ===");
  }
}

// E finalmente, chamamos nossa função async
buscarDadosDoPokemon();
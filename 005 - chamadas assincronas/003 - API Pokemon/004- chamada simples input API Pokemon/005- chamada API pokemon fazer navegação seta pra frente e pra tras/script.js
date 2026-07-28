async function buscarPokemon() {
  const input = document.querySelector(".pokemonInput").value.toLowerCase();
  const resultado = document.querySelector(".resultado");

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado!");
    }

    const dados = await resposta.json();

    // Formata tipos
    const tipos = dados.types.map(t => t.type.name).join(', ');

    // Formata habilidades
    const habilidades = dados.abilities.map(h => h.ability.name).join(', ');

    // Peso em kg (API retorna em hectogramas)
    const pesoKg = dados.weight / 10;

    // Pega os 5 primeiros movimentos
    const movimentos = dados.moves.slice(0, 5).map(m => m.move.name).join(', ');

    resultado.innerHTML = `
      <h2>${dados.name.toUpperCase()} (#${dados.id})</h2>
      <img src="${dados.sprites.front_default}" alt="${dados.name}" />
      <p><strong>Tipo(s):</strong> ${tipos}</p>
      <p><strong>Habilidades:</strong> ${habilidades}</p>
      <p><strong>Peso:</strong> ${pesoKg} kg</p>
      <p><strong>Movimentos:</strong> ${movimentos}</p>
    `;
  } catch (erro) {
    resultado.innerHTML = `<p style="color:red;">${erro.message}</p>`;
  }
}
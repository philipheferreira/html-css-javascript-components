async function buscarPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado!");
    }

    const dados = await resposta.json();

    // Monta HTML com os dados
    resultado.innerHTML = `
      <h2>${dados.name.toUpperCase()} (#${dados.id})</h2>
      <img src="${dados.sprites.front_default}" alt="${dados.name}" />
      <p><strong>Tipo(s):</strong> ${dados.types.map(t => t.type.name).join(', ')}</p>
    `;
  } catch (erro) {
    resultado.innerHTML = `<p style="color:red;">${erro.message}</p>`;
  }
}

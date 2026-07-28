document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", buscarPokemon);
});

async function buscarPokemon() {
  const input = document.querySelector(".pokemonInput").value.toLowerCase();
  const resultado = document.querySelector(".resultado");

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado!");
    }

    const dados = await resposta.json();

    const tipos = dados.types.map(t => t.type.name).join(', ');
    const habilidades = dados.abilities.map(h => h.ability.name).join(', ');
    const pesoKg = dados.weight / 10;

    resultado.innerHTML = `
      <h2>${dados.name.toUpperCase()} (#${dados.id})</h2>
      <img src="${dados.sprites.front_default}" alt="${dados.name}" />
      <p><strong>Tipo(s):</strong> ${tipos}</p>
      <p><strong>Habilidades:</strong> ${habilidades}</p>
      <p><strong>Peso:</strong> ${pesoKg} kg</p>
    `;
  } catch (erro) {
    resultado.innerHTML = `<p style="color:red;">${erro.message}</p>`;
  }
}
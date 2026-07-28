const pokemonList = document.getElementById('pokemon-list');

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return await res.json();
};

const loadAllPokemon = async () => {
  const pokemonPromises = [];

  for (let i = 1; i <= 151; i++) {
    pokemonPromises.push(getPokemon(i));
  }

  const allPokemon = await Promise.all(pokemonPromises);

  allPokemon.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      <h3>#${pokemon.id} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
    `;
    pokemonList.appendChild(card);
  });
};

loadAllPokemon();
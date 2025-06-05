const pokemonList = document.getElementById('pokemon-list');

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return await res.json();
};

const formatType = (types) => {
  return types.map(typeInfo => typeInfo.type.name).join(', ');
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

    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const types = formatType(pokemon.types);
    const height = (pokemon.height / 10).toFixed(1); // metros
    const weight = (pokemon.weight / 10).toFixed(1); // kg

    card.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${name}" />
      <h3>#${pokemon.id} ${name}</h3>
      <p><strong>Tipo:</strong> ${types}</p>
      <p><strong>Altura:</strong> ${height} m</p>
      <p><strong>Peso:</strong> ${weight} kg</p>
    `;
    pokemonList.appendChild(card);
  });
};

loadAllPokemon();
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

    // Filtra os movimentos aprendidos por nível (ignora os que vêm por máquina ou egg)
    const movimentosComNivel = dados.moves
      .map(mov => {
        const nivelAprendido = mov.version_group_details.find(
          detalhe => detalhe.move_learn_method.name === "level-up"
        );

        if (nivelAprendido && nivelAprendido.level_learned_at > 0) {
          return {
            nome: mov.move.name,
            nivel: nivelAprendido.level_learned_at
          };
        }

        return null;
      })
      .filter(m => m !== null)
      .sort((a, b) => a.nivel - b.nivel) // Ordena por nível
      .slice(0, 10); // Pega só os 10 primeiros

    let listaMovimentos = "<ul>";
    movimentosComNivel.forEach(mov => {
      listaMovimentos += `<li><strong>${mov.nome}</strong> — nível ${mov.nivel}</li>`;
    });
    listaMovimentos += "</ul>";

    resultado.innerHTML = `
      <h2>${dados.name.toUpperCase()} (#${dados.id})</h2>
      <img src="${dados.sprites.front_default}" alt="${dados.name}" />
      <p><strong>Tipo(s):</strong> ${tipos}</p>
      <p><strong>Habilidades:</strong> ${habilidades}</p>
      <p><strong>Peso:</strong> ${pesoKg} kg</p>
      <p><strong>Movimentos aprendidos por nível:</strong></p>
      ${listaMovimentos}
    `;
  } catch (erro) {
    resultado.innerHTML = `<p style="color:red;">${erro.message}</p>`;
  }
}
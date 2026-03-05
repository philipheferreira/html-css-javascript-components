// --- Elementos do DOM ---
const resultArea = document.getElementById('result-area');
const btnAsync = document.getElementById('btn-async');

// --- Função Auxiliar para Desabilitar Botões ---
// Isso evita que o usuário clique várias vezes enquanto uma busca está em andamento
function toggleButtons(disabled) {
    btnAsync.disabled = disabled;
}

// --- 3. LÓGICA COM ASYNC/AWAIT ---
async function buscarComAsync() {
    resultArea.textContent = 'Iniciando busca com Async/Await...';
    toggleButtons(true);

    try {
        const responsePokemon = await fetch('https://pokeapi.co/api/v2/pokemon/25');
        if (!responsePokemon.ok) throw new Error('Erro de rede.');
        const pokemon = await responsePokemon.json();

        const responseHabilidade = await fetch(pokemon.abilities[0].ability.url);
        if (!responseHabilidade.ok) throw new Error('Erro de rede.');
        const habilidade = await responseHabilidade.json();
        
        const efeito = habilidade.effect_entries.find(e => e.language.name === 'en').short_effect;
        
        resultArea.innerHTML = `
            <strong>Resultado com Async/Await:</strong><br>
            Pokémon: ${pokemon.name}<br>
            Habilidade: ${habilidade.name}<br>
            Efeito: ${efeito}
        `;

    } catch (error) {
        resultArea.innerHTML = `<span class="error">Erro: ${error.message}</span>`;
    } finally {
        // O finally é executado sempre, dando erro ou não
        toggleButtons(false);
    }
}

// --- ADICIONANDO OS EVENT LISTENERS AOS BOTÕES ---
btnAsync.addEventListener('click', buscarComAsync);
// --- Elementos do DOM ---
const resultArea = document.getElementById('result-area');
const btnPromise = document.getElementById('btn-promise');


// --- Função Auxiliar para Desabilitar Botões ---
// Isso evita que o usuário clique várias vezes enquanto uma busca está em andamento
function toggleButtons(disabled) {
    btnCallback.disabled = disabled;
    btnPromise.disabled = disabled;
    btnAsync.disabled = disabled;
}

// --- 2. LÓGICA COM PROMISES ---
function buscarComPromise() {
    resultArea.textContent = 'Iniciando busca com Promises...';
    toggleButtons(true);

    fetch('https://pokeapi.co/api/v2/pokemon/25')
        .then(response => {
            if (!response.ok) throw new Error('Erro de rede.');
            return response.json();
        })
        .then(pokemon => {
            const primeiraHabilidadeUrl = pokemon.abilities[0].ability.url;
            return fetch(primeiraHabilidadeUrl); // Retorna a nova Promise
        })
        .then(response => {
            if (!response.ok) throw new Error('Erro de rede.');
            return response.json();
        })
        .then(habilidade => {
            toggleButtons(false); // Reabilita os botões no final
            const efeito = habilidade.effect_entries.find(e => e.language.name === 'en').short_effect;
            resultArea.innerHTML = `
                <strong>Resultado com Promises:</strong><br>
                Pokémon: Pikachu<br>
                Habilidade: ${habilidade.name}<br>
                Efeito: ${efeito}
            `;
        })
        .catch(error => {
            toggleButtons(false);
            resultArea.innerHTML = `<span class="error">Erro: ${error.message}</span>`;
        });
}


// --- ADICIONANDO OS EVENT LISTENERS AOS BOTÕES ---
btnPromise.addEventListener('click', buscarComPromise);
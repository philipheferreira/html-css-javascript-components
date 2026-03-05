// --- Elementos do DOM ---
const resultArea = document.getElementById('result-area');
const btnCallback = document.getElementById('btn-callback');
const btnPromise = document.getElementById('btn-promise');
const btnAsync = document.getElementById('btn-async');

// --- Função Auxiliar para Desabilitar Botões ---
// Isso evita que o usuário clique várias vezes enquanto uma busca está em andamento
function toggleButtons(disabled) {
    btnCallback.disabled = disabled;
    btnPromise.disabled = disabled;
    btnAsync.disabled = disabled;
}

// --- 1. LÓGICA COM CALLBACKS ---
function buscarComCallback() {
    resultArea.textContent = 'Iniciando busca com Callbacks...';
    toggleButtons(true);

    function buscarDados(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(new Error("Erro na requisição."), null);
                }
            }
        };
        xhr.send();
    }

    buscarDados('https://pokeapi.co/api/v2/pokemon/25', function(erro, pokemon) {
        if (erro) {
            resultArea.innerHTML = `<span class="error">Erro: ${erro.message}</span>`;
            toggleButtons(false);
            return;
        }
        const primeiraHabilidadeUrl = pokemon.abilities[0].ability.url;
        
        buscarDados(primeiraHabilidadeUrl, function(erroHab, habilidade) {
            toggleButtons(false); // Reabilita os botões no final
            if (erroHab) {
                resultArea.innerHTML = `<span class="error">Erro ao buscar habilidade: ${erroHab.message}</span>`;
                return;
            }
            const efeito = habilidade.effect_entries.find(e => e.language.name === 'en').short_effect;
            resultArea.innerHTML = `
                <strong>Resultado com Callbacks:</strong><br>
                Pokémon: ${pokemon.name}<br>
                Habilidade: ${habilidade.name}<br>
                Efeito: ${efeito}
            `;
        });
    });
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
btnCallback.addEventListener('click', buscarComCallback);
btnPromise.addEventListener('click', buscarComPromise);
btnAsync.addEventListener('click', buscarComAsync);
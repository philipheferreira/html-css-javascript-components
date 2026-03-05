// --- Elementos do DOM ---
const resultArea = document.getElementById('result-area');
const btnCallback = document.getElementById('btn-callback');

// --- Função Auxiliar para Desabilitar Botões ---
// Isso evita que o usuário clique várias vezes enquanto uma busca está em andamento
function toggleButtons(disabled) {
    btnCallback.disabled = disabled;
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

// --- ADICIONANDO OS EVENT LISTENERS AOS BOTÕES ---
btnCallback.addEventListener('click', buscarComCallback);
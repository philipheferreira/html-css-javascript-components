// Pegando os elementos do DOM
const input = document.getElementById('pokemonInput');
const btn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error');
const card = document.getElementById('pokemonCard');
const pokemonImg = document.getElementById('pokemonImg');
const pokemonName = document.getElementById('pokemonName');
const pokemonType = document.getElementById('pokemonType');

// ---------------------------------------------------------
// 1. OS CALLBACKS (Continuam exatamente iguais!)
// Eles não se importam com o que aconteceu no meio,
// só querem receber o dado final ou o erro.
// ---------------------------------------------------------
function callbackSucesso(dados) {
    loading.classList.add('hidden');
    pokemonImg.src = dados.sprites.front_default;
    pokemonName.textContent = dados.name.toUpperCase();
    pokemonType.textContent = "Tipo: " + dados.types[0].type.name.toUpperCase();
    card.classList.remove('hidden');
}

function callbackErro(erro) {
    loading.classList.add('hidden');
    errorMsg.textContent = "Erro ao buscar: " + erro;
    errorMsg.classList.remove('hidden');
}

// ---------------------------------------------------------
// 2. A FUNÇÃO ASSÍNCRONA COM FETCH
// ---------------------------------------------------------
function buscarPokemonComFetch(nomeOuId, quandoTiverSucesso, quandoTiverErro) {
    // Resetando a tela
    card.classList.add('hidden');
    errorMsg.classList.add('hidden');
    loading.classList.remove('hidden');

    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`;

    // O FETCH INICIA A REQUISIÇÃO E RETORNA UMA PROMISE (Promessa)
    fetch(url)
        .then(function(resposta) {
            // ATENÇÃO: O fetch só entra no .catch() se der erro de rede (ex: cair a internet).
            // Se o pokemon não existir (erro 404), ele NÃO entra no catch. Temos que verificar manualmente:
            if (!resposta.ok) {
                throw new Error("Pokémon não encontrado!"); // Força o erro para cair no .catch lá embaixo
            }
            // Se deu certo, convertemos o corpo da resposta para JSON.
            // OBS: O .json() TAMBÉM retorna uma Promise!
            return resposta.json(); 
        })
        .then(function(dadosJson) {
            // Este segundo .then() roda quando o .json() terminar de converter.
            // É AQUI QUE CHAMAMOS NOSSO CALLBACK DE SUCESSO!
            quandoTiverSucesso(dadosJson);
        })
        .catch(function(erro) {
            // Se der erro de rede ou cair no "throw new Error()" ali em cima,
            // cai aqui. É AQUI QUE CHAMAMOS NOSSO CALLBACK DE ERRO!
            quandoTiverErro(erro.message);
        });
}

// ---------------------------------------------------------
// 3. O GATILHO
// ---------------------------------------------------------
btn.addEventListener('click', function() {
    const nome = input.value.trim();
    
    if (nome !== '') {
        // A chamada continua idêntica para quem está clicando no botão
        buscarPokemonComFetch(nome, callbackSucesso, callbackErro);
    }
});
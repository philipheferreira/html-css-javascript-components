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
// 1. DEFININDO OS CALLBACKS
// São as funções que serão chamadas DEPOIS que a requisição terminar.
// ---------------------------------------------------------

// Callback de Sucesso: Recebe os dados e atualiza a tela
function callbackSucesso(dados) {
    loading.classList.add('hidden'); // Esconde o loading
    
    // Preenche o card com os dados
    pokemonImg.src = dados.sprites.front_default;
    pokemonName.textContent = dados.name.toUpperCase();
    // Pega o primeiro tipo do pokemon
    pokemonType.textContent = "Tipo: " + dados.types[0].type.name.toUpperCase();
    
    card.classList.remove('hidden'); // Mostra o card
}

// Callback de Erro: Recebe o erro e mostra na tela
function callbackErro(erro) {
    loading.classList.add('hidden'); // Esconde o loading
    errorMsg.textContent = "Erro ao buscar: " + erro;
    errorMsg.classList.remove('hidden'); // Mostra o erro
}

// ---------------------------------------------------------
// 2. A FUNÇÃO ASSÍNCRONA
// Ela faz a requisição e NÃO sabe quando vai terminar.
// Por isso, ela pede duas funções (callbacks) como parâmetro:
// "Quando você terminar, chame uma dessas funções dependendo do resultado"
// ---------------------------------------------------------
function buscarPokemon(nomeOuId, quandoTiverSucesso, quandoTiverErro) {
    // Resetando a tela
    card.classList.add('hidden');
    errorMsg.classList.add('hidden');
    loading.classList.remove('hidden'); // Mostra o loading imediatamente

    // Criando o objeto de requisição
    const xhr = new XMLHttpRequest();

    // Configurando a requisição (Método GET, URL da API)
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`);

    // O evento 'onreadystatechange' é disparado várias vezes.
    // O callback aqui verifica se a requisição terminou (readyState === 4)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // Se terminou, foi sucesso (status 200) ou erro?
            if (xhr.status === 200) {
                // Transforma o texto em JSON
                const dadosJson = JSON.parse(xhr.responseText);
                // CHAMADA DO CALLBACK DE SUCESSO!!!
                quandoTiverSucesso(dadosJson);
            } else {
                // CHAMADA DO CALLBACK DE ERRO!!!
                quandoTiverErro("Pokémon não encontrado ou erro de rede.");
            }
        }
    };

    // Se der erro de internet/cors
    xhr.onerror = function() {
        quandoTiverErro("Falha na conexão com a internet.");
    };

    // Enviando a requisição
    xhr.send();
}

// ---------------------------------------------------------
// 3. O GATILHO (Evento de Clique)
// ---------------------------------------------------------
btn.addEventListener('click', function() {
    const nome = input.value.trim();
    
    if (nome !== '') {
        // Passamos o nome e as duas funções de callback
        buscarPokemon(nome, callbackSucesso, callbackErro);
    }
});
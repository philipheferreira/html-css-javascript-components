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
// A FUNÇÃO AGORA NÃO RECEBE MAIS CALLBACKS!
// Ela apenas retorna a Promise do fetch para quem a chamou.
// ---------------------------------------------------------
function buscarPokemon(nomeOuId) {
    // Resetando a tela
    card.classList.add('hidden');
    errorMsg.classList.add('hidden');
    loading.classList.remove('hidden');

    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`;
    
    // fetch() RETORNA uma Promise imediatamente.
    // Nós retornamos essa Promise para fora da função.
    return fetch(url); 
}

// ---------------------------------------------------------
// O GATILHO E O TRATAMENTO DA PROMISE
// ---------------------------------------------------------
btn.addEventListener('click', function() {
    const nome = input.value.trim();
    
    if (nome !== '') {
        
        // COMO FUNCIONA O ENCADEAMENTO DE PROMISES:
        
        buscarPokemon(nome) // 1. Executa a função, que retorna uma Promise (estado: Pendente)
        
            .then(function(resposta) { // 2. Quando a Promise resolver (dados chegaram da net), roda este bloco
                if (!resposta.ok) {
                    throw new Error("Pokémon não encontrado!");
                }
                // A função .json() TAMBÉM é assíncrona e retorna uma Promise!
                // Ao usar "return", nós passamos essa nova Promise para o próximo .then()
                return resposta.json(); 
            })
            
            .then(function(dadosJson) { // 3. Este .then() só roda quando o .json() terminar de processar
                loading.classList.add('hidden');
                pokemonImg.src = dadosJson.sprites.front_default;
                pokemonName.textContent = dadosJson.name.toUpperCase();
                pokemonType.textContent = "Tipo: " + dadosJson.types[0].type.name.toUpperCase();
                card.classList.remove('hidden');
            })
            
            .catch(function(erro) { // 4. Se QUALQUER coisa der errado nos passos acima, cai aqui direto
                loading.classList.add('hidden');
                errorMsg.textContent = "Erro: " + erro.message;
                errorMsg.classList.remove('hidden');
            });
            
    }
});
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
// 1. A FUNÇÃO AGORA É "ASYNC"
// Colocar "async" na frente avisa ao JS: "Essa função vai ter pausas (awaits) dentro dela".
// ---------------------------------------------------------
async function buscarPokemon(nomeOuId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`;
    
    // A palavra "await" PAUSA a execução da função aqui.
    // Ela só continua para a próxima linha quando o fetch terminar.
    const resposta = await fetch(url); 

    // Verificação de erro (lembrando que o fetch não dá erro no 404 sozinho)
    if (!resposta.ok) {
        throw new Error("Pokémon não encontrado!");
    }

    // Também pausamos para esperar o JSON ser convertido.
    // Não precisamos mais de um .then() para encadear!
    const dadosJson = await resposta.json();

    // Retornamos os dados prontos
    return dadosJson;
}

// ---------------------------------------------------------
// 2. O GATILHO
// Como vamos usar o "await" dentro do click, a função do click PRECISA ser "async" também.
// ---------------------------------------------------------
btn.addEventListener('click', async function() {
    const nome = input.value.trim();
    
    if (nome !== '') {
        
        // Resetando a tela
        card.classList.add('hidden');
        errorMsg.classList.add('hidden');
        loading.classList.remove('hidden');

        // ---------------------------------------------------------
        // 3. O TRY...CATCH (O substituto do .catch() das Promises)
        // ---------------------------------------------------------
        try {
            // Chamamos a função e usamos o await. O código pausa aqui.
            // Quando os dados voltarem, a variável 'dados' já estará preenchida.
            const dados = await buscarPokemon(nome);

            // O código abaixo SÓ roda depois que a variável 'dados' estiver pronta.
            // Veja como fica simples de ler! Parece código síncrono.
            loading.classList.add('hidden');
            pokemonImg.src = dados.sprites.front_default;
            pokemonName.textContent = dados.name.toUpperCase();
            pokemonType.textContent = "Tipo: " + dados.types[0].type.name.toUpperCase();
            card.classList.remove('hidden');

        } catch (erro) {
            // Se QUALQUER erro acontecer lá dentro do try (no fetch ou no json),
            // o código pula direto para este bloco catch.
            loading.classList.add('hidden');
            errorMsg.textContent = "Erro: " + erro.message;
            errorMsg.classList.remove('hidden');
        }
    }
});
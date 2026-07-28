/* --- CÓDIGO JAVASCRIPT COM CALLBACKS --- */
        
        const container = document.getElementById('card-container');
        const loading = document.getElementById('loading');
        const searchInput = document.getElementById('search-input');

        function toggleLoading(show) {
            loading.style.display = show ? 'block' : 'none';
        }

        function createCardElement(cardData) {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            const imageUrl = cardData.card_images[0].image_url;
            cardDiv.innerHTML = `
                <img src="${imageUrl}" alt="${cardData.name}">
                <h3 class="card-title">${cardData.name}</h3>
                <p class="card-type">${cardData.type} ${cardData.race ? '| ' + cardData.race : ''}</p>
                <p class="card-desc">${cardData.desc}</p>
            `;
            return cardDiv;
        }

        /*
         * NOVA FUNÇÃO GENÉRICA: Ela faz o fetch e chama os callbacks dependendo do resultado.
         * O padrão é: callbackErro vem primeiro, callbackSucesso vem depois.
         */
        function buscarNaAPI(url, callbackErro, callbackSucesso) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro de rede: ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    // A API do Yu-Gi-Oh retorna um objeto { error: "..." } se não achar nada
                    if (data.error) {
                        callbackErro(data.error);
                    } else {
                        // Deu certo! Passa os dados para o callback de sucesso
                        callbackSucesso(data);
                    }
                })
                .catch(error => {
                    // Se o fetch falhar (sem internet, URL errada, etc)
                    callbackErro(error.message);
                });
        }

        // Função de Buscar reformulada
        function searchCard() {
            const query = searchInput.value.trim();
            if (!query) {
                alert('Por favor, digite o nome de uma carta.');
                return;
            }

            container.innerHTML = '';
            toggleLoading(true);

            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(query)}`;

            // Chamando a função e passando o que ela deve fazer EM CADA SITUAÇÃO
            buscarNaAPI(
                url,
                
                // 1. CALLBACK DE ERRO (O que fazer se der ruim)
                function(mensagemDeErro) {
                    toggleLoading(false);
                    container.innerHTML = `<p>Nenhuma carta encontrada. Erro: ${mensagemDeErro}</p>`;
                },
                
                // 2. CALLBACK DE SUCESSO (O que fazer se der certo)
                function(dados) {
                    toggleLoading(false);
                    dados.data.forEach(card => {
                        container.appendChild(createCardElement(card));
                    });
                }
            );
        }

        // Função de Carta Aleatória reformulada
        function getRandomCard() {
            container.innerHTML = '';
            toggleLoading(true);

            const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php';

            buscarNaAPI(
                url,
                
                // Callback de Erro
                function(mensagemDeErro) {
                    toggleLoading(false);
                    container.innerHTML = `<p>Ocorreu um erro: ${mensagemDeErro}</p>`;
                },
                
                // Callback de Sucesso
                function(dados) {
                    toggleLoading(false);
                    container.appendChild(createCardElement(dados));
                }
            );
        }

        // Permite apertar "Enter"
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCard();
            }
        });

        // Inicia com uma carta aleatória
        getRandomCard();

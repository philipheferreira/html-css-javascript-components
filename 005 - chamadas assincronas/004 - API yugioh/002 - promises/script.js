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

        // ==========================================
        // LÓGICA COM PROMISES (.then, .catch, .finally)
        // ==========================================

        function searchCard() {
            const query = searchInput.value.trim();
            if (!query) {
                alert('Por favor, digite o nome de uma carta.');
                return;
            }

            container.innerHTML = '';
            toggleLoading(true);

            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(query)}`;

            // fetch() Retorna uma PROMISE
            fetch(url)
                .then(function(response) {
                    // 1º THEN: A requisição chegou. Vamos verificar se deu certo (Status 200) e converter para JSON.
                    if (!response.ok) {
                        throw new Error('Erro de rede. Status: ' + response.status);
                    }
                    // response.json() TAMBÉM retorna uma Promise!
                    return response.json(); 
                })
                .then(function(data) {
                    // 2º THEN: Os dados JSON já foram parseados. Hora de processar.
                    
                    // Truque importante: A API do Yu-Gi-Oh retorna HTTP 200 mesmo se não achar a carta.
                    // Ela manda um objeto { error: "..." }. Vamos tratar isso forçando um erro.
                    if (data.error) {
                        throw new Error(data.error); // Se lançar um erro aqui, ele pula direto para o .catch()
                    }

                    // Se não tiver erro, renderizamos as cartas
                    data.data.forEach(function(card) {
                        container.appendChild(createCardElement(card));
                    });
                })
                .catch(function(erro) {
                    // CATCH: Se qualquer erro acontecer nos .then() acima (ou se a internet cair), cai aqui.
                    console.error("Falha na Promise:", erro);
                    container.innerHTML = `<p style="color: #e94560;">Falha ao buscar: ${erro.message}</p>`;
                })
                .finally(function() {
                    // FINALLY: Executa SEMPRE, no final de tudo, deu certo ou deu erro.
                    // Perfeito para esconder o loading.
                    toggleLoading(false);
                });
        }

        function getRandomCard() {
            container.innerHTML = '';
            toggleLoading(true);

            fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
                .then(function(response) {
                    if (!response.ok) throw new Error('Erro de rede');
                    return response.json();
                })
                .then(function(data) {
                    // Como o endpoint randomcard.php não retorna o objeto "error", podemos renderizar direto
                    container.appendChild(createCardElement(data));
                })
                .catch(function(erro) {
                    container.innerHTML = `<p style="color: #e94560;">Falha ao buscar: ${erro.message}</p>`;
                })
                .finally(function() {
                    toggleLoading(false);
                });
        }

        // Atalho do teclado
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchCard();
        });

        // Inicia a página
        getRandomCard();

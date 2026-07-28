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
        // LÓGICA COM ASYNC / AWAIT
        // ==========================================

        // 1. A palavra-chave 'async' na frente da função avisa ao JS: 
        // "Essa função vai ter pausas (awaits) dentro dela"
        async function searchCard() {
            const query = searchInput.value.trim();
            if (!query) {
                alert('Por favor, digite o nome de uma carta.');
                return;
            }

            container.innerHTML = '';
            toggleLoading(true);

            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(query)}`;

            // 2. O bloco 'try' é onde colocamos o código que pode dar erro
            try {
                // 3. A palavra-chave 'await' PAUSA a execução da função até o fetch terminar.
                // É como se o código fosse síncrono aqui. Ele só passa para a próxima linha 
                // quando a resposta do servidor chegar.
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error('Erro de rede. Status: ' + response.status);
                }

                // 4. response.json() também é assíncrono, então usamos outro await
                const data = await response.json();

                // 5. Verificação do erro específico da API do Yu-Gi-Oh
                if (data.error) {
                    throw new Error(data.error);
                }

                // 6. Se chegou aqui, deu tudo certo. Renderizamos na tela.
                data.data.forEach(card => {
                    container.appendChild(createCardElement(card));
                });

            } catch (error) {
                // 7. Se ALGUM erro acontecer no bloco 'try' (um throw ou um await falhar), 
                // a execução pula imediatamente para cá.
                console.error("Falha assíncrona capturada:", error);
                container.innerHTML = `<p style="color: #e94560;">Falha ao buscar: ${error.message}</p>`;
                
            } finally {
                // 8. O bloco 'finally' roda sempre no final, deu erro ou não.
                // Substitui a necessidade do .finally() das Promises.
                toggleLoading(false);
            }
        }

        async function getRandomCard() {
            container.innerHTML = '';
            toggleLoading(true);

            try {
                // Tudo acontece de forma linear graças ao 'await'
                const response = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
                
                if (!response.ok) throw new Error('Erro de rede');
                
                const data = await response.json();
                
                container.appendChild(createCardElement(data));

            } catch (error) {
                container.innerHTML = `<p style="color: #e94560;">Falha ao buscar: ${error.message}</p>`;
            } finally {
                toggleLoading(false);
            }
        }

        // Atalho do teclado
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchCard();
        });

        // Inicia a página
        getRandomCard();

 // 1. Atualiza o ano automaticamente no Copyright
        document.getElementById('year').textContent = new Date().getFullYear();

        // 2. Lógica do Acordeão para Mobile
        // Verifica se a tela é pequena antes de adicionar a lógica de clique
        if (window.innerWidth <= 576) {
            const accordions = document.querySelectorAll('.mobile-accordion');

            accordions.forEach(accordion => {
                const header = accordion.querySelector('h3');
                
                header.addEventListener('click', () => {
                    // Fecha outros abertos (opcional, para comportamento de sanfona estrita)
                    accordions.forEach(otherItem => {
                        if (otherItem !== accordion) {
                            otherItem.classList.remove('active');
                        }
                    });

                    // Alterna o atual
                    accordion.classList.toggle('active');
                });
            });
        }

        // 3. Opcional: Reajustar comportamento se redimensionar a tela
        window.addEventListener('resize', () => {
            const accordions = document.querySelectorAll('.mobile-accordion');
            if (window.innerWidth > 576) {
                // Se voltar para desktop, remove a classe ativa para garantir que os links fiquem visíveis
                accordions.forEach(acc => acc.classList.remove('active'));
            }
        });
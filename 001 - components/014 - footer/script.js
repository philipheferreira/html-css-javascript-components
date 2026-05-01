 document.addEventListener('DOMContentLoaded', () => {
            
            // Função para mostrar notificação (Toast) sem usar alert()
            function showToast(message) {
                const container = document.getElementById('toast-container');
                const toast = document.createElement('div');
                toast.className = 'toast';
                toast.textContent = message;
                
                container.appendChild(toast);

                // Remove o elemento do DOM após a animação (3s total)
                setTimeout(() => {
                    toast.remove();
                }, 3000);
            }

            // Interação dos botões (Request e Contact)
            const actionButtons = document.querySelectorAll('.js-action-btn');
            
            actionButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const action = e.target.getAttribute('data-action');
                    showToast(`Opening ${action} form...`);
                    // Aqui você adicionaria a lógica real de abrir modal ou navegar
                });
            });

            // Interação do Logo (Scroll to Top)
            const logoBtn = document.getElementById('logo-btn');
            logoBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                showToast("Back to top");
            });

            // Dinamismo simples para o Copyright (Opcional, se quiser ano atual)
            // Mas como o design pede "2026", mantivemos estático no HTML.
        });
// ==============================
// SCRIPT - Sabor & Arte - Receitas
// ==============================

document.addEventListener('DOMContentLoaded', function() {

    // --- Ano dinamico no footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Elementos ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const searchInput = document.getElementById('searchInput');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const favBtns = document.querySelectorAll('.fav-btn');

    let filtroAtivo = 'todos';
    let termoBusca = '';

    // --- Filtros por categoria ---
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Atualiza botao ativo
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            filtroAtivo = btn.getAttribute('data-filter');
            aplicarFiltros();
        });
    });

    // --- Busca por texto ---
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            termoBusca = searchInput.value.toLowerCase().trim();
            aplicarFiltros();
        });
    }

    // --- Funcao principal de filtragem ---
    function aplicarFiltros() {
        let visiveis = 0;

        recipeCards.forEach(function(card, index) {
            const categoria = card.getAttribute('data-category');
            const texto = card.textContent.toLowerCase();

            // Verifica filtro de categoria
            const passaCategoria = (filtroAtivo === 'todos') || (categoria === filtroAtivo);

            // Verifica busca por texto
            const passaBusca = (termoBusca === '') || texto.includes(termoBusca);

            if (passaCategoria && passaBusca) {
                card.classList.remove('hidden');
                card.classList.remove('fade-in');
                // Forca reflow para reiniciar animacao
                void card.offsetWidth;
                card.classList.add('fade-in');
                card.style.animationDelay = (visiveis * 0.06) + 's';
                visiveis++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('fade-in');
            }
        });

        // Atualiza contador de resultados
        if (resultCount) {
            if (termoBusca.length > 0) {
                resultCount.textContent = visiveis + ' encontrada' + (visiveis !== 1 ? 's' : '');
                resultCount.classList.add('visible');
            } else {
                resultCount.classList.remove('visible');
            }
        }

        // Mostra/esconde mensagem "sem resultados"
        if (noResults) {
            if (visiveis === 0) {
                noResults.classList.add('visible');
            } else {
                noResults.classList.remove('visible');
            }
        }
    }

    // --- Botoes de favoritar ---
    // Recupera favoritos salvos no localStorage
    let favoritos = JSON.parse(localStorage.getItem('receitasFavoritas') || '[]');

    // Marca os ja favoritados ao carregar
    favBtns.forEach(function(btn, index) {
        if (favoritos.includes(index)) {
            btn.classList.add('favorited');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });

    favBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            const jaFavoritado = btn.classList.contains('favorited');

            if (jaFavoritado) {
                // Remove dos favoritos
                btn.classList.remove('favorited');
                btn.innerHTML = '<i class="far fa-heart"></i>';
                favoritos = favoritos.filter(function(i) { return i !== index; });
                showToast('Receita removida dos favoritos');
            } else {
                // Adiciona aos favoritos
                btn.classList.add('favorited');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
                favoritos.push(index);
                showToast('Receita adicionada aos favoritos');
            }

            // Salva no localStorage
            localStorage.setItem('receitasFavoritas', JSON.stringify(favoritos));
        });
    });

    // --- Toast de notificacao ---
    let toastTimeout = null;
    function showToast(mensagem) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        if (!toast || !toastMessage) return;

        // Limpa timeout anterior se houver
        if (toastTimeout) {
            clearTimeout(toastTimeout);
            toast.classList.remove('show');
        }

        toastMessage.textContent = mensagem;

        // Pequeno delay para reiniciar a animacao
        requestAnimationFrame(function() {
            toast.classList.add('show');
        });

        toastTimeout = setTimeout(function() {
            toast.classList.remove('show');
            toastTimeout = null;
        }, 2500);
    }

    // --- Newsletter ---
    window.handleSubscribe = function(event) {
        event.preventDefault();
        var form = event.target;
        var emailInput = form.querySelector('input[type="email"]');
        
        if (emailInput && emailInput.value) {
            showToast('Inscrito com sucesso! Receba receitas em ' + emailInput.value);
            emailInput.value = '';
        }
    };

});
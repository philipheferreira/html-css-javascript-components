document.addEventListener('DOMContentLoaded', function() {

    // --- Menu Hambúrguer para Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Troca o ícone do menu (hambúrguer para 'X')
        const icon = menuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu ao clicar em um link (em telas pequenas)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navList.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Botão Voltar ao Topo ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        // Mostra ou esconde o botão baseado na posição do scroll
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        // Rola suavemente para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
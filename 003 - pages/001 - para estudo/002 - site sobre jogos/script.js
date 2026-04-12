

let navLinks = document.querySelectorAll('.main-nav a');
let contentSections = document.querySelectorAll('.content-section');

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os links de navegação e todas as seções de conteúdo
    

    // Função para esconder todas as seções e remover a classe 'active' dos links
    function hideAllSections() {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Adiciona um evento de clique a cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link (que é pular para a âncora)
            event.preventDefault();

            // Pega o ID da seção que deve ser mostrada a partir do atributo href
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(`${targetId}-section`);

            // Esconde tudo
            hideAllSections();

            // Mostra a seção alvo e ativa o link clicado
            if (targetSection) {
                targetSection.classList.add('active');
                link.classList.add('active');
            }
        });
    });

});
// Espera o documento HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o campo de entrada e a lista de itens
    const searchInput = document.querySelector('.searchInput');
    const itemList = document.querySelector('.itemList');
    const items = itemList.querySelectorAll('.item');

    // Adiciona um 'ouvinte de evento' para o campo de entrada
    // O evento 'input' é acionado toda vez que o usuário digita algo
    searchInput.addEventListener('input', (e) => {
        // Pega o valor digitado, converte para minúsculas e remove espaços em branco
        const searchTerm = e.target.value.toLowerCase().trim();

        // Itera sobre cada item da lista
        items.forEach(item => {
            // Pega o texto do título e da descrição do item, também em minúsculas
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            
            // Verifica se o termo de busca existe no título ou na descrição
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                // Se existir, remove a classe 'hide' para mostrar o item
                item.classList.remove('hide');
            } else {
                // Se não existir, adiciona a classe 'hide' para esconder o item
                item.classList.add('hide');
            }
        });
    });
});
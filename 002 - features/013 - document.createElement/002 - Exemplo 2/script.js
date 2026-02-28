// Seleciona o botão para adicionar um evento de clique
const botao = document.getElementById('botao-criar');

botao.addEventListener('click', function() {
    // --- PASSO 1: CRIAR ---
    // Cria um novo elemento <div> em memória
    const novaDiv = document.createElement('div');

    // --- PASSO 2: CONFIGURAR ---
    // Adiciona uma classe para estilizar com CSS
    novaDiv.classList.add('elemento-criado');
    // Adiciona um texto dentro da nova div
    novaDiv.textContent = 'Eu fui criado pelo JavaScript quando você clicou no botão!';

    // --- PASSO 3: ADICIONAR AO DOM ---
    // Seleciona o elemento pai onde a nova div será inserida
    const container = document.getElementById('container');
    // Adiciona a nova div como filha do container
    container.appendChild(novaDiv);
});
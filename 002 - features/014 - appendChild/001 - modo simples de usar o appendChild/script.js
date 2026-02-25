// Passo 1: Selecionar os elementos que vamos manipular
const listaDeTarefas = document.getElementById('lista-de-tarefas'); // O elemento PAI
const botaoAdicionar = document.getElementById('botao-adicionar');

// Passo 2: Adicionar um "ouvinte de evento" ao botão
// Isso quer dizer: "Fique de olho no botão e, quando ele for clicado, execute a função abaixo"
botaoAdicionar.addEventListener('click', function() {
    // Passo 3: Criar o novo elemento que será adicionado
    const novaTarefa = document.createElement('li'); // Criamos uma tag <li> vazia

    // Passo 4: Adicionar conteúdo ao nosso novo elemento
    novaTarefa.textContent = 'Estudar JavaScript'; // O texto dentro da <li>

    // Passo 5: Usar o appendChild para adicionar o novo elemento à lista
    listaDeTarefas.appendChild(novaTarefa);
});
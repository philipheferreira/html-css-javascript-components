// 1. Selecionar os elementos do DOM que vamos precisar
const inputTarefa = document.querySelector('.novaTarefa');
const botaoAdicionar = document.querySelector('.adicionarBtn');
const botaoLimpar = document.querySelector('.limparBtn');
const listaTarefas = document.querySelector('.listaDeTarefas');

// 2. Adicionar um ouvinte de evento ao botão "Adicionar"
botaoAdicionar.addEventListener('click', adicionarTarefa);

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    // 3. Pegar o valor do input
    const textoDaTarefa = inputTarefa.value;

    // 4. Verificar se o input não está vazio
    if (textoDaTarefa.trim() === '') {
        alert('Por favor, digite uma tarefa!');
        return; // Para a execução da função se o campo estiver vazio
    }

    // 5. A MÁGICA DO innerHTML!
    //    Criamos uma string com o HTML do novo item da lista.
    //    Usamos `+=` para ADICIONAR o novo conteúdo ao conteúdo já existente na lista.
    listaTarefas.innerHTML += `<li>${textoDaTarefa}</li>`;

    // 6. Limpar o campo de input após adicionar a tarefa
    inputTarefa.value = '';

    // 7. (Opcional) Colocar o foco de volta no input para facilitar o uso
    inputTarefa.focus();
}

// 8. Adicionar um ouvinte de evento ao botão "Limpar"
botaoLimpar.addEventListener('click', limparLista);

// Função para limpar a lista de tarefas
function limparLista() {
    // Aqui, usamos `innerHTML = ''` para SUBSTITUIR todo o conteúdo por uma string vazia.
    listaTarefas.innerHTML = '';
}
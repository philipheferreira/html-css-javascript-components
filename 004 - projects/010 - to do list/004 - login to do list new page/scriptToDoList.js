// Seleciona os elementos do DOM
const btnTarefa = document.querySelector('.botaoAdicionarTarefa');
const inputTarefa = document.querySelector('.inputTarefa');
const listaTarefas = document.querySelector('.lista-tarefas');

// Função que será executada ao clicar no botão
const adicionarTarefa = () => {
    // 1. Pega o valor do input e remove espaços em branco no início e no fim
    const tarefaTexto = inputTarefa.value.trim();

    // 2. Verifica se o usuário digitou algo
    if (tarefaTexto === "") {
        alert("Por favor, digite uma tarefa!");
        return; // Interrompe a função se o input estiver vazio
    }

    // 3. Cria um novo elemento <li>
    const li = document.createElement('li');
    
    // 4. Define o texto do <li> como a tarefa digitada
    // Cria um span para o texto da tarefa
    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = tarefaTexto;

    // Adiciona evento para marcar como concluída
	spanTarefa.addEventListener('click', () => {
	    li.classList.toggle('concluida'); // Adiciona ou remove a classe 'concluida'
	});
    
    li.appendChild(spanTarefa);

    // Cria o botão de apagar
    const botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'Apagar';
    botaoApagar.classList.add('botao-apagar'); // Adiciona uma classe para estilizar

    // Adiciona um evento de clique ao botão de apagar
    botaoApagar.addEventListener('click', () => {
        li.remove(); // Remove o elemento <li> pai
    });

    // 5. Adiciona o <li> criado à <ul> no HTML
    li.appendChild(botaoApagar); // Adiciona o botão ao <li>
    listaTarefas.appendChild(li); // Adiciona o <li> completo à <ul>

    // 6. Limpa o campo de input para a próxima tarefa
    inputTarefa.value = '';

    // 7. (Opcional) Dá foco de volta ao input para facilitar
    inputTarefa.focus();
}

// Adiciona o evento de clique ao botão
btnTarefa.addEventListener("click", adicionarTarefa);

// Segunda forma de chamar dentro do input Adiciona um evento para a tecla "Enter" no input
inputTarefa.addEventListener('keypress', (e) => {
    // e.key === 'Enter' verifica se a tecla pressionada foi o Enter
    if (e.key === 'Enter') {
        adicionarTarefa(); // Chama a mesma função do botão
    }
});
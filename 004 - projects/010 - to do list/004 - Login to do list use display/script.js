

let contador = 0;

let logarBotao = document.querySelector(".logar");
let campoLogin = document.querySelector(".login");
let campoSenha = document.querySelector(".senha");
let campoLoginArea = document.querySelector("#formLogin");
let campoToDoList = document.querySelector('.todoListPagina');
let campoAvisoBloqueioTempo = document.querySelector(".avisoTempoBloqueio");


let funcaoLogar = () => {

	event.preventDefault();	/* A linha mais importante: impede o envio e o recarregamento da pagina e o contador de salvar */

	let login = document.querySelector('.login').value
	let senha = document.querySelector('.senha').value

	if(login == "admin" && senha == "admin"){
		alert('Bem vindo usuario admin, voce logou com sucesso.');
		campoLoginArea.style.display = 'none';
		campoToDoList.style.display = 'block'
		
		
	}else if(login != "admin" && senha != "admin" && contador >= 3){
		alert(`Voce atingiu o limite de erros permitos da conta. foram ${contador}. Seu acesso foi bloqueado ` )

		bloquearFormularioTemporariamente(10); // chama a funcao de bloqueio
	}

	else{
		contador++;
		alert(`Usuario ou senha incorretos. voce errou ${contador} vezes, so tem mais ` + (3 - contador) + ' tentativas');
		console.log(`Tentativa ${contador} de 3.`);
	}

}

/**
 * Funcoes criaradas para utilizar bloqueio e desbloqueio de funcoes */

let bloquearFormularioTemporariamente = (segundos) => {
	// desabilita campos e o botao
	campoLogin.disabled = true;
	campoSenha.disabled = true;
	logarBotao.disabled = true;

	// Limpar os campos e mudar nome no botao
	campoLogin.value = "";
	campoSenha.value = "";
	logarBotao.value = "Bloqueado";

	let tempoRestante = segundos; /* repassa o valor de tempo para uma variavel local, para poder utilizar */

	// usa o setInterval para atualizar o texto do botao a cada segundo

	campoAvisoBloqueioTempo.classList.remove("escondido");

	intervaloDeTempo = setInterval(() => {
		campoAvisoBloqueioTempo.textContent = `Acesso Bloqueado. Tente novamente em ${tempoRestante} segundos...`;
		tempoRestante--;
		console.log(tempoRestante)

		if (tempoRestante < 0) {
			clearInterval(intervaloDeTempo); // Para a funcao de contagem regressiva
			desbloquearFormulario(); //Aciona a funcao de desbloqueo do formulario
		}
	}, 1000);
}

let desbloquearFormulario = () => {

	campoLogin.disabled = false;
	campoSenha.disabled = false;
	logarBotao.disabled = false;

	logarBotao.value = "Logar";

	// Reseta o contador para as 3 tentativas do zero novamente
	contador = 0;

	campoAvisoBloqueioTempo.classList.add("escondido");
	campoAvisoBloqueioTempo.textContent = ""; // Limpa o texto para a proxima vez

	alert("Tempo do bloqueio passou, voce pode tentar novamente.");
	campoLogin.focus(); // coloca o cursor no campo login para facilitar

}

logarBotao.addEventListener("click", funcaoLogar);


/* Funcionalidades todolist */


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

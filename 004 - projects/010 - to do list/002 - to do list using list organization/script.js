let tarefaInput = document.querySelector(".novaTarefa");
let adicionarBotao = document.querySelector("button")[0];
let segurarTarefaIncompleta = document.querySelector(".tarefasIncompletas");
let segurarTarefaCompleta = document.querySelector("tarefaCompleta");

let criarNovaTarefaElemento = (TarefaRepassada) => {

	let listaDeItens = document.createElement("li"); // Cria o elemento li

	// input (checkbox)
	let checkBox = document.createElement("input"); // Cria o elemento input

	//label
	let label = document.createElement("input"); // Cria o elemento

	//input (text)
	let editarInput = document.createElement("button"); // Cria o elemento do tipo botao

	// button.edit
	let botaoEditar = document.createElement("button"); // Cria o elemento do tipo botao

	// button.delete
	let botaoDeletar = document.createElement("button"); // Cria o elemento do tipo botao


	label.innerText = TarefaRepassada;

	checkBox.type = "checkbox"; // define o input do tipo checkbox
	editarInput.type = "text"; // define o input do tipo text

	botaoEditar.innerText = "Editar"; // cria o component em que dentro dele esta escrito Editar
	botaoEditar.className = "edit"; // Cria uma class para esse componente que o nome dado foi edit
	botaoDeletar.innerText = "Deletar"; // cria o component em que dentro dele esta escrito Deletar
	botaoDeletar.className = "delete"; // Cria uma class para esse componente que o nome dado foi delete

	/* comanod appendChild que cria um filho dentro de uma lista e joga ele por ultimo. Como nesse 
	caso foi o listaDeItens que e um li que vai armazenar a lista dentro do html.
	Logo ele vai armazenar tudo la em fileira de criacao seguida. */

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editarInput);
	listItem.appendChild(botaoEditar);
	listItem.appendChild(botaoDeletar);
	return listaDeItens; // retorna a lista de itens atualizada

}

let adicionarTarefa = () => {
	console.log(" Adicionar tarefa a lista de tarefas...");
	

}

let editarTarefa = () => {
	console.log("Editar tarefa...");
	
}

let deletarTarefa = () => {

}

let marcarTarefaComoCompleta = () => {
	console.log("Tarefa Completada...");



}

let tarefaIncompleta = () => {
	console.log("Tarefa incompleta...");
	// Marcar tarefa como incompleta.
	// Quando o checkbox estiver desmarcado
	// Append a lista de tarefas de item para o tasksIncompletas
	let listaDeItens = this.parentNode;
	segurarTarefaIncompleta.appendChild(listItem);
	bindTarefaEvento(listaDeItens, marcarTarefaComoCompleta);
}

let ajaxRequisicao = () => {
	console.log("AJAX Request");
}

let bindTarefaEvento = () => {
	
}
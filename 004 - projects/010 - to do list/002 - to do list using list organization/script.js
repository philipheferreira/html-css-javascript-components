let tarefaInput = document.querySelector(".novaTarefa");
let adicionarBotao = document.querySelector("button")[0];
let segurarTarefaIncompleta = document.querySelector(".tarefasIncompletas");
let segurarTarefaCompleta = document.querySelector("tarefaCompleta");

let criarNovaTarefaElemento = () => {

	let listaDeItens = document.createElement("li");

	// input (checkbox)
	let checkBox = document.createElement("input"); // checkbx

	//label
	let label = document.createElement("input"); // label

	//input
	let editInput = document.createElement("button");

	// button


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
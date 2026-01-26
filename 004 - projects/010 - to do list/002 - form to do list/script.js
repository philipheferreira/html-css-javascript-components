let btnTarefa = document.querySelector('.botaoAdicionarTarefa');

let clickarBotao = () => {

	let tarefa = document.querySelector(".inputTarefa").value

	alert("Sua tarefa: " + tarefa);
}

btnTarefa.addEventListener("click", clickarBotao);
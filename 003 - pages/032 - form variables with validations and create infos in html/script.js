let infosFormulario = document.querySelector('.meuFormulario');
let submitBotao = document.querySelector(".botaoSubmit");

let clickarAtivarSubmitDoFormulario = () => {

	event.preventDefault(); /* Impede o comportamento padrao do formulario, que seria recarregar a pagina */
	
	alert("Botao pressionado");
}

submitBotao.addEventListener("click", clickarAtivarSubmitDoFormulario);
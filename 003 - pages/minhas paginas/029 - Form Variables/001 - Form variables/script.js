let infosFormulario = document.querySelector('.meuFormulario')
let submitBotao = document.querySelector(".botaoSubmit")

let clickarAtivarSubmitDoFormulario = () => {

	event.preventDefault(); /* Impede o comportamento padrao do formulario, que seria recarregar a pagina */

	let primeiroNome = document.querySelector('.pnome').value;
	let ultimoNome = document.querySelector('.unome').value;
	let pais = document.querySelector('.paisNascimento').value;
	let idade = document.querySelector('.idade').value;
	let resumo = document.querySelector('.texto').value;
	
	const mensagem = `
		--- Dados do Formulario ---
		Primeiro nome: ${primeiroNome}.
		Ultimo nome: ${ultimoNome}.
		Pais: ${pais}
		Idade: ${idade}
		Resumo: ${resumo}
	`;

	alert(mensagem);
}


infosFormulario.addEventListener("submit", clickarAtivarSubmitDoFormulario); // sera ativado toda vez que a paginar ativar o submit
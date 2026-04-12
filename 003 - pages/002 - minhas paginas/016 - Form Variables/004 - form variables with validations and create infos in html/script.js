let infosFormulario = document.querySelector('.meuFormulario');
let submitBotao = document.querySelector(".botaoSubmit");
let formsRegistrados = document.querySelector(".formsRegistrados");

let clickarAtivarSubmitDoFormulario = () => {

	event.preventDefault(); /* Impede o comportamento padrao do formulario, que seria recarregar a pagina */
	
	let primeiroNome = document.querySelector('.pnome').value;
	let ultimoNome = document.querySelector('.unome').value;
	let idade = document.querySelector('.idade').value;
	let pais = document.querySelector('.paisNascimento').value;
	let resumo = document.querySelector('.texto').value;
	
	if (primeiroNome === '') {
		alert('O campo Primeiro Nome e obrigatorio');
		document.querySelector('.pnome').classList.add('erro-validacao');
		return;
	}

	if (ultimoNome === '') {
		alert('O campo Ultimo Nome e obrigatorio');
		document.querySelector('.unome').classList.add('erro-validacao');
		return;
	}

	if (idade === '') {
		alert('O campo Idade e obrigatorio');
		document.querySelector('.idade').classList.add('erro-validacao');
		return;
	}

	if (resumo === '') {
		alert('O campo Resumo e obrigatorio');
		document.querySelector('.texto').classList.add('erro-validacao');
		return;
	}


	//Remove as bordas vermelhas caso tenha destacado campos com vermelho
	document.querySelector('.pnome').classList.remove('erro-validacao');
	document.querySelector('.unome').classList.remove('erro-validacao');
	document.querySelector('.idade').classList.remove('erro-validacao');
	document.querySelector('.texto').classList.remove('erro-validacao');

	criarNovoRegistroDeForms(primeiroNome, ultimoNome, idade, pais, resumo);

}

let criarNovoRegistroDeForms = (novoRegistroDeNome, novoRegistroDeUltimoNome, NovoRegistroDeIdade, novoRegistroDePaisNascimento, NovoRegistroDeTexto) => {

	let classeNovaTarefa = document.createElement('div');

	classeNovaTarefa.textContent = `${novoRegistroDeNome}, ${novoRegistroDeUltimoNome}, ${NovoRegistroDeIdade}, ${novoRegistroDePaisNascimento}, ${NovoRegistroDeTexto}.`

	formsRegistrados.appendChild(classeNovaTarefa);
}


submitBotao.addEventListener("click", clickarAtivarSubmitDoFormulario);
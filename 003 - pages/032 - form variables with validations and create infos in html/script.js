let botaoTeste = document.querySelector('.teste');

let pressionarBotaoAtivar = () => {
	alert("Botao pressionado");
}

botaoTeste.addEventListener("click", pressionarBotaoAtivar);
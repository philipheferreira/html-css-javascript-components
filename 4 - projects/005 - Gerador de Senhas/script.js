const valorEntrada = document.querySelector(".valorInput");

const valorBotao = document.querySelector(".botaoGerarSenha");


valorBotao.addEventListener("click", function(){ 
	console.log("valor botao clicado");
	valorEntrada.value = "testado";
})
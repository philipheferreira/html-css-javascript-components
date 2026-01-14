let botao = document.querySelector(".botao");

function fazer(){
	console.log("Fazendo");
	alert("O seu botao foi ativado");
}

botao.addEventListener("click", fazer);
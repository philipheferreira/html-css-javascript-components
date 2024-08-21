let botao = document.querySelector(".botao");

let fazendo = function() {
	console.log("Fazendo");
	alert("Você apertou o botão");
}

botao.addEventListener("click", fazendo);

let botao = document.querySelector(".botao");


// quando usar arrow functions com evento devessse colocar eles antes dos eventos
let fazer =  () => {
	console.log("Atualizando no console");
	alert("O botão feito com arrow function foi ativado");
}


botao.addEventListener("click", fazer);


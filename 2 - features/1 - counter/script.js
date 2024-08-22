let botaoSoma = document.querySelector(".soma");
let botaoSub = document.querySelector(".sub");
let tela = document.querySelector(".tela");

let contador = 0;

let soma = () => {
	contador++;
	tela.innerHTML = contador;
}

let sub = () => {
	contador--;
	tela.innerHTML = contador;
}

botaoSoma.addEventListener("click", soma);

botaoSub.addEventListener("click", sub);
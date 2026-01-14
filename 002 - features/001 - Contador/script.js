let botaoSoma = document.querySelector(".soma");
let botaoSub = document.querySelector(".sub");
let tela = document.querySelector(".tela");

let contador = 0;

let soma = () => {
	contador++;
	passarValorTela(contador);
}

let sub = () => {
	contador--;
	passarValorTela(contador);
}

let passarValorTela = (valor) => {
	tela.innerHTML = valor;
}

botaoSoma.addEventListener("click", soma);

botaoSub.addEventListener("click", sub);
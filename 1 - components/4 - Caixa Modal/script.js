
let modal = document.querySelector(".modal");

let btnModal = document.querySelector(".meuBotao");

let btnFechar = document.querySelector(".fechar");

let abrirModal = () => {
	modal.style.display = "block";
}

let fecharModal = () => {
	modal.style.display = "none";
}

btnModal.addEventListener("click", abrirModal);

btnFechar.addEventListener("click", fecharModal);
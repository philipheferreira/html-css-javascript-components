//pegando o modal
let modal = document.querySelector(".modal");

//pegando botão
let btnModal = document.querySelector(".meuBotao");


let abrirModal = () => {
	modal.style.display = "block";
}

btnModal.addEventListener("click", abrirModal);
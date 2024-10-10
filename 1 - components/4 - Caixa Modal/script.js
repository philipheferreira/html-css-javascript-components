
let modal = document.querySelector(".modal");

let btnModal = document.querySelector(".meuBotao");

let btnFechar = document.querySelector(".fechar");

let abrirModal = () => {
	modal.style.display = "block"; // define o block no display modal tornandoos visiveis
}

let fecharModal = () => {
	modal.style.display = "none"; // define none no display modal tornando invisiveis
}

btnModal.addEventListener("click", abrirModal);

btnFechar.addEventListener("click", fecharModal);

window.addEventListener("click", function(){
	if(event.target == modal){
		modal.style.display = "none";
	}
});
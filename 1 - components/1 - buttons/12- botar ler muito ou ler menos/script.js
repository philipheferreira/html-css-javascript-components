let pontinhos = document.querySelector(".pontinhos");
let maisTexto = document.querySelector(".mais");
let btnTexto = document.querySelector(".botao");

let aparecerEdesaparecerTexto = () => {
	if(pontinhos.style.display === "none"){
		pontinhos.style.display = "inline";
		btnTexto.innerHTML = "Ler mais";
		maisTexto.style.display = "none"
	}else{
		pontinhos.style.display = "none";
		btnTexto.innerHTML = "Ler menos";
		maisTexto.style.display = "inline";
	}
}

btnTexto.addEventListener("click", aparecerEdesaparecerTexto);
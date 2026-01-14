let botaoCaptura = document.querySelector('.botaoColetarInfoHTML');

let pegarInfo = () => {
	let textoNoHTML = document.querySelector('.infoHTML').textContent;
	alert(`O texto dentro do HTML e o seguinte: ${textoNoHTML}`)
}

botaoCaptura.addEventListener("click", pegarInfo);
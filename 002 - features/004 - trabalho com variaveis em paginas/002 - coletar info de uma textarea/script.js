let botaoEnviarTextArea = document.querySelector('.mostrarAreaDeTexto');

let mostrarConteudo = () => {
	let textoDigitado = document.querySelector('.campoTextoArea').value;

	alert(textoDigitado);
}

botaoEnviarTextArea.addEventListener("click", mostrarConteudo);
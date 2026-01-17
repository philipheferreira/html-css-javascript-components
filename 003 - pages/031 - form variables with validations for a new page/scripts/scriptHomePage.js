// espera o conteudo da pagina ser totalmente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

// tenta pegar os dados do sessionStorage usando a mesma chave que usamos para salvar
const dadosString = sessionStorage.getItem('dadosFormulario');


// faz a verificacao para ver se os dados realmente existem
if (dadosString) {
	const dados = JSON.parse(dadosString);

	document.querySelector('.dadosUsuario').innerHTML = `
		<h1>Ola, ${dados.primeiroNome} ${dados.ultimoNome}</h1>
		<p> <strong>Pais de Origem:</strong> ${dados.pais} </p>
		<p> <strong>Idade:</strong> ${dados.idade} </p>
		<p> <strong>Resumo:</strong> ${dados.resumo} </p>
	`



} else {
	document.querySelector(".dadosUsuario").innerHTML = '<p>Nenhum dado encontrado. Por favor preencha o <a href="../index.html">formulario</a> primeiro.</p>';
}

});
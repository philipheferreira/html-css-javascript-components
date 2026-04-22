let formularioAdicionarNovaPessoa = document.querySelector('.formularioAdicionarNovaPessoa');
let tabelaPessoasCorpo = document.querySelector('.tabelaPessoas tbody');
let mensagemVazia = document.querySelector('.mensagemTabelaVazia');

let criarNovaPessoaTabela = () => {

}


let adicionarNovaPessoaTabela = (nome, idade, cargo) => {

}

let removerPessoaDaTabela = (botao) => {

	// Encontra o elemento <tr> pai do botão clicado e o remove
    let linha = botao.closest('tr');
    linha.remove();

    // Se a tabela ficar vazia, mostrar a mensagem novamente
	if (tabelaPessoasCorpo.children.length === 0) {
		mensagemVazia.style.display = 'block';
	}
}

formularioAdicionarNovaPessoa.addEventListener('submit', criarNovaPessoaTabela());
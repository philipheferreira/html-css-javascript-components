let formularioAdicionarNovaPessoa = document.querySelector('.formularioAdicionarNovaPessoa');
let tabelaPessoasCorpo = document.querySelector('.tabelaPessoas tbody');
let mensagemVazia = document.querySelector('.mensagemTabelaVazia');

let dadosIniciais = [
	{nome: "Ana Silva Galvao", idade: 28, cargo: "Designer UI/UX"},
	{nome: "Ze Pereira da Silva", idade: 35, cargo: "Gerente de Projetos"},
	{nome: "Felipe Costa", idade: 41, cargo: "Desenvolvedor Frontend"}
]

window.onload = () => {
	dadosIniciais.forEach(pessoa => {
		adicionarNovaPessoaTabela(pessoa.nome, pessoa.idade, pessoa.cargo);
	})
}

let criarNovaPessoaTabela = (evento) => {
	// Impede o recarregamento da página (comportamento padrão do form)
    evento.preventDefault();

    // Capturar os valores dos campos no formulario
    let nomeNovaPessoa = document.querySelector('.novoNomeInput').value;
    let idadeNovaPessoa = document.querySelector('.novaIdadeInput').value;
    let cargoNovaPessoa = document.querySelector('.novoCargoInput').value;

    // criar uma nova linha na tabela chamando funcao
    adicionarNovaPessoaTabela(nomeNovaPessoa, idadeNovaPessoa, cargoNovaPessoa);

    // limpar o formulario apos adicionar
    formularioAdicionarNovaPessoa.reset();

    // Colocar o foco de volta no primeiro campo para facilitar o próximo cadastro
    document.querySelector('.novoNomeInput').focus();
}

// Função para criar e adicionar a linha
let adicionarNovaPessoaTabela = (nome, idade, cargo) => {

	// criar elemento
	let novaLinha = document.createElement('tr');

	// Inserir o HTML interno das células
	novaLinha.innerHTML = `
		<td>${nome}</td>
		<td>${idade}</td>
		<td>${cargo}</td>
		<td>
			<button class= "botaoDeletar" onclick="RemoverPessoaDaTabela(this)">Excluir</button>
		</td>
	`

	// adicionar a linha ao corpo da tabela
	tabelaPessoasCorpo.appendChild(novaLinha);

	// esconder a mensagem de "vazio" se ela estiver invisivel
	verificarTabelaSeVaziaOuPreenchida();

}

let RemoverPessoaDaTabela = (botao) => {

	// Encontra o elemento <tr> pai do botão clicado e o remove
    let linha = botao.closest('tr');
    linha.remove();

    // Se a tabela ficar vazia, mostrar a mensagem novamente
	verificarTabelaSeVaziaOuPreenchida();
}

// funcao verificar se a tabela esta vazia ou preenchida para mostrar mensagem vazia

let verificarTabelaSeVaziaOuPreenchida = () => {
	if(tabelaPessoasCorpo.children.length === 0) {
		mensagemVazia.style.display = 'block';
	} else {
		mensagemVazia.style.display = 'none'
	}
}

//Adicionar um "ouvinte de evento" para o envio do formulário
formularioAdicionarNovaPessoa.addEventListener('submit', criarNovaPessoaTabela);
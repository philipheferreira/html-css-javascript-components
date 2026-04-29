let formularioAdicionarNovaPessoa = document.querySelector('.formularioAdicionarNovaPessoa');
let tabelaPessoasCorpo = document.querySelector('.tabelaPessoas tbody');
let mensagemVazia = document.querySelector('.mensagemTabelaVazia');

// Seletores dos botões para mudar o texto/aparência
let botaoAdicionar = document.querySelector('.adicionar');
let botaoCancelar = document.querySelector('.botaoCancelar');

// Variável para guardar a referência da linha que estamos editando
let linhaEditando = null;

let dadosIniciais = [
	{nome: "Ana Silva Galvao", idade: 28, cargo: "Designer UI/UX"},
	{nome: "Ze Pereira da Silva", idade: 35, cargo: "Gerente de Projetos"},
	{nome: "Felipe Costa", idade: 41, cargo: "Desenvolvedor Frontend"}
]

window.onload = () => {
	dadosIniciais.forEach(pessoa => {
		/* Ficou confuso no inicio mas como */
		adicionarNovaPessoaTabela(pessoa.nome, pessoa.idade, pessoa.cargo);
	})
}

let criarNovaPessoaTabelaOuEditar = (evento) => {
	// Impede o recarregamento da página (comportamento padrão do form)
    evento.preventDefault();

    // Capturar os valores dos campos no formulario
    let nomeNovaPessoa = document.querySelector('.novoNomeInput').value;
    let idadeNovaPessoa = document.querySelector('.novaIdadeInput').value;
    let cargoNovaPessoa = document.querySelector('.novoCargoInput').value;

    if(linhaEditando) {
	    // --- MODO EDIÇÃO ---
	        
	    // Atualiza os textos dentro das células da linha selecionada
	    linhaEditando.querySelector('.nomePessoaNaTabela').innerText = nomeNovaPessoa;
	    linhaEditando.querySelector('.idadePessoaNaTabela').innerText = idadeNovaPessoa;
	    linhaEditando.querySelector('.cargoPessoaNaTabela').innerText = cargoNovaPessoa;

	    // Volta o estado normal (remove destaque, reseta botões)
	    cancelarEdicao();

    } else {

	    // --- MODO CRIACAO ---

	    // criar uma nova linha na tabela chamando funcao
	    adicionarNovaPessoaTabela(nomeNovaPessoa, idadeNovaPessoa, cargoNovaPessoa);

	    // limpar o formulario apos adicionar
	    formularioAdicionarNovaPessoa.reset();

	    // Colocar o foco de volta no primeiro campo para facilitar o próximo cadastro
	    document.querySelector('.novoNomeInput').focus();
    }
    
}


let adicionarNovaPessoaTabela = (nome, idade, cargo) => {

	// criar elemento
	let novaLinha = document.createElement('tr');

	// Inserir o HTML interno das células
	novaLinha.innerHTML = `
		<td class="nomePessoaNaTabela">${nome}</td>
        <td class="idadePessoaNaTabela">${idade}</td>
        <td class="cargoPessoaNaTabela">${cargo}</td>
		<td>
			<button class="botaoEditar" onclick="prepararEdicao(this)">Editar</button>
            <button class="botaoDeletar" onclick="removerPessoaDaTabela(this)">Excluir</button>
		</td>
	`

	// adicionar a nova linha ao corpo da tabela
	tabelaPessoasCorpo.appendChild(novaLinha);

	// esconder a mensagem de "vazio" se ela estiver invisivel
	verificarTabelaSeVaziaOuPreenchida();
}

let prepararEdicao = (botao) => {
	// dentro da tabela pega qual a informacao pelo botao que a linha pertence na tabela
	let linhaNaTabela = botao.closest('tr'); 

	linhaEditando = linhaNaTabela;

	// Pega os dados da linha e joga no formulario
	document.querySelector('.novoNomeInput').value = linhaNaTabela.querySelector('.nomePessoaNaTabela').innerText;
    document.querySelector('.novaIdadeInput').value = linhaNaTabela.querySelector('.idadePessoaNaTabela').innerText;
    document.querySelector('.novoCargoInput').value = linhaNaTabela.querySelector('.cargoPessoaNaTabela').innerText;

	// muda a aparencia do botao principal
    botaoAdicionar.innerText = "Salvar Alterações";
    botaoAdicionar.style.backgroundColor = "#f39c12"; // Laranja

    // Mostra o botão de cancelar
    botaoCancelar.style.display = "inline-block";

    // Destaca visualmente a linha na tabela
    linhaNaTabela.classList.add('linha-destacada');

    // Foca no campo nome
    document.querySelector('.novoNomeInput').focus();
}

let cancelarEdicao = () => {
	formularioAdicionarNovaPessoa.reset();
    
    // Limpa a referência da linha
    linhaEditando = null;

    // Volta o botão principal para "Adicionar pessoa"
    botaoAdicionar.innerText = "Adicionar pessoa";
    botaoAdicionar.style.backgroundColor = "#4a90e2"; // Azul original

    // Esconde o botão cancelar
    botaoCancelar.style.display = "none";

    // Remove o destaque de todas as linhas (caso tenha sobrado algum)
    let linhas = tabelaPessoasCorpo.querySelectorAll('tr');
    linhas.forEach(l => l.classList.remove('linha-destacada'));
}

let removerPessoaDaTabela = (botao) => {

	// Encontra o elemento <tr> pai do botão clicado e o remove
    let linha = botao.closest('tr');

    /* Caso a linha e a linhaEditando sejam a mesma significa que
    o valor selecionado para deletar esta com a funcionalidade editando em aberto,
    Então a operação será cancelada antes de fazer qualquer coisa */
    if(linha === linhaEditando){
    	cancelarEdicao(); 
    }

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

botaoCancelar.addEventListener('click', cancelarEdicao);

formularioAdicionarNovaPessoa.addEventListener('submit', criarNovaPessoaTabelaOuEditar);
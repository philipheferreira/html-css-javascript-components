	let id1 = document.querySelector(".campoID1");
	let nome1 = document.querySelector(".campoNome1");
	let preco1 = document.querySelector(".campoPreco1");

	let id2 = document.querySelector(".campoID2");
	let nome2 = document.querySelector(".campoNome2");
	let preco2 = document.querySelector(".campoPreco2");

	let id3 = document.querySelector(".campoID3");
	let nome3 = document.querySelector(".campoNome3");
	let preco3 = document.querySelector(".campoPreco3");

	const simpleAPIUrl = 'https://localhost:7122/api/Produtos';

// chamada para o get de todos os produtos
	const getTodosProdutos = async () => {
		try {
			const responseTodosProdutos = await fetch(simpleAPIUrl); // pega a url e direciona para o caminho de todos os produtos
			const Todosprodutos = await responseTodosProdutos.json(); // converte para info json
			return Todosprodutos;

		} catch(err){
			console.log(err);
		}
	}


// faz o repasse para os campos no front
	let repasseProdutos = async () => {
		let chamadaTodosProdutos = await getTodosProdutos();

		id1.innerHTML = chamadaTodosProdutos[0].id;
		nome1.innerHTML = chamadaTodosProdutos[0].nome;
		preco1.innerHTML = chamadaTodosProdutos[0].preco;

		id2.innerHTML = chamadaTodosProdutos[1].id;
		nome2.innerHTML = chamadaTodosProdutos[1].nome;
		preco2.innerHTML = chamadaTodosProdutos[1].preco;

		id3.innerHTML = chamadaTodosProdutos[2].id;
		nome3.innerHTML = chamadaTodosProdutos[2].nome;
		preco3.innerHTML = chamadaTodosProdutos[2].preco;

		console.log(chamadaTodosProdutos);

	}



// Chamada final para rodar tudo quando abre a aba
	(async () => {
		repasseProdutos();

	})()



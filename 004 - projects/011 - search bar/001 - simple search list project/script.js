var nomes = [ "Harry", "Ross", "Bruce", 
			  "Cook", "Carolyn", "Morgan", 
			  "Albert", "Walker", "Randy", 
			  "Reed", "Larry", "Barnes", 
			  "Lois", "Wilson", "Jesse", 
			  "Campbell", "Ernest", "Rogers", 
			  "Theresa", "Partterson", "Henry", 
			  "Simmons", "Michelle", "Perry", 
			  "Frank", "Butler", "Shirley" ];


let outputdiv = document.querySelector(".output");

let campoDeBusca = document.querySelector(".barraDeBuscador");


let htmlstring = nomes.map(item => {
	return `<h3> ${item}</h3>`
}).join('')

outputdiv.innerHTML = htmlstring

let buscarNome = (e) => {

	var item = e.target.value;
	var listaDeNomesPossiveisPelaBuscaAposDigitarLetras = [];
	// console.log(e.target.value) // atualiza toda vez que termina de digitar por caracter
	nomes.map( nome => {
		if (nome.toLowerCase().includes(item.toLowerCase())){
			listaDeNomesPossiveisPelaBuscaAposDigitarLetras.push(nome);
			//console.log(nome) // Mostra todas as combinacoes com as letras atuais
		} // toda letra sera minuscula
	})
	console.log(listaDeNomesPossiveisPelaBuscaAposDigitarLetras)



	let htmlstring = listaDeNomesPossiveisPelaBuscaAposDigitarLetras.map(item => {
		return `<h3> ${item}</h3>`
	}).join('')

	outputdiv.innerHTML = htmlstring;

}

campoDeBusca.addEventListener('keyup', buscarNome)
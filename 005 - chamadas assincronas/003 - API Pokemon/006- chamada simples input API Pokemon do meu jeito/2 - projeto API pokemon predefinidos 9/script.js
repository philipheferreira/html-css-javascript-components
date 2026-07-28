//definição de variaveis que vão receber as infos do pokemon
let pokemonImagem1 = document.querySelector(".imagem1");
let pokemonNome1 = document.querySelector(".nome1");
let pokemonId1 = document.querySelector(".Id1");
let pokemonTipo1 = document.querySelector(".tipo1");
let pokemonAltura1 = document.querySelector(".altura1");
let pokemonPeso1 = document.querySelector(".peso1");

let pokemonImagem2 = document.querySelector(".imagem2");
let pokemonNome2 = document.querySelector(".nome2");
let pokemonId2 = document.querySelector(".Id2");
let pokemonTipo2 = document.querySelector(".tipo2");
let pokemonAltura2 = document.querySelector(".altura2");
let pokemonPeso2 = document.querySelector(".peso2");

let pokemonImagem3 = document.querySelector(".imagem3");
let pokemonNome3 = document.querySelector(".nome3");
let pokemonId3 = document.querySelector(".Id3");
let pokemonTipo3 = document.querySelector(".tipo3");
let pokemonAltura3 = document.querySelector(".altura3");
let pokemonPeso3 = document.querySelector(".peso3");

let pokemonImagem4 = document.querySelector(".imagem4");
let pokemonNome4 = document.querySelector(".nome4");
let pokemonId4 = document.querySelector(".Id4");
let pokemonTipo4 = document.querySelector(".tipo4");
let pokemonAltura4 = document.querySelector(".altura4");
let pokemonPeso4 = document.querySelector(".peso4");

let pokemonImagem5 = document.querySelector(".imagem5");
let pokemonNome5 = document.querySelector(".nome5");
let pokemonId5 = document.querySelector(".Id5");
let pokemonTipo5 = document.querySelector(".tipo5");
let pokemonAltura5 = document.querySelector(".altura5");
let pokemonPeso5 = document.querySelector(".peso5");

let pokemonImagem6 = document.querySelector(".imagem6");
let pokemonNome6 = document.querySelector(".nome6");
let pokemonId6 = document.querySelector(".Id6");
let pokemonTipo6 = document.querySelector(".tipo6");
let pokemonAltura6 = document.querySelector(".altura6");
let pokemonPeso6 = document.querySelector(".peso6");

let pokemonImagem7 = document.querySelector(".imagem7");
let pokemonNome7 = document.querySelector(".nome7");
let pokemonId7 = document.querySelector(".Id7");
let pokemonTipo7 = document.querySelector(".tipo7");
let pokemonAltura7 = document.querySelector(".altura7");
let pokemonPeso7 = document.querySelector(".peso7");

let pokemonImagem8 = document.querySelector(".imagem8");
let pokemonNome8 = document.querySelector(".nome8");
let pokemonId8 = document.querySelector(".Id8");
let pokemonTipo8 = document.querySelector(".tipo8");
let pokemonAltura8 = document.querySelector(".altura8");
let pokemonPeso8 = document.querySelector(".peso8");

let pokemonImagem9 = document.querySelector(".imagem9");
let pokemonNome9 = document.querySelector(".nome9");
let pokemonId9 = document.querySelector(".Id9");
let pokemonTipo9 = document.querySelector(".tipo9");
let pokemonAltura9 = document.querySelector(".altura9");
let pokemonPeso9 = document.querySelector(".peso9");


const getPokemonUrl = 'https://pokeapi.co/api/v2/' //url da API

// chamada geral da API
const getPokemon = async (id) => {
	try {
		const responsePokemon = await fetch(getPokemonUrl + "pokemon/" + id); // pega a url e direciona a id pokemon
		const pokemon = await responsePokemon.json(); // converte para info json
		return pokemon; // retorna pokemon pesquisado

	} catch(err){
		console.log(err);
	}
}

// chamada para pegar a info de tipo de pokemon
const getPokemonTipo = async (numeroTipo) => {
	try {
		const pokemonTipo = await fetch(getPokemonUrl+ "type/" + numeroTipo);
		const tipo = await pokemonTipo.json();
		return tipo; // retorna pokemon pesquisado

	} catch(err){
		console.log(err);
	}
}


// função que faz os repasses das informações da API para as variaveis no html
let fecthPokemonInformacoes = (chamadaPokemonAPI, chamadaPokemonTipo, pokemonNome, pokemonId, pokemonTipo, pokemonAltura, pokemonPeso) => {

	pokemonNome.innerHTML ="- " + chamadaPokemonAPI.name; // repassa nome
	pokemonId.innerHTML = chamadaPokemonAPI.id;
	pokemonTipo.innerHTML = "Tipo: " + chamadaPokemonTipo.name;
	pokemonAltura.innerHTML ="Altura: " + chamadaPokemonAPI.height;
	pokemonPeso.innerHTML = "Peso: " + chamadaPokemonAPI.weight;
	
}


//informações que serão repassadas para fazer as buscas na API
let idPokemon1 = 1;
let idPokemon2 = 2;
let idPokemon3 = 3;
let idPokemon4 = 4;
let idPokemon5 = 5;
let idPokemon6 = 6;
let idPokemon7 = 7;
let idPokemon8 = 8;
let idPokemon9 = 9;
let numeroTipoPokemon1 = 12; // grama
let numeroTipoPokemon2 = 10; // fogo
let numeroTipoPokemon3 = 11; // agua

// definição de id para chamadas e chamadas de todas as funções dentro da chamada assincrona
(async () => {
	let chamadaPokemonAPI1 = await getPokemon(idPokemon1);
	let chamadaPokemonTipo1 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI1, chamadaPokemonTipo1, pokemonNome1, pokemonId1, pokemonTipo1, pokemonAltura1, pokemonPeso1);
	pokemonImagem1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon1 + '.png';

	let chamadaPokemonAPI2 = await getPokemon(idPokemon2);
	let chamadaPokemonTipo2 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI2, chamadaPokemonTipo2, pokemonNome2, pokemonId2, pokemonTipo2, pokemonAltura2, pokemonPeso2);
	pokemonImagem2.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon2 + '.png';

	let chamadaPokemonAPI3 = await getPokemon(idPokemon3);
	let chamadaPokemonTipo3 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI3, chamadaPokemonTipo3, pokemonNome3, pokemonId3, pokemonTipo3, pokemonAltura3, pokemonPeso3);
	pokemonImagem3.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon3 + '.png';

	let chamadaPokemonAPI4 = await getPokemon(idPokemon4);
	let chamadaPokemonTipo4 = await getPokemonTipo(numeroTipoPokemon2);
	fecthPokemonInformacoes(chamadaPokemonAPI4, chamadaPokemonTipo4, pokemonNome4, pokemonId4, pokemonTipo4, pokemonAltura4, pokemonPeso4);
	pokemonImagem4.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon4 + '.png';

	let chamadaPokemonAPI5 = await getPokemon(idPokemon5);
	let chamadaPokemonTipo5 = await getPokemonTipo(numeroTipoPokemon2);
	fecthPokemonInformacoes(chamadaPokemonAPI5, chamadaPokemonTipo5, pokemonNome5, pokemonId5, pokemonTipo5, pokemonAltura5, pokemonPeso5);
	pokemonImagem5.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon5 + '.png';

	let chamadaPokemonAPI6 = await getPokemon(idPokemon6);
	let chamadaPokemonTipo6 = await getPokemonTipo(numeroTipoPokemon2);
	fecthPokemonInformacoes(chamadaPokemonAPI6, chamadaPokemonTipo6, pokemonNome6, pokemonId6, pokemonTipo6, pokemonAltura6, pokemonPeso6);
	pokemonImagem6.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon6 + '.png';

		let chamadaPokemonAPI7 = await getPokemon(idPokemon7);
	let chamadaPokemonTipo7 = await getPokemonTipo(numeroTipoPokemon3);
	fecthPokemonInformacoes(chamadaPokemonAPI7, chamadaPokemonTipo7, pokemonNome7, pokemonId7, pokemonTipo7, pokemonAltura7, pokemonPeso7);
	pokemonImagem7.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon7 + '.png';

	let chamadaPokemonAPI8 = await getPokemon(idPokemon8);
	let chamadaPokemonTipo8 = await getPokemonTipo(numeroTipoPokemon3);
	fecthPokemonInformacoes(chamadaPokemonAPI8, chamadaPokemonTipo8, pokemonNome8, pokemonId8, pokemonTipo8, pokemonAltura8, pokemonPeso8);
	pokemonImagem8.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon8 + '.png';

	let chamadaPokemonAPI9 = await getPokemon(idPokemon9);
	let chamadaPokemonTipo9 = await getPokemonTipo(numeroTipoPokemon3);
	fecthPokemonInformacoes(chamadaPokemonAPI9, chamadaPokemonTipo9, pokemonNome9, pokemonId9, pokemonTipo9, pokemonAltura9, pokemonPeso9);
	pokemonImagem9.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon9 + '.png';

})()


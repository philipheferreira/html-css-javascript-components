let pokemonImagem1 = document.querySelector(".imagem1");
let pokemonNome1 = document.querySelector(".nome1");
let pokemonId1 = document.querySelector(".Id1");
let pokemonTipo1 = document.querySelector(".tipo1");
let pokemonAltura1 = document.querySelector(".altura1");
let pokemonPeso1 = document.querySelector(".peso1");

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
let numeroTipoPokemon1 = 12; // grama

// definição de id para chamadas e chamadas de todas as funções dentro da chamada assincrona
(async () => {
	let chamadaPokemonAPI1 = await getPokemon(idPokemon1);
	let chamadaPokemonTipo1 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI1, chamadaPokemonTipo1, pokemonNome1, pokemonId1, pokemonTipo1, pokemonAltura1, pokemonPeso1);
	pokemonImagem1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon1 + '.png';

})()
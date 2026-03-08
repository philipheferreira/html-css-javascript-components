/* O map permite selecionar uma fila de array especifica dentro de uma lista ou arrays*/

const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]

let mapeadoListaDeItensPorNome = itens.map((item) => {
	return item.nome;
})

let mapeadoListaDeItensPorPreco = itens.map((item) => {
	return item.preco;
})

console.log("Lista normal:");
console.log(itens);

console.log("Lista de Nomes mapeados pelo metodo map:");
console.log(mapeadoListaDeItensPorNome);

console.log("Lista de Precos mapeados pelo metodo map:");
console.log(mapeadoListaDeItensPorPreco);

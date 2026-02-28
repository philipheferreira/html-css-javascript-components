// Dentro do array se some encontrar algum item que atende a selecao entao ele retorna true

const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]

let itensBaratos = itens.some((item) => {
	return item.preco <= 100
})

let itensGratuitos = itens.some((item) => {
	return item.preco <= 0
})

console.log(itensBaratos)

console.log(itensGratuitos)
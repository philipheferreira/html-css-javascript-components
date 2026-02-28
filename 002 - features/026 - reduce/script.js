const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]

let total = itens.reduce((somaTotal, item) => {
	return item.preco + somaTotal
}, 0)

console.log(total)



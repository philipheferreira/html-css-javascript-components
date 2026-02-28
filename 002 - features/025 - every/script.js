// Verifica todos os itens e se eles sao menores, maiores ou iguais. Se algum deles nao for retorna falso

const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]

let todosOsItensSaoMenoresQueMil = itens.every((item) => {
	return item.preco <= 1000
})

let todosOsItensSaoMenoresQueCem = itens.every((item) => {
	return item.preco <= 100
})

console.log(todosOsItensSaoMenoresQueMil)

console.log(todosOsItensSaoMenoresQueCem)
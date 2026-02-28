//funcao forEach pega todos os itens individualmente gerando cada um eles de forma unitaria

const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]

console.log("Funcao forEach que pega todos os nomes")

itens.forEach((item) => {
	console.log(item.nome)
})

console.log("Funcao forEach que pega todos os precos")

itens.forEach((item) => {
	console.log(item.preco)
})
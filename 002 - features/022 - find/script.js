/* O objetivo do metodo find e retornar o primeiro item que corresponde ao valor definido 
no momento que realizar a busca  */

const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]



// forma que eu uso com arrow function
let encontrarItem = itens.find((item) => {
	return item.nome === 'Livro'
})

console.log(encontrarItem);
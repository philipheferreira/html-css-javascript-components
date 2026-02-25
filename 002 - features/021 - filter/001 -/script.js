// uma constante de array com objetos registrados
const itens = [ 
	{nome: 'Bicicleta', preco: 100 },
	{nome: 'TV', preco: 200 },
	{nome: 'Album', preco: 10 },
	{nome: 'Livro', preco: 5 },
	{nome: 'telefone', preco: 500 },
	{nome: 'Computador', preco: 1000 },
	{nome: 'teclado', preco: 25 }
]

let filtroListaDeItens = itens.filter((item) => {
	return item.preco <= 100;
})

console.log("Lista de itens gerais: ");
console.log(itens);
console.log("Lista de itens apos o filtro: ");
console.log(filtroListaDeItens);
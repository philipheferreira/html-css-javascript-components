
// ### Comandos para salvar itens ### 

// salvando um dado no localStorage. O nome vai ser salvo como key e o valor é a Maria
localStorage.setItem('nome', 'Maria');

// salvando um, numero (ele sera convertido para string automaticamente)
localStorage.setItem('idade', 30);


// Salvando um objeto (precisa usar JSON.stringify)
const usuario = {
	id: 1,
	nome: 'philipongas',
	email: 'philipongas@email.com'
};
localStorage.setItem('usuario', JSON.stringify(usuario));


// ### Comandos para recuperar itens ###

// recuperar o nome
const nomesalvo = localStorage.getItem('nome');
console.log(nomesalvo);

// recuperar a idade (retorna como string)
const idadeSalva = localStorage.getItem('idade'); //retorna "30"
console.log(Number(idadeSalva) + 1); // precisa converter para numeros se for fazer calculos

// recuperando o objeto (precisa usar JSON.parse)
const usuarioSalvo = localStorage.getItem('usuario');
const objetoUsuario = JSON.parse(usuarioSalvo); // Converte a string de volta para objeto
console.log(objetoUsuario); // Retorna 'Carlos'
console.log(objetoUsuario.nome)


// ### Para apagar um item especifico ###

// apaga o teim com a chave "idade"
localStorage.removeItem('idade');


// ### Para apagar tudo do seu site no localStorage ###

// CUIDADO: Isso apagara todos os dados armazenados pelo seu site!
// localStorage.clear();
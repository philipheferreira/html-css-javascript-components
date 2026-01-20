
// Suponha que você esteja em um formulário de cadastro de várias etapas.

// Na primeira página do formulário, salvamos o nome do usuário.
sessionStorage.setItem('nome', 'Ana');

// Salvando um numero (ele sera convertido para string automaticamente);
sessionStorage.setItem('idade', 20);

// Salvando um objeto (precisa usar JSON.stringify)
const usuario = {
	id: 1,
	nome: 'nomeGenerico',
	email: 'usuario@email.com'
};

sessionStorage.setItem('usuario', JSON.stringify(usuario)); // converte em arquivo JSON para enviar

// Recuperar o nome
const nomeSalvo = sessionStorage.getItem('nome');
console.log('Bem-vinda de volta, ' + nomeSalvo);

// recuperar a idade (retorna como string)
const idadeSalva = sessionStorage.getItem('idade');
console.log(Number(idadeSalva)); // precisa converter para numeros se for fazer calculos

// recuperando o objeto (precisa usar JSON.parse)
const usuarioSalvo = sessionStorage.getItem('usuario');
const objetoUsuario = JSON.parse(usuarioSalvo); // converte a string de volta para objeto
console.log(objetoUsuario);
console.log(objetoUsuario.id);

// ### Para apagar um item especifico ###

// Apaga o item com a chave "idade"
sessionStorage.removeItem('idade');


// ### Para apagar tudo do seu site no sessionStorage ###

// CUIDADO: Isso apagara todos os dados armazenados pelo seu site!
// sessionStorage.clean();

// Suponha que você esteja em um formulário de cadastro de várias etapas.

// Na primeira página do formulário, salvamos o nome do usuário.
sessionStorage.setItem('nome', 'Ana');

// Na segunda página, recuperamos o nome.
const nomeSalvo = sessionStorage.getItem('nome');
console.log('Bem-vinda de volta, ' + nomeSalvo); // "Bem-vinda de volta, Ana"

// Também salvamos em qual etapa o usuário está.
sessionStorage.setItem('etapaAtual', '2');

// Se o usuário fechar esta aba, todos esses dados ('nome' e 'etapaAtual') serão apagados.
// Pega o elemento de referência
const elemento = document.getElementById('meuElemento');

// HTML que queremos adicionar
const novoHTML = '<p>Eu fui adicionado ANTES do elemento, sou uma tag irma criada usando o insertAdjacentHTML.</p>';

// Insere na posição 'beforebegin'
elemento.insertAdjacentHTML('beforebegin', novoHTML);
// Pega o elemento do parágrafo pelo ID
const paragrafo = document.querySelector('.meu-paragrafo');

// Usa textContent para LER o conteúdo
const textoDoParagrafo = paragrafo.textContent;

console.log(textoDoParagrafo);
// Saída: "Este é um texto de exemplo."
// Note que a tag <strong> foi removida, mas seu texto permaneceu.
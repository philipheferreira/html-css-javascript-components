function mostrarTexto() {
  // Pega o elemento pelo ID
  let elemento = document.getElementById('meuParagrafo');

  // Pega APENAS o texto visível
  let textoVisivel = elemento.innerText;

  // Exibe no console do navegador
  console.log(textoVisivel);
}
function alterarTexto() {
  let elemento = document.getElementById('meuParagrafo');

  // Substitui todo o conteúdo do div por este novo texto
  elemento.innerText = "O texto foi alterado com <b>innerText</b>!";
}
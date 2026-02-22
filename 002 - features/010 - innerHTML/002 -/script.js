function mudarConteudo() {
  const elemento = document.getElementById('minhaCaixa');
  
  // Substituímos todo o conteúdo HTML interno
  elemento.innerHTML = `
    <h2>Novo Título!</h2>
    <p>Este é um novo parágrafo com um <a href="#">link</a>.</p>
  `;
}
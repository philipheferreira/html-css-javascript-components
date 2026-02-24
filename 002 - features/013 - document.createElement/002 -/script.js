// Pega o elemento do parágrafo
const paragrafo = document.querySelector('.meu-paragrafo');

// Usa textContent para ESCREVER um novo conteúdo
paragrafo.textContent = 'Este é o novo texto, sem formatação.';

// O HTML agora será renderizado como:
// <p id="meu-paragrafo">Este é o novo texto, sem formatação.</p>
// Note que a tag <strong> original foi completamente removida.
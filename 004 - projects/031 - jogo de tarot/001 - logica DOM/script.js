/**
 * Lógica do Jogo de Tarô - Versão Funcional Refatorada
 */

// DADOS DAS CARTAS
const tarotData = [
    { id: 0, name: "O Louco", meaning: "Novos começos, aventuras e um salto de fé.", imagem: "img/0-oLouco.webp" },
    { id: 1, name: "O Mago", meaning: "Manifestação, poder criativo e habilidade.", imagem: "img/1-oMagico.webp" },
    { id: 2, name: "A Sacerdotisa", meaning: "Intuição, mistério e sabedoria interior.", imagem: "img/2-aAltaSacerdotisa.jpg" },
    { id: 3, name: "A Imperatriz", meaning: "Fertilidade, criatividade e abundância.", imagem: "img/3-aImperatriz.webp" },
    { id: 4, name: "O Imperador", meaning: "Estrutura, autoridade e estabilidade.", imagem: "img/4-oImperador.webp" },
    { id: 5, name: "O Hierofante", meaning: "Tradição, conformidade e moralidade.", imagem: "img/5-oHierofante.webp" },
    { id: 6, name: "Os Enamorados", meaning: "Amor, harmonia e escolhas de valor.", imagem: "img/6-osAmantes.webp" },
    { id: 7, name: "O Carro", meaning: "Controle, vontade e vitória.", imagem: "img/7-aCarruagem.jpg" },
    { id: 8, name: "A Força", meaning: "Coragem, persuasão e compaixão.", imagem: "img/8-Forca.webp" },
    { id: 9, name: "O Eremita", meaning: "Busca da alma e introspecção.", imagem: "img/9-oEremita.webp" },
    { id: 10, name: "Roda da Fortuna", meaning: "Ciclos de vida, destino e viradas.", imagem: "img/10-rodaDaFortuna.webp" },
    { id: 11, name: "A Justiça", meaning: "Justiça, imparcialidade e verdade.", imagem: "img/11-justica.webp" },
    { id: 12, name: "O Enforcado", meaning: "Pausa, rendição e novas perspectivas.", imagem: "img/12-oEnforcado.png" },
    { id: 13, name: "A Morte", meaning: "Fim de um ciclo e transformação.", imagem: "img/13-morte.webp" },
    { id: 14, name: "A Temperança", meaning: "Equilíbrio, moderação e propósito.", imagem: "img/14-temperanca.webp" },
    { id: 15, name: "O Diabo", meaning: "Vício, materialismo e apego.", imagem: "img/15-oDiabo.webp" },
    { id: 16, name: "A Torre", meaning: "Mudança repentina e revelação.", imagem: "img/16-aTorre.webp" },
    { id: 17, name: "A Estrela", meaning: "Esperança, fé e espiritualidade.", imagem: "img/17-aEstrela.webp" },
    { id: 18, name: "A Lua", meaning: "Ilusão, medo e o inconsciente.", imagem: "img/18-aLua.webp" },
    { id: 19, name: "O Sol", meaning: "Positividade, sucesso e vitalidade.", imagem: "img/19-oSol.jpg" },
    { id: 20, name: "O Julgamento", meaning: "Renascimento, chamado interior e perdão.", imagem: "img/20-julgamento.webp" },
    { id: 21, name: "O Mundo", meaning: "Conclusão, integração e realização.", imagem: "img/21-oMundo.webp" }
];

let botaoFecharModal = document.querySelector('.fecharModal'); // Supondo que exista uma classe assim no HTML
let botaoResetarJogo = document.querySelector(".botaoResetarJogo");

// Referências do DOM (Elementos HTML)
const elements = {
    startScreen: document.querySelector('#telaDeInicio'),
    gameScreen: document.querySelector('#telaDeJogo'),
    cardContainer: document.querySelector('#card-container'),
    modal: document.querySelector('#result-modal'),
    modalImg: document.querySelector('#modal-img'),
    modalTitle: document.querySelector('#tituloModal'),
    modalDesc: document.querySelector('#descricaoModal'),
    btnStart: document.querySelector('.botaoIniciarJogoTarot')
};

// Função de Embaralhar (Lógica pura)
let embaralhar = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Função Principal: Iniciar o Jogo
let iniciarJogoTarot = () => {
    // Troca de telas
    if(elements.startScreen) elements.startScreen.classList.remove('active'); // Removido o .remove('active') incorreto
    if(elements.startScreen) elements.startScreen.style.display = 'none'; // Ou remova a classe que mostra
    
    elements.gameScreen.classList.add('active');
    
    renderizarCartas();
}

// Função: Criar as cartas na tela
let renderizarCartas = () => {
    elements.cardContainer.innerHTML = '';
    
    const shuffledDeck = embaralhar([...tarotData]);
    const selectedCards = shuffledDeck.slice(0, 12); // Seleciona 12 cartas

    selectedCards.forEach((card, index) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper';
        
        // Animação de entrada
        cardWrapper.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        cardWrapper.style.opacity = '0'; 

        const imgUrl = card.imagem;
        
        cardWrapper.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${imgUrl}" alt="${card.name}" onerror="this.src='https://picsum.photos/seed/erro/200/300'">
                    <span>${card.name}</span>
                </div>
                <div class="card-back"></div>
            </div>
        `;

        // Passamos os dados diretamente para a função selecionarCarta
        cardWrapper.onclick = () => selecionarCarta(cardWrapper, card, imgUrl);

        elements.cardContainer.appendChild(cardWrapper);
    });
}

// Função: Ao clicar em uma carta
let selecionarCarta = (selectedElement, cardData, imgUrl) => {
    selectedElement.classList.add('flipped');

    // Escurecer as outras cartas
    const allCards = document.querySelectorAll('.card-wrapper');
    allCards.forEach(card => {
        if (card !== selectedElement) {
            card.classList.add('dimmed');
        }
    });

    setTimeout(() => {
        mostrarResultado(cardData, imgUrl);
    }, 800);
}

// Função: Mostrar o modal com o resultado
let mostrarResultado = (cardData, imgUrl) => {
    elements.modalImg.src = imgUrl;
    elements.modalTitle.innerText = cardData.name;
    elements.modalDesc.innerText = cardData.meaning;
    elements.modal.classList.add('open');
}

let fecharModal = () => {
    elements.modal.classList.remove('open');
}

let resetarJogo = () => {
    elements.modal.classList.remove('open');
    renderizarCartas();
}

// Inicialização dos Eventos
elements.btnStart.addEventListener("click", iniciarJogoTarot);

botaoFecharModal.addEventListener('click', fecharModal);

botaoResetarJogo.addEventListener("click", resetarJogo);

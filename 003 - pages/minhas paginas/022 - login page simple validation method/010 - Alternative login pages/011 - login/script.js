// --- Controle do Modal ---
const modal = document.getElementById('authModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeButton = document.querySelector('.close-button');


// --- Controle das Abas ---
const tabButtons = document.querySelectorAll('.tab-button');
const formPanels = document.querySelectorAll('.form-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e painéis
        tabButtons.forEach(btn => btn.classList.remove('active'));
        formPanels.forEach(panel => panel.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado e ao painel correspondente
        button.classList.add('active');
        const targetTab = button.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
    });
});


// --- Validação Simples dos Formulários ---
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    alert(`Login de Simulação:\nEmail: ${email}\n(Em um app real, você faria uma requisição para o servidor aqui.)`);
    modal.classList.remove('show'); // Fecha o modal após o "login"
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    alert(`Cadastro de Simulação:\nNome: ${name}\nEmail: ${email}\n(Em um app real, você faria uma requisição para o servidor aqui.)`);
    modal.classList.remove('show'); // Fecha o modal após o "cadastro"
});
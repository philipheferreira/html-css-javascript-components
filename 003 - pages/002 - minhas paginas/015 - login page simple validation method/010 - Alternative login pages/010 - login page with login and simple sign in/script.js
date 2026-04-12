const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Adiciona a classe 'right-panel-active' ao container para ativar a animação
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Remove a classe 'right-panel-active' para voltar ao formulário de login
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// --- Validação Simples dos Formulários (Opcional, mas bom para demonstração) ---

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        // Simulação de um login bem-sucedido
        alert(`Login bem-sucedido! (Simulação)\nEmail: ${email}`);
        // Aqui você normalmente faria uma requisição para o seu servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        // Simulação de um cadastro bem-sucedido
        alert(`Cadastro realizado com sucesso! (Simulação)\nNome: ${name}\nEmail: ${email}`);
        // Aqui você normalmente faria uma requisição para o seu servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
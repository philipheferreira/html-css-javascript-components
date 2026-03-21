// Espera o documento HTML ser completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Pega os elementos do HTML que vamos precisar manipular
    const loginForm = document.getElementById('login-form');
    const loginArea = document.getElementById('login-area');
    const contentArea = document.getElementById('content-area');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');
    const logoutBtn = document.getElementById('logout-btn');

    // --- DADOS DE ACESSO (SIMULADOS) ---
    // Em um projeto real, isso NUNCA estaria aqui!
    const CORRECT_USER = "chef";
    const CORRECT_PASS = "1234";
    // ------------------------------------

    // Adiciona um "ouvinte" de evento para o envio do formulário
    loginForm.addEventListener('submit', (event) => {
        // Impede que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Pega os valores digitados pelo usuário
        const enteredUser = usernameInput.value;
        const enteredPass = passwordInput.value;

        // Verifica se o usuário e a senha estão corretos
        if (enteredUser === CORRECT_USER && enteredPass === CORRECT_PASS) {
            // Se estiverem corretos:
            messageElement.textContent = ''; // Limpa qualquer mensagem de erro
            loginArea.style.display = 'none'; // Esconde a área de login
            contentArea.style.display = 'block'; // Mostra a área de conteúdo
        } else {
            // Se estiverem incorretos:
            messageElement.textContent = 'Usuário ou senha incorretos. Tente novamente!';
            messageElement.style.color = 'red'; // Garante que a mensagem seja vermelha
        }
    });

    // Adiciona um ouvinte para o botão de "Sair"
    logoutBtn.addEventListener('click', () => {
        // Limpa os campos do formulário
        usernameInput.value = '';
        passwordInput.value = '';
        messageElement.textContent = '';

        // Esconde o conteúdo e mostra o login novamente
        contentArea.style.display = 'none';
        loginArea.style.display = 'block';
    });

});
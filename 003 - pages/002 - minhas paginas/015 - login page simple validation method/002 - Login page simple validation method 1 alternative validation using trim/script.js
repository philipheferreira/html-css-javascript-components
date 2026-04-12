// Seleciona o FORMULÁRIO, não apenas o botão. Isso é mais robusto.
const formLogin = document.querySelector('.form-login');

// Adiciona o ouvinte de evento ao 'submit' do formulário.
// Isso funciona tanto para o clique no botão quanto para pressionar "Enter".
formLogin.addEventListener('submit', function(event) {
    
    // 1. Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // 2. Seleciona os elementos e pega seus valores
    const loginInput = document.querySelector('.login');
    const senhaInput = document.querySelector('.senha');
    let login = loginInput.value;
    let senha = senhaInput.value;

    // 3. Limpa as validações anteriores (b prática!)
    loginInput.classList.remove('erro-validacao');
    senhaInput.classList.remove('erro-validacao');


    // POR UTILIZAR O TRIM TEM GERADO UM PROBLEMA DE FUNCIONALIDADES DE REPETICAO COM CHAMADA DUPLA SE OS DOIS ESTIVEREM FUNCIONANDO
    // 4. Lógica de validação corrigida
    // Usamos .trim() para remover espaços em branco no início e no fim.
    // Um valor vazio ou com apenas espaços é tratado como inválido.
    if (login.trim() === '' || senha.trim() === '') {
        
        if (login.trim() === '') {
            alert('Por favor, preencha o campo login que esta vazio.');
            loginInput.classList.add('erro-validacao');
        }
        if (senha.trim() === '') {
            alert('Por favor, preencha o campo senha que esta vazio.');
            senhaInput.classList.add('erro-validacao');
        }
        return; // Interrompe a função aqui
    }

    // 5. Verificação de login e senha
    if (login === 'admin' && senha === 'admin') {
        alert('Bem vindo usuário admin, você logou com sucesso.');
        // Redireciona para a página home
        window.location.href = 'pages/home.html';
    } else {
        alert('Usuário ou senha incorretos.');
        // Opcional: adicionar classe de erro nos campos se a senha estiver errada
        loginInput.classList.add('erro-validacao');
        senhaInput.classList.add('erro-validacao');
    }
});
// ==============================
// SCRIPT - Sabor & Arte - Receitas
// Com sistema de autenticacao
// ==============================

document.addEventListener('DOMContentLoaded', function() {

    // ==============================
    // SISTEMA DE AUTENTICACAO
    // ==============================

    var authScreen = document.getElementById('authScreen');
    var siteContent = document.getElementById('siteContent');
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var forgotForm = document.getElementById('forgotForm');
    var authTabs = document.querySelectorAll('.auth-tab');
    var togglePasswordBtns = document.querySelectorAll('.toggle-password');
    var forgotLink = document.getElementById('forgotLink');
    var backToLogin = document.getElementById('backToLogin');
    var regPasswordInput = document.getElementById('regPassword');
    var navLogout = document.getElementById('navLogout');
    var navUserName = document.getElementById('navUserName');

    // --- Chave do localStorage para usuarios e sessao ---
    var USERS_KEY = 'saborArte_usuarios';
    var SESSION_KEY = 'saborArte_sessao';

    // --- Inicializa usuario admin padrao (se nao existir nenhum) ---
    function initDefaultUser() {
        var users = getUsers();
        if (users.length === 0) {
            users.push({
                nome: 'Philiphe Ferreira',
                email: 'philipheferreira@gmail.com',
                senha: hashSenha('admin123'),
                dataCadastro: new Date().toISOString()
            });
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        }
    }

    // --- Pega lista de usuarios ---
    function getUsers() {
        try {
            return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    // --- Hash simples da senha (nao e criptografia real, apenas ofuscacao) ---
    function hashSenha(senha) {
        var hash = 0;
        for (var i = 0; i < senha.length; i++) {
            var char = senha.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'sha_' + Math.abs(hash).toString(36) + '_' + senha.length;
    }

    // --- Verifica se ha sessao ativa ---
    function checkSession() {
        try {
            var session = JSON.parse(localStorage.getItem(SESSION_KEY));
            if (session && session.email) {
                // Verifica se o usuario ainda existe
                var users = getUsers();
                var user = users.find(function(u) { return u.email === session.email; });
                if (user) {
                    showSite(user);
                    return true;
                }
            }
        } catch (e) {
            // Sessao invalida, continua para login
        }
        return false;
    }

    // --- Mostra o site apos login ---
    function showSite(user) {
        // Atualiza nome no navbar
        if (navUserName) {
            var partes = user.nome.split(' ');
            navUserName.textContent = partes[0]; // So o primeiro nome
        }

        // Esconde login, mostra site com animacao
        if (authScreen) {
            authScreen.classList.add('hiding');
            setTimeout(function() {
                authScreen.style.display = 'none';
                if (siteContent) {
                    siteContent.style.display = 'block';
                    siteContent.classList.add('entering');
                    // Remove classe depois da animacao
                    setTimeout(function() {
                        siteContent.classList.remove('entering');
                    }, 600);
                }
                // Scroll para o topo
                window.scrollTo(0, 0);
                // Inicializa funcionalidades do site
                initSiteFeatures();
            }, 500);
        }
    }

    // --- Faz logout ---
    function doLogout() {
        localStorage.removeItem(SESSION_KEY);
        // Recarrega a pagina para voltar ao login
        window.location.reload();
    }

    // --- Alternar abas Login / Registro ---
    authTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var target = tab.getAttribute('data-tab');

            // Atualiza abas
            authTabs.forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');

            // Mostra formulario correto
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
            forgotForm.classList.remove('active');

            if (target === 'login') {
                loginForm.classList.add('active');
            } else if (target === 'register') {
                registerForm.classList.add('active');
            }

            // Limpa mensagens
            clearAllMessages();
            clearAllErrors();
        });
    });

    // --- Link "Esqueci a senha" ---
    if (forgotLink) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            authTabs.forEach(function(t) { t.classList.remove('active'); });
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
            forgotForm.classList.add('active');
            clearAllMessages();
            clearAllErrors();
        });
    }

    // --- Botao voltar no formulario de recuperacao ---
    if (backToLogin) {
        backToLogin.addEventListener('click', function() {
            forgotForm.classList.remove('active');
            loginForm.classList.add('active');
            authTabs[0].classList.add('active');
            clearAllMessages();
            clearAllErrors();
        });
    }

    // --- Mostrar/ocultar senha ---
    togglePasswordBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var targetId = btn.getAttribute('data-target');
            var input = document.getElementById(targetId);
            if (!input) return;

            var icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // --- Barra de forca da senha ---
    if (regPasswordInput) {
        regPasswordInput.addEventListener('input', function() {
            var senha = regPasswordInput.value;
            var strengthContainer = document.getElementById('passwordStrength');
            var strengthFill = document.getElementById('strengthFill');
            var strengthText = document.getElementById('strengthText');

            if (senha.length === 0) {
                strengthContainer.classList.remove('visible');
                return;
            }

            strengthContainer.classList.add('visible');

            var score = 0;
            if (senha.length >= 6) score++;
            if (senha.length >= 8) score++;
            if (/[A-Z]/.test(senha)) score++;
            if (/[0-9]/.test(senha)) score++;
            if (/[^A-Za-z0-9]/.test(senha)) score++;

            // Remove classes antigas
            strengthFill.className = 'strength-fill';
            strengthText.className = 'strength-text';

            if (score <= 1) {
                strengthFill.classList.add('weak');
                strengthText.classList.add('weak');
                strengthText.textContent = 'Fraca';
            } else if (score <= 2) {
                strengthFill.classList.add('fair');
                strengthText.classList.add('fair');
                strengthText.textContent = 'Razoavel';
            } else if (score <= 3) {
                strengthFill.classList.add('good');
                strengthText.classList.add('good');
                strengthText.textContent = 'Boa';
            } else {
                strengthFill.classList.add('strong');
                strengthText.classList.add('strong');
                strengthText.textContent = 'Forte';
            }
        });
    }

    // --- Validacao de email ---
    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // --- Mostra erro em um campo ---
    function showFieldError(errorId, mensagem) {
        var el = document.getElementById(errorId);
        if (!el) return;
        el.textContent = mensagem;
        el.classList.add('show');
        // Marca o input
        var input = el.previousElementSibling;
        if (input) {
            var inp = input.querySelector('input');
            if (inp) {
                inp.classList.add('input-error');
                inp.classList.remove('input-success');
            }
        }
    }

    // --- Mostra sucesso em um campo ---
    function showFieldSuccess(errorId) {
        var el = document.getElementById(errorId);
        if (!el) return;
        el.textContent = '';
        el.classList.remove('show');
        var input = el.previousElementSibling;
        if (input) {
            var inp = input.querySelector('input');
            if (inp) {
                inp.classList.remove('input-error');
                inp.classList.add('input-success');
            }
        }
    }

    // --- Limpa erro de um campo ---
    function clearFieldError(errorId) {
        var el = document.getElementById(errorId);
        if (!el) return;
        el.textContent = '';
        el.classList.remove('show');
        var input = el.previousElementSibling;
        if (input) {
            var inp = input.querySelector('input');
            if (inp) {
                inp.classList.remove('input-error');
                inp.classList.remove('input-success');
            }
        }
    }

    // --- Limpa todos os erros ---
    function clearAllErrors() {
        document.querySelectorAll('.field-error').forEach(function(el) {
            el.textContent = '';
            el.classList.remove('show');
        });
        document.querySelectorAll('.input-wrapper input').forEach(function(inp) {
            inp.classList.remove('input-error', 'input-success');
        });
    }

    // --- Mostra mensagem do formulario ---
    function showFormMessage(messageId, texto, tipo) {
        var el = document.getElementById(messageId);
        if (!el) return;
        el.textContent = texto;
        el.className = 'auth-message ' + tipo + ' show';
    }

    // --- Limpa todas as mensagens de formulario ---
    function clearAllMessages() {
        document.querySelectorAll('.auth-message').forEach(function(el) {
            el.className = 'auth-message';
            el.textContent = '';
        });
    }

    // --- Simula loading no botao ---
    function setButtonLoading(btnId, loading) {
        var btn = document.getElementById(btnId);
        if (!btn) return;
        if (loading) {
            btn.classList.add('loading');
            btn.disabled = true;
        } else {
            btn.classList.remove('loading');
            btn.disabled = false;
        }
    }

    // --- SUBMIT: Login ---
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearAllErrors();
            clearAllMessages();

            var email = document.getElementById('loginEmail').value.trim();
            var password = document.getElementById('loginPassword').value;
            var remember = document.getElementById('rememberMe').checked;
            var valid = true;

            // Valida email
            if (!email) {
                showFieldError('loginEmailError', 'Digite seu e-mail.');
                valid = false;
            } else if (!isEmailValid(email)) {
                showFieldError('loginEmailError', 'Formato de e-mail invalido.');
                valid = false;
            }

            // Valida senha
            if (!password) {
                showFieldError('loginPasswordError', 'Digite sua senha.');
                valid = false;
            }

            if (!valid) return;

            // Simula loading
            setButtonLoading('loginSubmit', true);

            setTimeout(function() {
                setButtonLoading('loginSubmit', false);

                // Busca usuario
                var users = getUsers();
                var user = users.find(function(u) {
                    return u.email.toLowerCase() === email.toLowerCase();
                });

                if (!user) {
                    showFieldError('loginEmailError', 'E-mail nao cadastrado.');
                    return;
                }

                if (user.senha !== hashSenha(password)) {
                    showFieldError('loginPasswordError', 'Senha incorreta.');
                    return;
                }

                // Login bem-sucedido
                var session = {
                    email: user.email,
                    nome: user.nome,
                    timestamp: Date.now()
                };

                if (remember) {
                    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
                } else {
                    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
                }

                showFormMessage('loginMessage', 'Login realizado com sucesso! Redirecionando...', 'success');

                setTimeout(function() {
                    showSite(user);
                }, 800);

            }, 1200);
        });
    }

    // --- SUBMIT: Registro ---
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearAllErrors();
            clearAllMessages();

            var nome = document.getElementById('regName').value.trim();
            var email = document.getElementById('regEmail').value.trim();
            var password = document.getElementById('regPassword').value;
            var confirm = document.getElementById('regConfirm').value;
            var terms = document.getElementById('regTerms').checked;
            var valid = true;

            // Valida nome
            if (!nome) {
                showFieldError('regNameError', 'Digite seu nome completo.');
                valid = false;
            } else if (nome.length < 3) {
                showFieldError('regNameError', 'Nome deve ter pelo menos 3 caracteres.');
                valid = false;
            }

            // Valida email
            if (!email) {
                showFieldError('regEmailError', 'Digite seu e-mail.');
                valid = false;
            } else if (!isEmailValid(email)) {
                showFieldError('regEmailError', 'Formato de e-mail invalido.');
                valid = false;
            }

            // Valida senha
            if (!password) {
                showFieldError('regPasswordError', 'Digite uma senha.');
                valid = false;
            } else if (password.length < 6) {
                showFieldError('regPasswordError', 'Senha deve ter pelo menos 6 caracteres.');
                valid = false;
            }

            // Valida confirmacao
            if (!confirm) {
                showFieldError('regConfirmError', 'Confirme sua senha.');
                valid = false;
            } else if (password !== confirm) {
                showFieldError('regConfirmError', 'As senhas nao coincidem.');
                valid = false;
            }

            // Valida termos
            if (!terms) {
                showFieldError('regTermsError', 'Voce precisa aceitar os termos.');
                valid = false;
            }

            if (!valid) return;

            // Verifica se email ja existe
            var users = getUsers();
            var exists = users.find(function(u) {
                return u.email.toLowerCase() === email.toLowerCase();
            });

            if (exists) {
                showFieldError('regEmailError', 'Este e-mail ja esta cadastrado.');
                return;
            }

            // Simula loading
            setButtonLoading('registerSubmit', true);

            setTimeout(function() {
                setButtonLoading('registerSubmit', false);

                // Cria novo usuario
                var newUser = {
                    nome: nome,
                    email: email.toLowerCase(),
                    senha: hashSenha(password),
                    dataCadastro: new Date().toISOString()
                };

                users.push(newUser);
                localStorage.setItem(USERS_KEY, JSON.stringify(users));

                showFormMessage('registerMessage', 'Conta criada com sucesso! Voce ja pode fazer login.', 'success');

                // Limpa formulario
                registerForm.reset();
                // Esconde barra de forca
                document.getElementById('passwordStrength').classList.remove('visible');
                clearAllErrors();

                // Vai para a aba de login apos 1.5s
                setTimeout(function() {
                    authTabs[0].click();
                }, 1500);

            }, 1500);
        });
    }

    // --- SUBMIT: Recuperacao de senha ---
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearAllErrors();
            clearAllMessages();

            var email = document.getElementById('forgotEmail').value.trim();
            var valid = true;

            if (!email) {
                showFieldError('forgotEmailError', 'Digite seu e-mail.');
                valid = false;
            } else if (!isEmailValid(email)) {
                showFieldError('forgotEmailError', 'Formato de e-mail invalido.');
                valid = false;
            }

            if (!valid) return;

            setButtonLoading('forgotSubmit', true);

            setTimeout(function() {
                setButtonLoading('forgotSubmit', false);

                // Verifica se email existe
                var users = getUsers();
                var user = users.find(function(u) {
                    return u.email.toLowerCase() === email.toLowerCase();
                });

                if (!user) {
                    showFieldError('forgotEmailError', 'E-mail nao encontrado em nossa base.');
                    return;
                }

                // Reseta senha para "123456" (simulado)
                user.senha = hashSenha('123456');
                localStorage.setItem(USERS_KEY, JSON.stringify(users));

                showFormMessage('forgotMessage', 'Sua senha foi redefinida para: 123456', 'success');

            }, 1500);
        });
    }

    // --- Validacao em tempo real (ao sair do campo) ---
    // Login email
    var loginEmailInput = document.getElementById('loginEmail');
    if (loginEmailInput) {
        loginEmailInput.addEventListener('blur', function() {
            var val = loginEmailInput.value.trim();
            if (val && !isEmailValid(val)) {
                showFieldError('loginEmailError', 'Formato de e-mail invalido.');
            } else if (val) {
                showFieldSuccess('loginEmailError');
            } else {
                clearFieldError('loginEmailError');
            }
        });
    }

    // Registro email
    var regEmailInput = document.getElementById('regEmail');
    if (regEmailInput) {
        regEmailInput.addEventListener('blur', function() {
            var val = regEmailInput.value.trim();
            if (val && !isEmailValid(val)) {
                showFieldError('regEmailError', 'Formato de e-mail invalido.');
            } else if (val) {
                showFieldSuccess('regEmailError');
            } else {
                clearFieldError('regEmailError');
            }
        });
    }

    // Confirmacao de senha em tempo real
    var regConfirmInput = document.getElementById('regConfirm');
    if (regConfirmInput && regPasswordInput) {
        regConfirmInput.addEventListener('input', function() {
            var val = regConfirmInput.value;
            if (val && val !== regPasswordInput.value) {
                showFieldError('regConfirmError', 'As senhas nao coincidem.');
            } else if (val) {
                showFieldSuccess('regConfirmError');
            } else {
                clearFieldError('regConfirmError');
            }
        });
    }

    // --- Logout ---
    if (navLogout) {
        navLogout.addEventListener('click', function(e) {
            e.preventDefault();
            doLogout();
        });
    }

    // --- Inicializacao ---
    initDefaultUser();

    // Verifica se ja tem sessao
    if (!checkSession()) {
        // Mostra a tela de login (ja esta visivel por padrao)
        if (authScreen) authScreen.style.display = 'flex';
        if (siteContent) siteContent.style.display = 'none';
    }


    // ==============================
    // FUNCIONALIDADES DO SITE
    // (so iniciam apos login)
    // ==============================

    var siteInitialized = false;

    function initSiteFeatures() {
        if (siteInitialized) return;
        siteInitialized = true;

        // --- Ano dinamico no footer ---
        var yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        // --- Elementos ---
        var filterBtns = document.querySelectorAll('.filter-btn');
        var recipeCards = document.querySelectorAll('.recipe-card');
        var searchInput = document.getElementById('searchInput');
        var resultCount = document.getElementById('resultCount');
        var noResults = document.getElementById('noResults');
        var favBtns = document.querySelectorAll('.fav-btn');

        var filtroAtivo = 'todos';
        var termoBusca = '';

        // --- Filtros por categoria ---
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                filtroAtivo = btn.getAttribute('data-filter');
                aplicarFiltros();
            });
        });

        // --- Busca por texto ---
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                termoBusca = searchInput.value.toLowerCase().trim();
                aplicarFiltros();
            });
        }

        // --- Funcao principal de filtragem ---
        function aplicarFiltros() {
            var visiveis = 0;

            recipeCards.forEach(function(card, index) {
                var categoria = card.getAttribute('data-category');
                var texto = card.textContent.toLowerCase();

                var passaCategoria = (filtroAtivo === 'todos') || (categoria === filtroAtivo);
                var passaBusca = (termoBusca === '') || texto.includes(termoBusca);

                if (passaCategoria && passaBusca) {
                    card.classList.remove('hidden');
                    card.classList.remove('fade-in');
                    void card.offsetWidth;
                    card.classList.add('fade-in');
                    card.style.animationDelay = (visiveis * 0.06) + 's';
                    visiveis++;
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });

            if (resultCount) {
                if (termoBusca.length > 0) {
                    resultCount.textContent = visiveis + ' encontrada' + (visiveis !== 1 ? 's' : '');
                    resultCount.classList.add('visible');
                } else {
                    resultCount.classList.remove('visible');
                }
            }

            if (noResults) {
                if (visiveis === 0) {
                    noResults.classList.add('visible');
                } else {
                    noResults.classList.remove('visible');
                }
            }
        }

        // --- Botoes de favoritar ---
        var favoritos = JSON.parse(localStorage.getItem('receitasFavoritas') || '[]');

        favBtns.forEach(function(btn, index) {
            if (favoritos.includes(index)) {
                btn.classList.add('favorited');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
            }
        });

        favBtns.forEach(function(btn, index) {
            btn.addEventListener('click', function() {
                var jaFavoritado = btn.classList.contains('favorited');

                if (jaFavoritado) {
                    btn.classList.remove('favorited');
                    btn.innerHTML = '<i class="far fa-heart"></i>';
                    favoritos = favoritos.filter(function(i) { return i !== index; });
                    showToast('Receita removida dos favoritos');
                } else {
                    btn.classList.add('favorited');
                    btn.innerHTML = '<i class="fas fa-heart"></i>';
                    favoritos.push(index);
                    showToast('Receita adicionada aos favoritos');
                }

                localStorage.setItem('receitasFavoritas', JSON.stringify(favoritos));
            });
        });
    }

    // --- Toast de notificacao (global) ---
    var toastTimeout = null;
    window.showToast = function(mensagem) {
        var toast = document.getElementById('toast');
        var toastMessage = document.getElementById('toastMessage');
        if (!toast || !toastMessage) return;

        if (toastTimeout) {
            clearTimeout(toastTimeout);
            toast.classList.remove('show');
        }

        toastMessage.textContent = mensagem;

        requestAnimationFrame(function() {
            toast.classList.add('show');
        });

        toastTimeout = setTimeout(function() {
            toast.classList.remove('show');
            toastTimeout = null;
        }, 2500);
    };

    // --- Newsletter (global) ---
    window.handleSubscribe = function(event) {
        event.preventDefault();
        var form = event.target;
        var emailInput = form.querySelector('input[type="email"]');

        if (emailInput && emailInput.value) {
            showToast('Inscrito com sucesso! Receba receitas em ' + emailInput.value);
            emailInput.value = '';
        }
    };

});
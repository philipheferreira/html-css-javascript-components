/*

O meu codigo estava com o problema de nao redirecionar a pagina para a proxima depois de ser selecionada: 

A Causa do Problema
O seu código está funcionando, a lógica do if está correta, mas algo acontece logo depois que impede a mudança de página.

O culpado é o comportamento padrão de um formulário.

1.Você está usando uma tag <form> e um botão do type="submit".
2.Quando você clica em um botão type="submit" dentro de um <form>, o comportamento padrão do navegador é enviar o formulário e recarregar a página.
3.O seu JavaScript executa a função funcaoLogar(), mostra o alert e tenta mudar para home.html.
4.Mas, imediatamente depois, o navegador executa a sua ação padrão: recarregar a página atual. Esse recarregamento anula a sua tentativa de redirecionamento.

É a forma semanticamente correta. Funciona com o clique do mouse e com a tecla "Enter". É o padrão da indústria. 
Requer uma pequena mudança no HTML e no JavaScript.



 */

let contador = 0;

let logarBotao = document.querySelector(".logar");
let campoLogin = document.querySelector(".login");
let campoSenha = document.querySelector(".senha");

function funcaoLogar(){

	event.preventDefault();	/* A linha mais importante: impede o envio e o recarregamento da pagina */

	let login = document.querySelector('.login').value
	let senha = document.querySelector('.senha').value

	if(login == "admin" && senha == "admin"){
		alert('Bem vindo usuario admin, voce logou com sucesso.');
		location.href = "pages/home.html";
		
	}else if(login != "admin" && senha != "admin" && contador >= 3){
		alert(`Voce atingiu o limite de erros permitos da conta. foram ${contador}. Seu acesso foi bloqueado ` )

		bloquearFormularioTemporariamente(10); // chama a funcao de bloqueio
	}

	else{
		contador++;
		alert(`Usuario ou senha incorretos. voce errou ${contador} vezes, so tem mais ` + (3 - contador) + ' tentativas');
		console.log(`Tentativa ${contador} de 3.`);
	}

}

/**
 * Funcoes criaradas para utilizar bloqueio e desbloqueio de funcoes */

let bloquearFormularioTemporariamente = (segundos) => {
	// desabilita campos e o botao
	campoLogin.disabled = true;
	campoSenha.disabled = true;
	logarBotao.disabled = true;

	// Limpar os campos e mudar nome no botao
	campoLogin.value = "";
	campoSenha.value = "";
	logarBotao.value = "Bloqueado";

	let tempoRestante = segundos; /* repassa o valor de tempo para uma variavel local, para poder utilizar */

	// usa o setInterval para atualizar o texto do botao a cada segundo

	intervaloDeTempo = setInterval(() => {
		tempoRestante--;
		console.log(tempoRestante)
		if (tempoRestante < 0) {
			clearInterval(intervaloDeTempo); // Para a funcao de contagem regressiva
			desbloquearFormulario(); //Aciona a funcao de desbloqueo do formulario
		}
	}, 1000);
}


let desbloquearFormulario = () => {

	campoLogin.disabled = false;
	campoSenha.disabled = false;
	logarBotao.disabled = false;

	logarBotao.value = "Logar";

	// Reseta o contador para as 3 tentativas do zero novamente
	contador = 0;

	alert("Tempo do bloqueio passou, voce pode tentar novamente.");
	campoLogin.focus(); // coloca o cursor no campo login para facilitar
}


logarBotao.addEventListener("click", funcaoLogar);
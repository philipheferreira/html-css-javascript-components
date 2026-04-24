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

let logarBotao = document.querySelector(".logar");

let funcaoLogar = () => {

	event.preventDefault();	/* A linha mais importante: impede o envio e o recarregamento da pagina */

	// Variaveis de valores dentro dos campos
	let Valorlogin = document.querySelector('.login').value;
	let Valorsenha = document.querySelector('.senha').value;

	// campos input

	let campoLogin = document.querySelector('.login');
	let campoSenha = document.querySelector('.senha');

	if(Valorlogin === "" && Valorsenha === ""){
		alert('Por favor, não deixe o campo login e o senha vazios.');
		campoLogin.classList.add('erro-validacao');
		campoSenha.classList.add('erro-validacao');
	}else

	if(Valorlogin === "" && Valorsenha !== ""){
		alert('por favor, preencha algum valor dentro do campo login.');
		campoLogin.classList.add('erro-validacao');
		campoSenha.classList.remove('erro-validacao');
	}else

	if(Valorlogin !== "" && Valorsenha === ""){
		alert('Por favor, preencha algum valor dentro do campo senha.');
		campoLogin.classList.remove('erro-validacao');
		campoSenha.classList.add('erro-validacao');
	}else

	if(login === "admin" && senha === "admin"){
		alert('Bem vindo usuario admin, voce logou com sucesso.');
		campoLogin.classList.remove('erro-validacao');
		campoSenha.classList.remove('erro-validacao');
		location.href = "pages/home.html";
		
	}else{
		alert("Usuario ou senha incorretos.");
		campoLogin.classList.remove('erro-validacao');
		campoSenha.classList.remove('erro-validacao');
	}

} 

logarBotao.addEventListener("click", funcaoLogar);
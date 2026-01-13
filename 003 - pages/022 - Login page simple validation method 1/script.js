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

function funcaoLogar(){

	event.preventDefault();	/* A linha mais importante: impede o envio e o recarregamento da pagina */

	let login = document.querySelector('.login').value
	let senha = document.querySelector('.senha').value

	if(login == "admin" && senha == "admin"){
		alert('Bem vindo usuario admin, voce logou com sucesso.');
		location.href = "pages/home.html";
		
	}else{
		alert("Usuario ou senha incorretos.");
	}

}

logarBotao.addEventListener("click", funcaoLogar);
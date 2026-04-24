let logarBotao = document.querySelector(".logar");

function funcaoLogar(){

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

	if(Valorlogin === "admin" && Valorsenha === "admin"){
		alert('Bem vindo usuario admin, voce logou com sucesso.');
		campoLogin.classList.remove('erro-validacao');
		campoSenha.classList.remove('erro-validacao');
		location.href = "pages/home.html";
		
	}if(login === "admin" && senha === "admin"){
		alert('Bem vindo usuario admin, voce logou com sucesso.');
		location.href = "pages/home.html";
		
	}else{
		alert("Usuario ou senha incorretos.");
	}

}

logarBotao.addEventListener("click", funcaoLogar);
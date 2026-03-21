let logarBotao = document.querySelector(".logar");

function funcaoLogar(){
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
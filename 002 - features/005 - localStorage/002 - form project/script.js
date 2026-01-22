let nomeFormulario = document.querySelector(".nomeForm");
let ContainerDoBemVindo = document.querySelector(".bemVindo");
let logoutBtn = document. querySelector(".logout");

// verifica se o nome no storage esta com algum valor

let checarUsuario = () => {
	let nomeUsuario = localStorage.getItem("nome");

	if (nomeUsuario) {
		nomeFormulario.style.display = "none";
		ContainerDoBemVindo.style.display = "block";

		let nomeUsuarioNoElemento = document.querySelector(".nomeUsuario");

		nomeUsuarioNoElemento.textContent = nomeUsuario;

	} else {
		nomeFormulario.style.display = "block";
		ContainerDoBemVindo.style.display = "none";
	}
}

nomeFormulario.addEventListener("submit", (e) => {

	e.preventDefault(); 

	let nomeInput = document.querySelector(".nome");

	localStorage.setItem("nome", nomeInput.value);

	nomeInput.value = "";

	checarUsuario();
});

logoutBtn.addEventListener("click", () => {
	localStorage.removeItem("nome");

	checarUsuario();
})

checarUsuario();
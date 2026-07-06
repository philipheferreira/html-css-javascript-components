const abrirMenuBotao = document.querySelector("#menu-open-button");
const fecharMenuBotao = document.querySelector("#menu-close-button");

abrirMenuBotao.addEventListener("click", () => {
	// tornar o menu mobile visivel
	document.body.classList.toggle("show-mobile-menu");
});

// Fechar menu quando o botão fehcar for clicado
fecharMenuBotao.addEventListener("click", () => abrirMenuBotao.click());
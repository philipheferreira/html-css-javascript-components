const abrirMenuBotao = document.querySelector("#menu-open-button");
const fecharMenuBotao = document.querySelector("#menu-close-button");

abrirMenuBotao.addEventListener("click", () => {
	// tornar o menu mobile visivel
	document.body.classList.toggle("show-mobile-menu");
});

// Fechar menu quando o botão fechar for clicado
fecharMenuBotao.addEventListener("click", () => abrirMenuBotao.click());

// Initialize Swiper
const swiper = new Swiper('.slider-container', {
	loop: true,
	spaceBetween: 25,
	grabCursor: true,
	
	// Caso precise de uma paginação
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true, // corrigido: era "dynamucBullets"
	},
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next', // corrigido: faltava o ponto
		prevEl: '.swiper-button-prev'
	},
	
	// Responsive BreakPoints
	breakpoints: {
		0: {
			slidesPerView: 1
		},
		768: {
			slidesPerView: 2
		},
		1024: {
			slidesPerView: 3
		}
	}
});
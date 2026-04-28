//variaveis
let imagem1 = "img/yu_yu_hakusho.png";
let imagem2 = "img/zatch_bell.jpg";
let contador = 0;

// botão
let botaoImagem = document.querySelector(".botao");


let mudarImagem = (contado) => {

	if (contado == 0){ 
		document.querySelector(".imagem").src = "img/one_piece.png";
	}else
	if(contado == 1){
		document.querySelector(".imagem").src = imagem1;
	}else
	if(contado ==2 ){
		document.querySelector(".imagem").src = imagem2;
	}
}

// função que atualiza contador e valida caso o contador chege a 3 e zera de novo. Depois essa função chama mudar imagem
let mudar = () => {
	contador++ 
	console.log(contador);

	if(contador == 3){
		contador = 0;
	}
	mudarImagem(contador);
}

botaoImagem.addEventListener("click", mudar);


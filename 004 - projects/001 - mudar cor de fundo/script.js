		let botaoMudarCor = document.querySelector(".botao");
		let displayCor = document.querySelector(".mostrarCor");

		botaoMudarCor.addEventListener("click", function(){ 
			var x = Math.floor(Math.random() * 256);
		    var y = Math.floor(Math.random() * 256);
		    var z = Math.floor(Math.random() * 256);
		    var corDeFundo = "rgb(" + x + "," + y + "," + z + ")";
		 	console.log("Mudança da cor: " + corDeFundo);
		  
		    document.body.style.background = corDeFundo; // mexe no css

		    displayCor.value = corDeFundo;
		});

		function sobreMim(obj) {
			obj.innerHTML = "Pode Apertar";
		}

		function foraDeMim(obj){ 
			obj.innerHTML = "Me Aperte";
		}
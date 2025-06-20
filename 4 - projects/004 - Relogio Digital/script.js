var displayHoras = document.querySelector(".horas");
var displayMinutos = document.querySelector(".minutos");
var displaySegundos = document.querySelector(".segundos");

function passarTempo(){

	var tempo = new Date();
	var hr = tempo.getHours();
	var mn = tempo.getMinutes();
	var sd = tempo.getSeconds();

	if(hr < 10){ 
		hr = "0" + hr;
	} 
	if(mn < 10){ 
		mn = "0" + mn;
	}
	if(sd < 10){ 
		sd = "0" + sd;
	}

	displayHoras.textContent = hr;
	displayMinutos.textContent = mn;
	displaySegundos.textContent = sd;
}

window.onload = function() { 

	setInterval(passarTempo, 500);
}
let aba = document.querySelector(".abaDeAbertura");
var i;

let acaoAba = () => {

	this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

}

for(i = 0; i < aba.length; i++){
	aba[i].addEventListener("click", acaoAba);
}
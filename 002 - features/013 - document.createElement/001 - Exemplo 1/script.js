/* O Processo Completo: Criar, Configurar e Adicionar

Para que o elemento apareça na página, você geralmente segue 3 passos:
*/

//1. Criar o Elemento (O que vimos acima)


// Criando um novo parágrafo <p>
const novoParagrafo = document.createElement('p');
// Neste momento, novoParagrafo é um objeto <p> vazio: <p></p>.


/*2. Configurar o Elemento (Aqui entra o CSS e o conteúdo)
Agora que temos o elemento, podemos personalizá-lo com JavaScript.

Adicionar Conteúdo (Texto):*/

novoParagrafo.textContent = 'Este parágrafo foi criado dinamicamente!';
//Agora nosso elemento é: <p>Este parágrafo foi criado dinamicamente!</p>


// Adicionar Atributos (ID, Classes, etc.):

novoParagrafo.setAttribute('id', 'paragrafo-dinamico');
novoParagrafo.classList.add('destaque'); // Melhor forma de adicionar classes para o CSS
//Agora nosso elemento é: <p id="paragrafo-dinamico" class="destaque">...</p>


/*Adicionar Estilos (CSS): A melhor prática é adicionar uma classe 
(como acima) e deixar o CSS no seu arquivo .css. Mas você também pode 
adicionar estilos inline diretamente pelo JS:
*/

novoParagrafo.style.color = 'blue';
novoParagrafo.style.fontSize = '18px';


/*3. Adicionar ao DOM (Encaixar a peça no LEGO)
Este é o passo final que torna o elemento visível na página. Você precisa dizer ao navegador onde esse novo elemento deve ser colocado. Para isso, usamos o appendChild().

Primeiro, selecionamos o elemento "pai" que receberá nosso novo filho.*/


// Vamos adicionar o parágrafo dentro de uma <div> com id="container"
const containerPai = document.getElementById('container');

// Agora, encaixamos o parágrafo dentro do container
containerPai.appendChild(novoParagrafo);
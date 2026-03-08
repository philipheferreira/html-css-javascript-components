const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
  // Para cada 'numero' da lista, vamos testar se ele é par.
  return numero % 2 === 0;
});

console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]

// Veja que o array original não mudou!
console.log(numeros);     // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
O que aconteceu passo a passo?

Pega o 1. 1 % 2 === 0? Não, é false. O 1 é descartado.
Pega o 2. 2 % 2 === 0? Sim, é true. O 2 vai para o novo array.
Pega o 3. 3 % 2 === 0? Não, é false. O 3 é descartado.
... e assim por diante, até o final.
Atalho com Arrow Function: Se sua condição é simples e de uma linha só, você 
pode encurtar o código. O return fica implícito.
*/

// Esta linha faz a mesma coisa que o exemplo acima!
const numerosParesDois = numeros.filter(numero => numero % 2 === 0);

console.log("Segundo exemplo usando metodo arrow function: ");

console.log(numerosParesDois);
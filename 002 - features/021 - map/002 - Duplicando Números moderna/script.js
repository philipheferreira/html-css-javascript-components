/* Este é um uso muito comum. Imagine que você tem uma 
lista de usuários e só quer os nomes deles. */
const numeros = [1, 2, 3, 4, 5];

// Para cada 'numero' no array 'numeros', retorne 'numero * 2'
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]
console.log(numeros);         // Saída: [1, 2, 3, 4, 5] (o original continua intacto)
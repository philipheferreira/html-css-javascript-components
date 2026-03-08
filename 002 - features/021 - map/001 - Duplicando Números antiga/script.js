const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = []; // Crio um array vazio para guardar o resultado

for (let i = 0; i < numeros.length; i++) {
  numerosDobrados.push(numeros[i] * 2); // Pego o número, multiplico por 2 e adiciono no novo array
}

console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]
console.log(numeros);         // Saída: [1, 2, 3, 4, 5] (o original não mudou)
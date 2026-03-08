const numeros = [1, 2, 3];

// Usando map para criar um novo array
const resultadoMap = numeros.map(num => num * 10);
console.log(resultadoMap); // Saída: [10, 20, 30]

// Usando forEach apenas para mostrar no console
const resultadoForEach = numeros.forEach(num => {
  console.log(num * 10); // Isso vai imprimir 10, 20 e 30 no console
});

console.log(resultadoForEach); // Saída: undefined
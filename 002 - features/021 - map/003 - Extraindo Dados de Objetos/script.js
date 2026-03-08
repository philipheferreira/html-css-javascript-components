const usuarios = [
  { id: 1, nome: 'Ana', idade: 23 },
  { id: 2, nome: 'Carlos', idade: 35 },
  { id: 3, nome: 'Mariana', idade: 29 }
];

// Para cada 'usuario' no array, retorne apenas o 'usuario.nome'
const nomesDosUsuarios = usuarios.map(usuario => usuario.nome);

console.log("Array original de Objetos:");
console.log(usuarios);
console.log("Array criado com map");
console.log(nomesDosUsuarios); // Saída: ['Ana', 'Carlos', 'Mariana']
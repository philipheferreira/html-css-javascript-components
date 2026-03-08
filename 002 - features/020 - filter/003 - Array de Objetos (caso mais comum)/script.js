const usuarios = [
  { nome: 'Ana', idade: 28, ativo: true },
  { nome: 'Bruno', idade: 35, ativo: false },
  { nome: 'Carla', idade: 22, ativo: true },
  { nome: 'Daniel', idade: 41, ativo: false },
  { nome: 'Eva', idade: 30, ativo: true }
];

const usuariosAtivos = usuarios.filter(usuario => {
  // A condição é: a propriedade 'ativo' deste usuário é true?
  return usuario.ativo === true;
});

console.log(usuariosAtivos);
/* Saída:
[
  { nome: 'Ana', idade: 28, ativo: true },
  { nome: 'Carla', idade: 22, ativo: true },
  { nome: 'Eva', idade: 30, ativo: true }
]
*/

/*
Outro exemplo: Agora queremos apenas os usuários com idade maior que 30.
*/

const usuariosMaioresDe30 = usuarios.filter(usuario => usuario.idade > 30);

console.log("Segundo exemplo de filtro:");

console.log(usuariosMaioresDe30);
/* Saída:
[
  { nome: 'Bruno', idade: 35, ativo: false },
  { nome: 'Daniel', idade: 41, ativo: false }
]
*/
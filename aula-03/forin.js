const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

const aluno = alunos[2];
// console.log(aluno);

// for (const prop in aluno) {
//   //   console.log(prop);
//   console.log(`aluno.${prop} = ${aluno[prop]}`);
// }

// for (const index in alunos) {
//   console.log(
//     `O aluno ${alunos[index].nome} tem ${alunos[index].idade} anos de idade`
//   );
// }

// alunos.forEach((aluno, index, arr) => {
//   console.log(
//     `${index} - O aluno ${aluno.nome} tem ${aluno.idade} anos de idade`
//   );
//   console.log(arr);
// });
// alunos.forEach((aluno, index) => {
//   console.log(
//     `${index} - O aluno ${aluno.nome} tem ${aluno.idade} anos de idade`
//   );
// });

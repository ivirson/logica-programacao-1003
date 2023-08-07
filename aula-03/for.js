// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log("valor de i:", i);

// let i = 0;
// for (; i < 3; i++) {
//   console.log(i);
// }

// for (let i = 0; ; i++) {
//   if (i >= 3) {
//     break;
//   }
//   console.log(i);
// }

// let i = 0;
// for (;;) {
//   if (i >= 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// Não tente fazer isso em casa
// var lista = "Item1 | Item2 | Item3 | ItemN";
// var listaId = "Item1Id | Item2Id | Item3Id | ItemNId";

// var listaArr = lista.split(" | ");
// console.log(listaArr);

const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

for (let i = 0; i < alunos.length; i++) {
  //   console.log(
  //     "O aluno " + alunos[i].nome + " tem " + alunos[i].idade + " anos de idade"
  //   );
  console.log(`O aluno ${alunos[i].nome} tem ${alunos[i].idade} anos de idade`);
}

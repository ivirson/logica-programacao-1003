const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

// for (const aluno of alunos) {
//   //   console.log(aluno);
//   console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos de idade`);
// }

// for (const { nome } of alunos) {
//   console.log(`O aluno ${nome}`);
// }

const aluno = {
  nome: "Ivirson",
  idade: 20,
  profissao: "Dev",
  endereco: {
    rua: "Rua A",
    numero: 145,
  },
  contatos: [
    {
      type: "email",
      contato: "email@email.com",
    },
    {
      type: "phone",
      contato: "71985747477",
    },
  ],
};

const { endereco, contatos, ...restoAluno } = aluno;
console.log(endereco);
console.log(contatos);
console.log(restoAluno);

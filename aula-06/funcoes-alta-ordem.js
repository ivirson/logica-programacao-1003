// const statusLogado = (nome) => {
//   return `${nome} logou com sucesso no sistema!`;
// };

// const usuarioLogin = (email, senha) => {
//   // implementação do login, de fato
//   const nome = "José";
//   return statusLogado(nome);
// };

// const login = usuarioLogin("ivirson@email.com", "senha@123");
// console.log(login);

// const somaImposto = (taxaImposto) => (custo) => custo / (1 - taxaImposto);
console.log(somaImposto(0.05)(5));

function somaImposto(taxaImposto) {
  return function (custo) {
    return custo / (1 - taxaImposto);
  };
}

// const impostoBrasil = somaImposto(0.4);
// const impostoEua = somaImposto(0.07);

// --------------------------------------------------

const somaImposto = (taxaImposto) => (custo) => custo / (1 - taxaImposto);

const Brasil = somaImposto(0.4);
const Eua = somaImposto(0.07);

console.log("Preço final:");
console.log(Brasil(50));
console.log(Eua(50));

funcaoAltaordem(param1aFn)(param2aFn);

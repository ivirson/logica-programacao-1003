const minhaFuncao = (nome, sobrenome, callback) => {
  const nomeCompleto = nome.concat(" ", sobrenome); // `${nome} ${sobrenome}`;
  console.log(callback);
  return callback(nomeCompleto);
};

const saudar = (nomeCompleto) => `Olá, ${nomeCompleto}`;
const despedir = (nomeCompleto) => `Adeus, ${nomeCompleto}`;

console.log("1", minhaFuncao("Ivirson", "Daltro", despedir));
console.log("2", minhaFuncao("Bruno", "Cesar", saudar));
minhaFuncao("Bruno", "Cesar", console.log);

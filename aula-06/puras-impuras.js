console.clear();
let saldo = 2500;

const sacar = (valor) => {
  saldo -= valor;
  return exibirSaldo();
};

const exibirSaldo = () => saldo;

console.log(sacar(1000));
console.log(sacar(1000));

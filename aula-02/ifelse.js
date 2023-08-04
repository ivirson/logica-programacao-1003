const diaClaro = true;
const tenhoDinheiro = false;
const temProtesto = true;

// if (diaClaro || tenhoDinheiro) {
//   console.log("Ebaaa! Vou para a praia!");
// } else {
//   console.log("Deu ruim! Não vou para a praia!");
// }

// if (diaClaro && tenhoDinheiro && !temProtesto) {
//   console.log("Ebaaa! Vou para a praia!");
// } else if (diaClaro && tenhoDinheiro && temProtesto) {
//   console.log("Vou para a praia, mas vou precisar de um caminho alternativo.");
// } else {
//   console.log("Deu ruim! Não vou para a praia!");
// }

if (diaClaro && tenhoDinheiro) {
  if (temProtesto) {
    console.log(
      "Vou para a praia, mas vou precisar de um caminho alternativo."
    );
  } else {
    console.log("Ebaaa! Vou para a praia!");
  }
} else {
  console.log("Deu ruim! Não vou para a praia!");
}

// Operador Ternário
if (diaClaro) {
  console.log("Ebaaa! Vou para a praia!");
} else {
  console.log("Deu ruim! Não vou para a praia!");
}

diaClaro && tenhoDinheiro
  ? console.log("Ebaaa! Vou para a praia!")
  : console.log("Deu ruim! Não vou para a praia!");

let vouAPraia = diaClaro && tenhoDinheiro ? true : false;

if (diaClaro && tenhoDinheiro) {
  vouAPraia = true;
} else {
  vouAPraia = false;
}

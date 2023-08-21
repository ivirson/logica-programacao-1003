// console.clear();

// try {
//   console.log(soma(35, 87));
// } catch (error) {
//   //   console.log("Error\n", error);
//   console.log("Tipo do erro:", error.name);
//   console.log("Mensagem de erro:", error.message);
//   //   console.log("Stack de erro:", error.stack);
// } finally {
//   console.log("Finalmente!");
// }

function soma(n1, n2) {
  //   setTimeout(() => {
  //     throw Error();
  //   }, 1000);
  return n1 + n2 + n3;
  //   return n1 + n2;
}

const num = 4;
try {
  console.log(num.toUppercase());
} catch (error) {
  if (error.name === "TypeError") {
    console.log("Erro de tipo");
  }
  console.log("Tipo do erro:", error.name);
  console.log("Mensagem de erro:", error.message);
}

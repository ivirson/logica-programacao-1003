// function somar(a, b) {
//   console.log("tradicional", this);
//   return a + b;
// }

// // const somar = function (a, b) {
// //   return a + b;
// // };

// const somar2 = (a, b) => {
//   const teste = 1;
//   console.log("Arrow", this);
//   return a + b;
// };

// somar(15, 5);
// somar2(15, 5);

// const dizOla = () => console.log("Olá");

// dizOla();

console.log(teste());

function teste() {
  return "teste";
}

const teste2 = () => {
  return "teste2";
};

console.log(teste2());

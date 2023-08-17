/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

const fatorialIterativo = (n) => {
  let fat = 1;
  for (let i = 2; i <= n; i++) {
    fat *= i;
  }
  return fat;
};

const fatorialRecursivo = (n) => {
  if (n < 0) {
    return false;
  }
  return n === 0 ? 1 : n * fatorialRecursivo(n - 1);
};

// solução de Georg
function factorial(n) {
  return n < 0
    ? undefined
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, curr) => acc * curr,
        1
      );
}

console.log("Iterativo:", fatorialIterativo(9));
console.log("Recursivo:", fatorialRecursivo(9));

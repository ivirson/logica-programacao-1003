function soma(n1, n2) {
  if (n1 < 0 || n2 < 0) {
    throw RangeError(
      "Números informados precisam ser maiores ou iguais a zero"
    );
  }
  return n1 + n2;
}

console.log(soma(2, -10));
console.clear();

let num = 18; // num é um número
let result = num + "2"; // o JavaScript coage num para string, que pode, então, ser concatenada com o "2"
// console.log(result);

// String
let student = "João Santos";
// console.log(typeof student); // string
// console.log(typeof num); // string
num = num.toString();
// console.log(typeof num); // string

// Number
let age = 25;
// console.log(typeof age); // number

let weight = 9_258_000_000_000;
// console.log(typeof weight); // number
// console.log(weight);

// BigInt
const lightSpeed = 300000n;
// console.log(typeof lightSpeed); // bigint

// Boolean
let isActive = false;
// console.log(typeof isActive); // boolean

// Undefined
let pet;
// console.log(pet); // undefined
// console.log(typeof pet); // undefined
pet = "Spike";
// console.log(pet); // Spike
// console.log(typeof pet); // string]

// Cannot find properties of undefined (reading nomePropriedade)

// Null
let lastName = null;
// console.log(lastName);
// console.log(typeof lastName); // null?

// Symbols
const s1 = Symbol("foo");
const s2 = Symbol("foo");
// console.log(typeof s1); // symbol
// console.log(typeof s2); // symbol
// console.log(s1 === s2); // false
// console.log(s1); // Symbol(foo)
// console.log(s2); // Symbol(foo)

const somar = (num1, num2) => {
  return;
};

const saldo = somar(1000, 2000);

console.log(saldo);
console.log(typeof somar);

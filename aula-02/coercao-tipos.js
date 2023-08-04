// Coerção Explícita
// String para Number
let num = "r12";
// let newNum = Number(num);
// console.log(typeof num);
// console.log(newNum);
// console.log(typeof newNum);

// let newNum2 = parseInt(num);
// console.log(newNum2);
// console.log(typeof newNum2);

// let newNum3 = +num;
// console.log(newNum3);
// console.log(typeof newNum3);

// Number para String
let idade = 25;
// idade = idade.toString();
// idade = "" + idade;
// console.log(idade);
// console.log(typeof idade);

// Number para boolean
let idadeBoolean = !!idade;
// console.log(idadeBoolean);
// console.log(typeof idadeBoolean);

// console.log(idade == true);
// console.log(!!idade === true);
// console.log(25 == "25");
// console.log(25 === "25");

// -------------------------------------------------

// Coerção Implícita
if (1 === null) {
  console.log("Condição verdadeira");
}

let result = "2" / "5";
console.log(result);

const dia = 20;
let diaDaSemana;

// if (dia === 0) {
//   diaDaSemana = "Domingo";
// } else if (dia === 1) {
//   diaDaSemana = "Segunda-feira";
// } else if (dia === 2) {
//   diaDaSemana = "Terça-feira";
// } else if (dia === 3) {
//   diaDaSemana = "Quarta-feira";
// } else if (dia === 4) {
//   diaDaSemana = "Quinta-feira";
// } else if (dia === 5) {
//   diaDaSemana = "Sexta-feira";
// } else if (dia === 6) {
//   diaDaSemana = "Sábado";
// }

switch (dia) {
  case 0:
    diaDaSemana = "Domingo";
    break;
  case 1:
    diaDaSemana = "Segunda-feira";
    break;
  case 2:
    diaDaSemana = "Terça-feira";
    break;
  case 3:
    diaDaSemana = "Quarta-feira";
    break;
  case 4:
    diaDaSemana = "Quinta-feira";
    break;
  case 5:
    diaDaSemana = "Sexta-feira";
    break;
  case 6:
    diaDaSemana = "Sábado";
    break;

  default:
    diaDaSemana = "Não é um dia da semana válido";
    break;
}

console.log(diaDaSemana);

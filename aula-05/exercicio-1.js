/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

function converter(strHoras) {
  let [horas, minutos] = strHoras.split(":").map(Number);
  periodo = horas >= 12 ? "P.M." : "A.M.";

  horas = horas === 12 ? 12 : horas % 12;

  return { horas, minutos, periodo };
}

function saida(hora) {
  horario = converter(hora);

  console.log(
    `Horas: ${horario.horas.toString().padStart(2, "0")}:${horario.minutos
      .toString()
      .padStart(2, "0")} ${horario.periodo}`
  );
}

saida("11:40");
saida("00:00");
saida("12:00");
saida("14:10");
saida("02:20");

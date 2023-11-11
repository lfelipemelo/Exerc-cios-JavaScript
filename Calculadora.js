let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));


let operador = prompt("Digite o operador (+, -, *, /): ");


let resultado;
let resto;

switch (operador) {
  case '+':
    resultado = valor1 + valor2;
    break;
  case '-':
    resultado = valor1 - valor2;
    break;
  case '*':
    resultado = valor1 * valor2;
    break;
  case '/':
    if (valor2 !== 0) {
      resultado = Math.floor(valor1 / valor2);
      resto = valor1 % valor2;
    } else {
      console.log("Erro: Divisão por zero.");
    }
    break;
  default:
    console.log("Operador inválido.");
}

if (resultado !== undefined) {
  console.log("Resultado: " + resultado);
}


if (resto !== undefined) {
  console.log("Resto: " + resto);
}

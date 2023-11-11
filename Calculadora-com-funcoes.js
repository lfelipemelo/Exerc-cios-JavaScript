function somar() {
    return valor1 + valor2;
}

function subtrair(a, b) {
    return a - b;
}

const multiplicar = (a, b) => a * b;

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

let operador = prompt("Digite o operador (+, -, *):");

let resultado;

switch (operador) {
    case '+':
        resultado = somar();
        break;
    case '-':
        resultado = subtrair(valor1, valor2);
        break;
    case '*':
        resultado = multiplicar(valor1, valor2);
        break;
    default:
        console.log("Operador inválido.");
}

if (resultado !== undefined) {
    console.log("Resultado: " + resultado);
}

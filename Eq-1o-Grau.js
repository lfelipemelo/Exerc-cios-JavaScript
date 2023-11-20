try {

    console.log("----- Cálculo de Equação do Primeiro Grau (y = a.x + b) -----")
    let coeficienteAngular = parseFloat(prompt("Digite o coeficiente angular (a):"));


    if (isNaN(coeficienteAngular)) {
        throw new Error("Digite um valor numérico para o coeficiente angular.");
    }


    let coeficienteLinear = parseFloat(prompt("Digite o coeficiente linear (b):"));


    if (isNaN(coeficienteLinear)) {
        throw new Error("Digite um valor numérico para o coeficiente linear.");
    }


    let x = parseFloat(prompt("Digite o valor de (x):"));
    let resultado = coeficienteAngular * x + coeficienteLinear;

    console.log("Para x = " + x + ", o valor de y é: " + resultado);
} catch (erro) {

    console.error("Erro:", erro.message);
} finally {

    console.log("Programa finalizado.");
}

let nomes = [];
let salarios = [];
let idades = [];
let possuiDiploma = [];
let continuar;

function cadastrarPessoa() {
    let nome = prompt("Digite o nome: ");
    let salario = parseFloat(prompt("Digite o salário: "));
    let idade = parseInt(prompt("Digite a idade:"));
    let diploma = prompt("Possui diploma? (S/N)").toUpperCase() === 'S';

    nomes.push(nome);
    salarios.push(salario);
    idades.push(idade);
    possuiDiploma.push(diploma);
}

do {
    cadastrarPessoa();

    continuar = prompt("Deseja cadastrar outra pessoa? (S/N)").toUpperCase();
} while (continuar === 'S');

console.log("Informações cadastradas: ");
for (let i = 0; i < nomes.length; i++) {
    console.log("Nome: " + nomes[i] + ", Salário: R$ " + salarios[i] + ", Idade: " + idades[i] + ", Possui Diploma: " + (possuiDiploma[i] ? "Sim" : "Não"));
}

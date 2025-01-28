// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. 
// A equação para realizar a conversão é: C = (F - 32) / 1.8
let f = 70;
let c = (f - 32) / 1.8;

console.log("A temperatura em celsius é", c.toFixed(1), "°C");

// 2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, 
// sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.
let n1 = 8.0, n2 = 7.5, n3 = 9.5, n4 = 3.5, n5 = 8.0;
let mediaPonderada = (3 * n1 + 2 * n2 + 1 * n3 + 4 * n4 + 5 * n5) / 15

console.log("A média ponderada é", mediaPonderada.toFixed(1));

// 3. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. 
// Em seguida mostre no console o status do aluno:
//  - Maior ou igual 7 = Aprovado
//  - Entre 5 e 7 = Reforço
//  - Menor que 5 = Reprovação
let nota1 = 10.0;
let nota2 = 1.5;
let nota3 = 0.0;

let mediaAluno = (nota1 + nota2 + nota3) / 3

console.log("A média do aluno é", mediaAluno.toFixed(1));

if (mediaAluno >= 7) {
    console.log("Status: Aprovado!");
} else if (mediaAluno >= 5) {
    console.log("Status: Reforço.");
} else if (mediaAluno < 5) {
    console.log("Status: Reprovação.");
}

// 4. Simule a tabela do IMC com base no valor calculado pela formula: 
// IMC = PESO / (ALTURA x ALTURA).
// Indique o status com base no valor do IMC.
let peso = 80.0;
let altura = 1.88;
let imc = peso / altura ** 2

console.log("O IMC calculado é", imc.toFixed(1));

if (imc < 18.5) {
    console.log("Abaixo do peso normal")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Excesso de peso");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade I");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade II");
} else if (imc >= 40) {
    console.log("Obesidade III");
}

// 5. Defina uma variável idade e com um if/else determine se:
//  - Criança: até 12 anos
//  - Adolescente: 12 a 17 anos
//  - Adulto: 18 anos ou mais
let idade = 16;

if(idade < 12) {
    console.log("Criança");
} else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// 6. Crie duas variáveis: salário e quantidadeDependentes. 
// Siga a seguinte regra para aplicar ajustes salariais: 
// Caso não possua dependentes não realizar ajustes no salário, 
// se houver entre 1 e 5 aumentar em 30% o salário. 
// Caso seja acima de 5 aumentar em 40% o salário.
let salario = 1500;
let quantidadeDependentes = 0;
let aumento = 0;

if (quantidadeDependentes == 0) {
    console.log("Sem dependentes. Sem ajustes no salário atual.");
} else if(quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    console.log("Aumento de 30% no salário.");
    aumento = 0.3 * salario;
} else if(quantidadeDependentes > 5) {
    console.log("Aumento de 40% no salário.");
    aumento = 0.4 * salario;
}

salario = salario + aumento;
console.log("Salário:", salario);

// 7. Crie uma variável para armazenar uma letra. 
// Indique caso a letra seja vogal ou consoante (considerar todos os textos em minúsculo).
let letra = "z";

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    console.log("A letra é uma vogal");
} else {
    console.log("A letra é uma consoante");
}

// 8. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
// - Caso 1) É um número divisível por 4, mas não é divisível por 100. 
// - Caso 2) É um número divisível por 4, por 100 e por 400.
let ano = 1996;

if((ano % 4 == 0 && ano % 100 != 0) || (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)) {
    console.log("O ano", ano, "é bissexto.");
} else {
    console.log("O ano", ano, "não é bissexto.");
}

// 9. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130)
// mostre uma mensagem de aviso.
let idadePessoa = 40;

if(idadePessoa < 0 || idadePessoa > 130) {
    console.log("Idade inválida!");
} else {
    console.log("Idade válida!");
}

// 10. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. 
// Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", 
// conforme o caso.

let turno = "X"; // M, V ou N

if(turno == "M") {
    console.log("Bom dia!");
} else if (turno == "V") {
    console.log("Boa tarde!");
} else if(turno == "N") {
    console.log("Boa noite!");
} else {
    console.log("Turno inválido.");
}

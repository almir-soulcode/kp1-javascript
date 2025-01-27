/*
    Estruturas condicionais (if-else)
    if (condicao) {
        // instruções caso verdadeira
    } else {
        // instruções caso falsa
    }
*/

let idade = 10;

if (idade >= 18) {
    // TUDO aqui dentro será executado
    // se idade >= 18.
    console.log("Você é maior de idade!");
    console.log("Sua idade atual:", idade);
} else {
    // TUDO aqui dentro será executado
    // se a condição do if for falsa
    console.log("Você é menor de idade!");
}

let salario = 2500;
let graduacao = true;

if(salario > 2000 && graduacao == true) {
    console.log("Liberar crédito.");
} else {
    console.log("Crédito bloqueado.");
}

// Exemplo 01: Crie uma variavel numero. Crie um if/else que determina
// se o número é par ou ímpar. (%)
let num = 6;

if(num % 2 === 0) {
    console.log(num, "é par!");
} else {
    console.log(num, "é ímpar!")
}

// Exemplo 02: Crie duas variáveis (a e b). Crie um if/else que determina
// qual delas é o maior.
let a = 8, b = 7;

if (a > b) {
    console.log("A é maior que B");
} else {
    console.log("B é maior que A");
}

// Exemplo 03: Crie uma variável nota. Crie um if/else que determina se está
// "Aprovado" ou "Reprovado". Está aprovado se a nota >= 7.
let nota = 9;

if (nota >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// Ternário = if em uma linha
let statusNota = nota >= 7 ? "Aprovado!" : "Reprovado!";
console.log(statusNota);

let digito = 3;
let statusDigito = digito % 2 === 0? "Par" : "Ímpar";
console.log(statusDigito);

// Else if
/*
    if(condicao1) {
        // código caso verdadeiro
    } else if(condicao2) {
        // condicao caso verdadeiro
    } else if(condicao3) {
        // condicao caso verdadeiro
    } else {
        // condicao caso falso
    }
*/

let c = 10, d = 10;
if (c > d) {
    console.log("C é maior que D");
} else if(d > c) {
    console.log("D é maior que C");
} else {
    console.log("C e D são iguais");
}

// Exemplo 04: Crie uma variável x. Com if/else indique se x é positivo, negativo ou zero.
let x = 0;

if (x > 0) {
    console.log("Positivo!");
} else if (x < 0) {
    console.log("Negativo!");
} else { // } else if (x == 0) {
    console.log("Zero!");
}

// Exemplo 05: Crie uma variável n1. De acordo com o valor exiba a mensagem:
// Acima de 9 (incluso): "Excelente!"
// Entre 7 (incluso) e 9 (não incluso): "Muito bem!"
// Entre 5 (incluso) e 7 (não incluso): "Precisa melhorar!"
// Abaixo de 5 (não incluso): "Indo mal."
let n1 = 3.5;

if (n1 >= 9) {
    console.log("Excelente!");
} else if (n1 >= 7 && n1 < 9) {
    console.log("Muito bem!");
} else if (n1 >= 5 && n1 < 7) {
    console.log("Precisa melhorar!");
} else if (n1 < 5) {
    console.log("Indo mal.");
}
// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let cont = 2;

while(cont <= 10) {
    console.log(cont);
    cont = cont + 2;
}

// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70
let mult = 1;

while(mult <= 10) {
    console.log("7 x", mult, "=", 7 * mult);
    mult++;
}

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. 
// Utilize um if para verificar se o número é ímpar.
let n = 1;
let soma = 0;

while(n <= 999) {
    if(n % 2 != 0) { // Sempre checa se o número é ímpar
        soma = soma + n;
    }

    n++;
}

console.log("A soma dos ímpares (1-999) é:", soma);

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, 
// mostre o número e ao final exiba o total de números divisíveis por 9.
let total = 0;

for(let i = 1; i <= 1000; i++) {
    if(i % 9 == 0) {
        // console.log(i);
        total++;
    }
}

console.log("Total:", total);

// 5. Faça a tabuada completa utilizando o loop for.
for(let nTab = 1; nTab < 10; nTab++) {
    console.log("------------");
    console.log("TABUADA DO", nTab);
    console.log("------------")

    for(let mult = 1; mult <= 10; mult++) {
        console.log(nTab, "x", mult, "=", nTab * mult);
    }
}

// 6. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A 
// sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.
let termoAnterior = 0;
let termoAtual = 1;

for(let i = 0; i < 10; i++) { // Repetir
    let proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;

    console.log(termoAnterior);
}

// 7. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 
// (em ordem decrescente).
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// 8. Faça um programa que calcule o fatorial de um número inteiro. 
// Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.
let produto = 1;

for(let i = 5; i >= 1; i--) {
    produto = produto * i;
}

console.log(produto);

// 9. Crie um programa que exiba todos os números divisíveis por 7 de 1 a 100 usando um 
// loop for e uma estrutura condicional if para verificar se cada número é divisível por 7.
for(let i = 1; i <= 100; i++) {
    if(i % 7 == 0) {
        console.log(i);
    }
}

// 10. Mostre a soma do 50 até o número 100 usando loop for.
let soma2 = 0;

for(let i = 50; i <= 100; i++) {
    soma2 = soma2 + i;
}

console.log(soma2);

// 11. Desafio
let linha = "";

for(let i = 0; i < 5; i++) {
    linha = linha + "*"
    console.log(linha);
}
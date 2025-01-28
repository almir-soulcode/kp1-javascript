// Estruturas de repetição = loops = laços
// Ex: while e for
// Essas estruturas possuem:
    // Condição de parada (booleano, expressão lógica)
    // Valor inicial (variavel de controle)
    // Atualização do valor

/* While = Enquanto

    while(condicao) {
        // código que será repetido
        // ENQUANTO a condicao for true
    }

*/

// Loop infinito
// while(true) { // Não há condição de parada
//     console.log("Batata!");
// }

let numero = 0; // variável de controle

while(numero <= 1000) { // condição de parada
    console.log(numero);
    numero++; // numero = numero + 1
}

console.log("Fim do while. Numero = ", numero);


// 0 a 200 / de 5 em 5
let numero2 = 0;

while(numero2 <= 200) {
    console.log(numero2);
    numero2 += 5; // numero2 = numero2 + 5
}

// 100 a 0 / de 1 em 1
let numero3 = 100;

while(numero3 >= 0) {
    console.log(numero3);
    numero3--; // numero3 = numero3 - 1
}

console.log("Fim do While. Numero =", numero3);

// Acumulador
// Soma: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
let n = 1;
let soma = 0;

while (n <= 10) {
    soma = soma + n; // 1 + 2 + 3 + ... + 10
    n++; // 4
}

console.log("Resultado da soma: ", soma);

// Teste 1: não executa nenhuma vez
let x = 5;

while (x < 5) {
    console.log(x);
    x++;
}

// Teste 2: Executa normalmente com ">"
let y = 100;

while (y > 10) {
    console.log(y);
    y--;
}

// Teste 3: Funciona normalmente do -50 até -1
let w = -50;

while(w < 0) {
    console.log(w);
    w++;
}

// Exemplo 1: Contagem regressiva
// Crie um programa que mostra a contagem do 10 até o 1 e ao final exiba
// a mensagem "Fogo!".
let contagem = 10;

while(contagem >= 1) {
    console.log(contagem);
    contagem--;
}

console.log("Fogo!");

// Exemplo 2: Soma de números até 100
// Crie um programa que soma os números de 1 até 100 e exibe o resultado ao final.
let a = 1;
let soma2 = 0;

while(a <= 100) {
    console.log(soma2, " + ", a)
    soma2 = soma2 + a;
    a++;
}

console.log("Soma final =", soma2);

// Exemplo 3: Contar até um limite
// Crie uma variavel chamada limite com um valor qualquer. Use o while para contar
// de 1 até esse valor e mostrar cada número.
let limite = 90;
let b = 1;

while(b <= limite) {
    console.log(b);
    b++;
}
/*
    for(inicializacao;condicao;atualizacao) {
    }
*/

// Contar de 1 até 10
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 0 a 200 / de 5 em 5
for(let i = 0; i <= 200; i += 5) {
    console.log(i);
}

// 100 a 0 / de 1 em 1
for(let i = 100; i >= 0; i--) {
    console.log(i);
}

// Acumulador
let soma = 0;

for(let i = 1; i <= 10; i++) {
    soma = soma + i;
}
console.log(soma);

// Teste 1: nem executa
for(let i = 0; i > 10; i--) {
    console.log(i);
}

// Teste 2: loop infinito
for (let i = 5; i > 0; i++) {
    console.log(i);
}

// Teste 3: loop infinito
for(let i = 0; i < 100; i = i * 2) {
    console.log(i);
}

// Exemplo: Refazer os exemplos 1, 2 e 3 de while usando for.
// 1.
for(let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("Fogo!");

// 2. 
let soma2 = 0;

for(let i = 1; i <= 100; i++) {
    soma2 = soma2 + i;
}

console.log("Soma:", soma2);

// 3. 
for(let i = 1, limite = 30; i <= limite; i++) {
    console.log(i);
}

// Loop infinito
for(;;) {
    console.log("Infinito");
}
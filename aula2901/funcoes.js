/*
    Função = unidade lógica do programa.

    function nome_da_funcao(parametros) {
        // bloco de código da função
    }
*/

// Declaração da função
function boasVindas() { // escopo
    console.log("Seja bem-vindo(a)!");
    console.log("!!!!!");
}

// Chamada da função
// boasVindas();
// boasVindas();
// boasVindas();

// Escopo da função
function exemplo02() {
    let a = 10;
    let b = 20;

    console.log("A soma é", a + b);
}

exemplo02();

// Escopo global
let a = 20;
let b = 30;

// Parâmetros = entrada
function soma(a, b) {
    console.log(`A soma de ${a} + ${b} = ${a + b}`);
}

soma(5, 10);
soma(20, 15);
soma(3, 10);


function saudacoes(nome) {
    console.log(`Olá, ${nome}`);

    if(nome == "José") {
        console.log("Fez o que te pedi?");
    } else if(nome == "Maria") {
        console.log("Há quanto tempo?");
    } else {
        console.log("Tudo bem?");
    }
}

saudacoes("José");
saudacoes("Maria");
saudacoes("Gabriel");

// Exemplo 01: Transformar em função o exemplo da conversão de temperatura.
// Crie uma variável que armazene uma temperatura em Fahrenheit, 
// e realize a conversão para Celsius. 
// A equação para realizar a conversão é: C = (F - 32) / 1.8

function converterCelsiusFahrenheit(tempF) {
    let tempC = (tempF - 32) / 1.8;
    console.log("A temperatura em celsius é", tempC.toFixed(1));
}

converterCelsiusFahrenheit(95.5);
converterCelsiusFahrenheit(108.0);

// Exemplo 02: Transformar em função o código abaixo.
function tabuada(n) {
    let mult = 1;

    while(mult <= 10) {
        console.log(`${n} x ${mult} = ${n * mult}`);
        mult++;
    }
}

// A mesma lógica será utilizada para diferentes valores
tabuada(2);
tabuada(5);
tabuada(7);

// Retorno = saída dos dados da função
function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;

    console.log("A média é", media);

    return media;
}

// Usamos uma variável para armazenar o valor
// que a função produziu / retornou
let mediaAluno1 = calcularMedia(7.5, 8.5, 9.0);
let mediaAluno2 = calcularMedia(8.0, 5.0, 6.0);
let mediaAluno3 = calcularMedia(8.5, 9.0, 10.0);

let mediaTurma = calcularMedia(mediaAluno1, mediaAluno2, mediaAluno3);

console.log("A média da turma é:", mediaTurma);

// Exemplo: calculadora IMC
function calcularImc(peso, altura) {
    return peso / altura ** 2;
}

let imc = calcularImc(90.0, 1.78);
console.log("O IMC calculado: ", imc);

// Exemplo 03: Crie uma função chamada calcularAreaRetangulo que recebe dois parâmetros (base e altura) e retorna a área de um retângulo. A = base * altura.
function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

let area1 = calcularAreaRetangulo(100, 3);
console.log(area1);

// Exemplo 04: Crie uma função chamada calculadora que recebe três parâmetros: dois números e uma operação (+, -, *, /). A função deve retornar o resultado da operação.
// calculadora(5, 2, "+") -> 7
function calculadora(n1, n2, op) {
    if (op == "+") {
        return n1 + n2;
    } else if(op == "-") {
        return n1 - n2;
    } else if(op == "*") {
        return n1 * n2;
    } else if (op == "/") {
        return n1 / n2;
    } else {
        return "Operador inválido!";
    }
}

let res1 = calculadora(5, 2, "+");
console.log(res1);

let res2 = calculadora(10, 4, "batata");
console.log(res2);

// Exemplo 05: Crie uma função chamada ehPar que recebe um número como parâmetro e retorna true se for par e false se for ímpar.
function ehPar(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

if(ehPar(10)) {
    console.log("O 10 é par");
}
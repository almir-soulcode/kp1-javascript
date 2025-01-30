// Exemplo 01: Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
let numeros = [10, 4, 3, 20, 1, 9, 8, 99, 100, 1];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for(let item of numeros) {
    console.log(item);
}

// Exemplo 02: Crie um array com 7 números. Percorra e indique qual o maior número deles.
let valores = [10, 1, 200, -1, 0, 3];
let maior = valores[0];

for(let i = 1; i < valores.length; i++) {
    if(valores[i] > maior) {
        maior = valores[i];
    }
}

console.log(maior);
// Exemplo 03: Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function extrairDigitosVerificadores(cpf) {
    let partesCpf = cpf.split("-");
    return partesCpf[1];
}

let digitos = extrairDigitosVerificadores("056.985.990-23");
console.log(digitos);

// Exemplo 04: Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
function chamada(turma, presenca) {
    let ausentes = [];

    for(let aluno of turma) {
        if(presenca.includes(aluno)) {
            console.log(`O aluno ${aluno} está presente!`)
        } else {
            console.log(`O aluno ${aluno} não está presente!`);
            ausentes.push(aluno);
        }
    }

    return ausentes;
}

let kp1 = ["João", "Maria", "Carlos", "José", "Claúdia"];
let presentes = ["Maria", "Carlos", "José"];
let ausencias = chamada(kp1, presentes);
console.log(ausencias);

// Exemplo 05: Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
function quadrado(arr) { // [2, 3, 9] -> [4, 9, 81]
    let resultado = [];
    
    for(let numero of arr) {
        resultado.push(numero**2);
    }

    return resultado;
}

console.log(quadrado([2, 3, 9, 8, 100]));

// Exemplo 06: Crie um array de nomes e exiba apenas os nomes das posições pares.
let nomes = ["João", "Maria", "Carlos", "José", "Claúdia"];

for(let i = 0; i < nomes.length; i++) {
    if(i % 2 == 0) {
        console.log(nomes[i]);
    }
}

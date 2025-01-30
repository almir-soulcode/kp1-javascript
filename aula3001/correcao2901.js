// 1. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = "Eu jogo LOL e Valorant, LOL é top";
let fraseCensurada = frase.replaceAll("LOL", "###");

console.log(fraseCensurada);

// 2. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
let email = "jose.almir@soulcode.com";

if(email.endsWith("@soulcode.com")) {
    console.log("Este email é da Soulcode.");
} else {
    console.log("Este email é inválido.")
}

// 3. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.
function calcularIMC(peso, altura) {
    return peso / altura ** 2;
}

function statusImc(imc) {
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
}

let peso = 80, altura = 1.87;
let imc = calcularIMC(peso, altura);

statusImc(imc);

// 4. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%
function percentual(valor) {
    let porcentagem = valor * 100;

    return porcentagem.toFixed(1).replace(".", ",") + " %";
}

console.log(percentual(0.45678));

// 6. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.
function contar(limite) {
    for(let i = 1; i <= limite; i++) {
        console.log(i);
    }
}
contar(5);
contar(100);

// 11. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string. Ex: contarLetra("batata", "a") -> 3
function contarLetra(palavra, letra) {
    let ocorrencias = 0;

    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            ocorrencias++;
        }
    }

    return ocorrencias;
}

console.log(contarLetra("batata", "t"));

// Extra: Transformar exercícios
// Fatorial
function fatorial(n) {
    let produto = 1;

    for(let i = n; i >= 1; i--) {
        produto = produto * i;
    }
    
    return produto;
}

let f5 = fatorial(5);
console.log(f5);

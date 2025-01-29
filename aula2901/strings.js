// String = cadeia de caracteres

let nome = 'Almir';
let sobrenome = "Batata";
let idade = 28;

// Backticks
// Template string
let nomeCompleto = `${nome} de ${sobrenome}`;
console.log(nomeCompleto);

let apresentacao = `Eu sou ${nome}, tenho ${idade} anos.`
console.log(apresentacao);

// Formação de strings (índice de caractere)
let meuPet = "Fred";
// 0 -> F
// 1 -> r
// 2 -> e
// 3 -> d

let comida = "Batata Assada"; // 0 até 12
// console.log(comida[0]);
// console.log(comida[1]);
// console.log(comida[8]);
// console.log(comida[6]); // Espaço
// console.log(comida[12]);
// console.log(comida[500]); // undefined

// Tamanho
console.log(comida.length) // quantos caracteres a string possui
console.log(comida[comida.length - 1]); // o ultimo caractere

// For
for(let i = 0; i < comida.length; i++) {
    console.log(comida[i]);
}

// Exemplo 01: Inverter uma string. Ao invés de iniciar do índice 0, inicie
// do último índice da string e vá até zero, invertendo uma string.
let texto = "Batata";
let textoInverso = "";

for(let i = texto.length - 1; i >= 0; i--) {
    textoInverso = textoInverso + texto[i];
}

console.log(textoInverso);

// Funções de string
let palavra = "Java Script";
let palavraMinusculo = palavra.toLowerCase(); // retorna a string em minusculo
let palavraMaiusculo = palavra.toUpperCase(); // retorna a string em maiusculo

console.log(palavraMinusculo);
console.log(palavraMaiusculo);

// Replace
let palavra2 = "Desenvolvedor JavaScript";

let palavra2Alterada = palavra2.replace("Java", "Type");
console.log(palavra2Alterada);

palavra2Alterada = palavra2.replaceAll("a", "x"); // Substitui tudo
console.log(palavra2Alterada);

palavra2Alterada = palavra2.replace("Script", "");
console.log(palavra2Alterada);

// Includes
let frase = "Eu comi arroz, feijão, batata e alface";

// console.log(frase.includes("carne"));
if(frase.includes("alface")) {
    console.log("Ótimo!");
}

// Trim = remove os espaços laterais do texto
let texto2 = "       Olá, Tudo bem?      ";
texto2Alterado = texto2.trim();

console.log(texto2Alterado);

// Endswith / Startswith
let arquivo = "musica.mp3";

console.log(arquivo.endsWith("mp3")); // Verifica se termina com 'mp3'
console.log(arquivo.startsWith("mus")); // Verifica se começa com 'mus'

// Exemplo 02: Crie uma variável com a seguinte frase: Eu jogo LOL.
// Verifique se existe a palavra 'LOL' e remova da frase.
let frase2 = "Eu jogo LOL";

if(frase2.includes("LOL")) {
    frase2 = frase2.replaceAll("LOL", "")
    frase2 = frase2.trim();
}

console.log(frase2);

// Exemplo 03: Crie uma variável com uma senha. Verifique se existe pelo menos algum
// dos seguintes caracteres especiais: !, @, #, $, %. Caso não exista, a senha é inválida.
let senha = "batata123@";

if(senha.includes("!") || senha.includes("@") || senha.includes("#") || senha.includes("$") || senha.includes("%")) {
    console.log("Senha válida!");
} else {
    console.log("Senha inválida!");
}
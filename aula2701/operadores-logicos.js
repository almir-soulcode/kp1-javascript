/*
    Operadores lógicos -> boolean
    && -> E (AND)
    || -> OU (OR)
    ! -> NEGAÇÃO (NOT)
*/

// AND (&&)
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(true && true && true && false); // false
// console.log(false && true); // false

// // OR (||)
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || false || false || false); // true
// console.log(false || false); // false

// // NOT (!)
// console.log(!true); // false
// console.log(!false); // true


// Expressões lógicas
// Ordem: ! > && > ||
// Obs: Os parênteses mudam a ordem
// console.log(!true || false); // false
// console.log(true || true && false); // true
// console.log(!false && true || false); // true

let idade = 60;
// Idade entre 18 e 59 anos
console.log(idade >= 18 && idade <= 59)

let media = 5.0;
let aprovado = media >= 7;
let sabeIngles = true;
console.log(aprovado);

let contratado = aprovado && sabeIngles;
console.log(contratado);

let reprovado = !aprovado;
console.log(reprovado);

let nivelIngles = "A2";
let notaSimulado = 70;

// Fila de espera
console.log((notaSimulado >= 50 && notaSimulado <= 70) || (nivelIngles == "A2"))
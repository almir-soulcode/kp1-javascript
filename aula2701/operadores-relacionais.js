/*
    Operadores relacionais

    < Menor que
    > Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a
    != Diferente de
    === Igual a e mesmo tipo
 */

let a = 3;
let b = 5;

console.log(a > b); // false
console.log(a < b); // true
console.log(b > a); // true
console.log(b >= a); // true
console.log(b >= 5); // true
console.log(a <= b); // true
console.log(a <= 3); // true
console.log(b > 5); // false

console.log(a == b); // false
console.log(a != b); // true

console.log(3 == "3"); // true, possuem o mesmo valor

// Estritamente igual: comparar o valor e o tipo da variável
console.log(3 === "3"); // false, os tipos são diferentes
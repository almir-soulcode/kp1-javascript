// Arrays => armazenar múltiplos valores/itens/elementos
// [] -> array vazio
// [1, 2, 3, 4, 5] -> array preenchido
// ["batata", "batata doce"] -> array com strings
// [1, "batata", 7.5, true] -> array com tipos diferentes

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras);

// Acessando um elemento
console.log(figuras[0]);
console.log(figuras[3]);
console.log(figuras[500]); // undefined

// Alterando elementos
let notas = [6.5, 8.0, 9.0];
console.log("Antes:", notas);
notas[0] = 7.0; // substituir
notas[1] += 0.5; // acrescentar => notas[1] = notas[1] + 0.5
notas[2]++; // incrementar/decrementar => notas[2] = notas[2] + 1
console.log("Depois:", notas);

// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5];

console.log(arr1.length);
console.log(arr2.length);

// Percorrer o array (for)
let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"];

// for(let i = 0; i < alunos.length; i++) {
//     console.log(`O aluno ${i} é ${alunos[i]}`);
// }

// For-of
// Percorre todos os elementos, e "item" assume cada um dos valores por vez
for(let item of alunos) {
    console.log(`O nome ${item} tem ${item.length} caracteres.`);
}
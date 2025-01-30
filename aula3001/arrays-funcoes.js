let nums = [];

// Adicionar elemento ao final
console.log(nums);
nums.push(4);
console.log(nums);
nums.push(5);
console.log(nums);
nums.push(10, 200); // vários elementos de uma vez
console.log(nums);

// Removendo elemento do final
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// Join = juntar os elementos do array e formar uma string
let data = ["27", "06", "1999"];
let dataTexto = data.join("-");
console.log(dataTexto);

let enderecoIP = [192, 168, 1, 1];
let enderecoIPTexto = enderecoIP.join(".");
console.log(enderecoIPTexto);

// Concat = unir arrays diversos
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); // A ordem muda o resultado final
console.log(p3);

// Reverse = alterar a ordem do array
let n = [1, 2, 3];
let nInverso = n.reverse();

console.log(n);

// Includes = verificar a existência de um elemento
let pessoas = ["joão", "pedro", "ana"];

if(pessoas.includes("josé")) {
    console.log("José está aqui!");
} else {
    console.log("José não está aqui!");
    pessoas.push("josé");
}

// Split = separar uma string e forma um array
let frase = "Eu vou estudar Banco de Dados";
let dataInicial = "29/01/2000";
let palavraEspecial = "BATATA";

let fraseArray = frase.split(" ");
console.log(fraseArray);

let dataArray = dataInicial.split("/");
console.log(dataArray);

let palavraArray = palavraEspecial.split(""); // Quebra a string letra por letra

// Inverter a string
console.log(palavraArray.reverse().join(""));

// Referência:
function percorrerArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

percorrerArray([1, 2, 3]);
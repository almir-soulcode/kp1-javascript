import os from "os";
import fs from "fs";

// OS = módulo com info do sistema
console.log("Plataforma:" , os.platform());
console.log("Arquitetura:", os.arch());
console.log("Total Memoria:", os.totalmem());

// FS = módulo que interage com pastas e arquivos

// write = reescreve o arquivo do zero
fs.writeFileSync("dados.txt", "Hello, World!");

// append = adiciona texto ao arquivo / preserva o que tem
fs.appendFileSync("dados.txt", "\nHey!");
fs.appendFileSync("dados.txt", "\nHey!");
fs.appendFileSync("dados.txt", "\nHey!");

// read = ler um arquivo existente
let dados = fs.readFileSync("dados.txt");
console.log(dados.toString());

import cpf from "cpf";

console.log(cpf.generate());
console.log(cpf.format("99999999999"));
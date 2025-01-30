// Objetos = servem para estruturar dados
/*
    let variavel = {
        propriedade1: valor,
        propriedade2: valor,
        propriedade3: valor
    }
*/

// Declaração
// Propriedades (nome, idade, peso, altura)
let pessoa1 = { nome: "José", idade: 29, peso: 80, altura: 1.77 };

let pessoa2 = {
    nome: "Maria",
    idade: 27,
    peso: 66,
    altura: 1.60
}

// console.table(pessoa1);
// console.table(pessoa2);

// Acessando propriedades
// console.log(pessoa1.nome);
// console.log(pessoa2.idade);
// console.log(pessoa1["peso"]);
// console.log(pessoa2["altura"]);

// Adicionando propriedades
pessoa1.email = "jose@email.com";
console.log(pessoa1);

// Alterando valores
pessoa1.nome = "José Gomes";
pessoa1.idade++; // pessoa1.idade = pessoa1.idade + 1
console.log(pessoa1);

pessoa2["nome"] = "Maria Gomes";
pessoa2["email"] = "maria@email.com";
console.log(pessoa2);

// Removendo
delete pessoa1.idade;
console.log(pessoa1);

delete pessoa2["idade"];
console.log(pessoa2);

// Checar a existência de propriedade
if("nome" in pessoa1) {
    console.log("Propriedade nome presente");
}

// Objetos aninhados
let curriculo = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    dataNascimento: "10/01/2000",
    endereco: { // objeto aninhado
        cidade: "Fortaleza",
        estado: "CE",
        cep: "99999-999",
        rua: "Rua X",
        numero: "271"
    },
    contato: { // objeto aninhado
        email: "jose@email.com",
        telefone: "(99) 9-9999-9999",
        fax: "+9 999 999 9999"
    },
    idiomas: ["português", "inglês", "espanhol", "russo"],
    formacao: [
        { nome: "Ensino Médio", periodo: "2000-2003" },
        { nome: "Técnico em Informática", periodo: "2003-2005"},
        { nome: "Bacharelado em Computação", periodo: "2010-2014"}
    ]
};

console.log(curriculo);
console.log(curriculo.endereco);
console.log(curriculo.contato);
console.log(curriculo.idiomas);
console.log(curriculo.formacao);

// Exemplo: Crie um objeto para representar um aluno.
    // nome
    // serie
    // materias (nome da materia, professor)
    // notas

let aluno = {
    nome: "Gabriel Braga",
    serie: "7º",
    materias: [
        { nome: "HTML", professor: "Almir" },
        { nome: "Inglês", professor: "Paul" },
        { nome: "Soft-skills", professor: "Rafael"}
    ],
    notas: [ 7.5, 8.0, 9.0 ]
}

console.log("Percorrendo as materias")
aluno.materias.push({nome: "Javascript", professor: "Almir"});
aluno.notas.push(10);

for(let materia of aluno.materias) {
    console.log(materia.nome);
}
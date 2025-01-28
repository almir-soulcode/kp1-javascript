// Estrutura de seleção (switch-case)

let dia = 8; // 1 a 7
switch(dia) {
    case 1:
        console.log("Domingo!");
        break; // Impede a execução dos outros cases
    case 2:
        console.log("Segunda!");
        break;
    case 3:
        console.log("Terça!");
        break;
    case 4: 
        console.log("Quarta!");
        break;
    case 5:
        console.log("Quinta!");
        break;
    case 6: 
        console.log("Sexta!");
        break;
    case 7:
        console.log("Sábado!");
        break;
    default: // para qualquer valor fora dos cases
        console.log("Dia inválido!");
}

// Exemplo 1: Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. 
// Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", 
// conforme o caso. Usando Switch-case.
let turno = "M";

switch(turno) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
    default:
        console.log("Valor Inválido!");
}

// Exemplo 2: Crie uma variável com o número do mês (1 a 12). 
// Exiba a estação corretamente:
// - Dezembro, Janeiro, Fevereiro = Verão
// - Março, Abril, Maio = Outono
// - Junho, Julho, Agosto = Inverno
// - Setembro, Outubro, Novembro = Primavera
// Se o número do mês for inválido, exiba "Mês Inválido".
let mes = 13;

switch(mes) {
    case 1:
    case 2:
    case 12:
        console.log("Verão.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Inverno");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
}
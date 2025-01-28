// Exemplo 01: Crie um programa que simula o jogo Pedra, Papel ou Tesoura. 
// Use duas variáveis (jogador1 e jogador2) para definir manualmente as 
// escolhas de cada jogador. 
// O programa deve determinar quem venceu ou se houve empate com base nas 
// seguintes regras:
//  - Pedra vence Tesoura.
//  - Tesoura vence Papel.
//  - Papel vence Pedra.
let jogador1 = "pedra";
let jogador2 = "tesoura";

if (jogador1 === jogador2) {
    console.log("Empate!");
} else if(jogador1 === "pedra") {
    if (jogador2 === "tesoura") {
        console.log("O jogador 1 ganhou. Pedra vence Tesoura.");
    } else {
        console.log("O jogador 2 ganhou. Papel vence Pedra.")
    }
} else if(jogador1 === "tesoura") {
    if(jogador2 === "papel") {
        console.log("O jogador 1 ganhou. Tesoura vence Papel");
    } else {
        console.log("O jogador 2 ganhou. Pedra vence Tesoura.");
    }
} else if(jogador1 === "papel") {
    if(jogador2 === "pedra") {
        console.log("O jogador 1 ganhou. Papel vence Pedra.")
    } else {
        console.log("O jogador 2 ganhou. Tesoura vence Papel.")
    }
}

import cpf from "cpf";
import express from "express";

// Cria uma instância da aplicação express
const app = express();

// Rota raiz
// O servidor Express recebe uma requisição e responde a essa requisição com uma página HTML
app.get("/", function (requisicao, resposta) {
  resposta.send(`
        <h1>Bem-vindo(a) ao nosso servidor!!!</h1>
        <ul>
          <li><a href="/gerar-cpf">Gerar CPF</a></li>
          <li><a href="/ajuda">Ajuda</a></li>
        </ul>
    `);
});

app.get("/gerar-cpf", function (requisicao, resposta) {
  let cpfGerado = cpf.generate();

  resposta.send(`
          <h1>Gerador de CPF</h1>
          <p>CPF: ${cpfGerado}</p>
          <a href="/gerar-cpf">Gerar novo</a>
          <a href="/">Voltar</a>
  `);
});

// Nova rota: / ajuda
app.get("/ajuda", function(requisicao, resposta) {
    resposta.send(`
        <h1>Ajuda</h1>
        <p>Aqui você encontra ajuda para os seus problemas técnicos.</p>
        <a href="/">Voltar</a>
    `);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
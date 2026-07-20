import express from "express";

const app = express();

app.use(express.json());

const port = 8080;

const produtos = [];

app.get("/inicio", (req, res) => {
  console.log("Teste");

  res.send("Terceira requisição usando Nodejs");
});

app.get("/produtos/:eletrodomestico/:quantidade", (req, res) => {
  const { eletrodomestico, quantidade } = req.params;

  console.log(eletrodomestico);

  res.send(
    `Página dos produtos (${eletrodomestico.toUpperCase()} - ${quantidade})`,
  );
});

app.post("/produtos/add", (req, res) => {
  const {produto} = req.body;

  produtos.push(produto);

  console.log(produtos);

  res.statusCode = 200;

  res.json({ "Mensagem": "Produto criado com sucesso" });
});

app.delete('produtos/:indice',(req,res) => {
  const { indice } = req.params

  produtos.splice(Number.parseInt(indice),1)

  res.statusCode() = 204

  res.json({"Mensagem": "Produto apagado com sucesso"})

  console.log(produtos)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

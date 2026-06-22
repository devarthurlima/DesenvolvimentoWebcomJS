let precoProduto = 1000;
let tipoPagamento = "";
let erro = false
const codigoPagamento = Math.round(Math.random() * 5) + 1;

switch (codigoPagamento) {
  case 1:
    precoProduto -= 0.1 * precoProduto;
    tipoPagamento = "A vista, dinheiro ou pix:";
    break;
  case 2:
    precoProduto -= 0.05 * precoProduto;
    tipoPagamento = "A vista no cartão de crédito:";
    break;
  case 3:
    tipoPagamento = "Parcelado em 2x no cartão:";
    break;
  case 4:
    tipoPagamento = "Parcelado em 3x ou mais no cartão:";
    break;
  default:
    console.log("Código de pagamento inválido.");
    erro = true;
}

if(!erro){
    console.log(tipoPagamento + " Preço Final: " + precoProduto);
}


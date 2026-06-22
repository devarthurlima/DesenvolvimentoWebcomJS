const condicao = true;

const minhaPromessa = new Promise((resolve,reject ) => {
  if(condicao) resolve("Deu certo");
  else reject("Deu errado");
});

//console.log(minhaPromessa);

minhaPromessa.then(Response => console.log(Response)).cath(erro => console.log(erro))

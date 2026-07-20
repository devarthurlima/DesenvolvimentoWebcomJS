const numero = 37;

// const resultado = numero % 2 === 0 ? 'par' : 'impar'

//Evitar usar muitos if e else
if (numero % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}

nota = 7;

if (nota >= 7 && nota <= 10) {
  console.log("Aprovado");
} else if (nota >= 3 && nota < 7) {
  console.log("Recuperação");
} else if (nota >= 0 && nota < 3) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}

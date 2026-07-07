function ehprimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false; 
    }
  }
  return true;
}

console.log(ehprimo(10));
console.log(ehprimo(11));
console.log(ehprimo(12));

let c = 0;
for (let i = 1; i <= 100; i++) {

  if (i % 3 == 0 || i % 2 == 0) {
    console.log(i);
    c++;
  }
}
console.log("Cantidad de múltiplos de 2 o de 3: " + c);
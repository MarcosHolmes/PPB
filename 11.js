let numero = parseInt(prompt("Ingrese un número:"));
let contador = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 3 == 0) {
    console.log(i);
    contador++;
  }
}

console.log("Cantidad de múltiplos de 3: " + contador);

let frase = prompt("Ingresa una frase: ");

const letra = prompt("Cuál letra deseas ver cuantas veces se repite? ");

const newFrase = frase.toLowerCase();
let c = 0;

for(let i = 0; i < newFrase.length; i++) {
    if(newFrase.charAt(i) === letra.toLowerCase()) {
      c++;
    }
  }

console.log(`La letra "${letra}" aparece ${c} veces en la frase`);
  
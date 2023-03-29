let numeros = []; 

for(let i = 1; i <= 5; i++){
  let numero = prompt("Introduce el número " + i + ": ");
  numeros.push(Number(numero)); 
}

let mayor = numeros[0]; 
let menor = numeros[0];

for(let i = 1; i < numeros.length; i++){
  if(numeros[i] > mayor){ 
    mayor = numeros[i]; 
  }
  if(numeros[i] < menor){ 
    menor = numeros[i]; 
  }
}

console.log(`El mayor es: ${mayor}`);
console.log(`El menor es: ${menor}`);

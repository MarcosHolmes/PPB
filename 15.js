const n1 = parseInt(prompt("Ingresa el primer número: "));
const n2 = parseInt(prompt("Ingresa el segundo número: "));
let c = 0;
let cp = 0;
let si = 0;
for(let i=n1+1; i<n2; i++){
    console.log(i);
    c++;
    if (i % 2 == 0){
        cp++;
    }
    else{
        si = si + i;
    }
}
console.log("Fueron " + c + " números");
console.log(cp + " son pares");
console.log("Suma de impares: " + si);
let sp = 0;
let si = 0;

for(let i=1; i<=100; i++){
    console.log(i)

    if(i%2 == 0)
        sp = sp + i;
    else
        si = si + i;
}
console.log("Suma de pares: " + sp);
console.log("Suma de impares: " + si);
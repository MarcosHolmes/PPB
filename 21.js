let array = [];
for(let i=1; i<=100; i++)
    array.push(i);

console.log(array);

function par(array){
    let sp = 0;
    array.forEach(element => {
        if (element % 2 == 0)
            sp = sp + element;
    });

    return sp;
}

function impar(array){
    let si = 0;
    array.forEach(element => {
        if (element % 2 != 0)
            si = si + element;
    });

    return si;
}
console.log(`Suma de pares: ${par(array)} Suma de impares: ${impar(array)}` );
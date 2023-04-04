const n1 = parseInt(prompt("Ingresa un número: "));

function isPrimo(n1){
    if(n1 % 2 != 0)
        return true;
    else  
        return false;

}

function factorial(n1){
    if (n1 == 0)
        return 1;
    else
        return n1*factorial(n1-1);
}

function tablaMultiplicar(n1){
    for(let i=0; i<=10;i++){
        r = n1*i;
        console.log(`${n1} x ${i} = ${r}`);
    }
    return true;
}

console.log("Es primo? " + isPrimo(n1) + "\n");
console.log("El factorial es: " + factorial(n1)+"\n");
console.log(tablaMultiplicar(n1));

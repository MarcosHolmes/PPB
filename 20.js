const n = parseInt(prompt("Ingresa un número: "));

function factorial(n){
    if (n == 0)
        return 1;
    else  
        return n*factorial(n-1);
}

console.log(`El factorial de ${n} es ${factorial(n)}`);
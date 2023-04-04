const n1 = parseInt(prompt("Ingresa un número: "));
const n2 = parseInt(prompt("Ingresa otro número: "));

console.log("1.-Sumar\n2.-Restar\n3.-Multiplicar\n4.-Dividir\n");
const opc = parseInt(prompt("Ingresa una opción: "));

switch(opc){
    case 1:
        console.log(n1+n2);
        break;
    case 2:
        console.log(n1-n2);
        break;
    case 3:
        console.log(n1*n2);
        break;
    case 4:
        if(n2 == 0)
            console.log("No se puede dividir por 0");
        else
            console.log(n1/n2);
            break;
}
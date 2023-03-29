let c = 0;

while(true){
    const frase = prompt("Introduce una frase, si quieres salir solo pulsa enter");
    
    if(frase == "")
        break;

    c++;
}

console.log("Has introducido" + c + " frases");
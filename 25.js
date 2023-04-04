function romano(n) {
    const si = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const va = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let res = "";
    
    if (n < 1 || n >= 5000) {
      return "El número debe ser mayor o igual a 1 y menor a 5000";
    }
    
    for (let i = 0; i < va.length; i++) {
      while (n >= va[i]) {
        res += si[i];
        n -= va[i];
      }
    }
    
    return res;
  }
  
  const n = parseInt(prompt("ingrese un número menor a 5000: "));
  const nRomano = romano(n);
  console.log(`${n} en número romano es: ${nRomano}`);
  
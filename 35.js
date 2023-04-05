const filas = 4;
const columnas = 5;
let c = 0;

for (let i = 1; i <= filas; i++) {
  let fila = "";
  
  for (let j = 1; j <= columnas; j++) {
    fila += Math.floor(Math.random()*100+1) + "\t";

    c++;
  }
  console.log(fila);
}

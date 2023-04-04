const filas = 10;
const columnas = 10;
let c = 0;

for (let i = 1; i <= filas; i++) {
  let fila = "";
  
  for (let j = 1; j <= columnas; j++) {
    fila += c + "\t";

    c++;
  }
  console.log(fila);
}

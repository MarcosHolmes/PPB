const filas = 5;
const columnas = 4;
let c = 0;

function crearArray() {
    let array = [];
    for (let i = 0; i < 4; i++) {
      let fila = [];
      for (let j = 0; j < 5; j++) {
        fila.push(Math.floor(Math.random() * 100) + 1);
      }
      array.push(fila);
    }
    return array;
  }

function transpuesta(array) {
    let transpuesta = [];
    for (let i = 0; i < array[0].length; i++) {
      let fila = [];
      for (let j = 0; j < array.length; j++) {
        fila.push(array[j][i]);
      }
      transpuesta.push(fila);
    }
    return transpuesta;
  }

let array = crearArray();
console.log(array);
console.log("");
let arrayTranspuesta = transpuesta(array);
console.log(arrayTranspuesta);


var cal = [];
for (var i = 0; i < 10; i++) {
  cal.push(parseFloat(prompt("Ingresa la calificación de la asignatura " + (i + 1) + ":")));
}

var sum = 0;
for (var i = 0; i < cal.length; i++) {
  sum += cal[i];
}

var media = sum / cal.length;

console.log("La media de las cal es: " + media);
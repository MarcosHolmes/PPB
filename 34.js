var cal = [];
for (var i = 0; i < 10; i++) {
  cal.push(parseFloat(prompt("Ingresa la calificación de la asignatura " + (i + 1) + ":")));
}

const busq = parseFloat(prompt("¿Qué nota deseas buscar? "));

if (busq in cal)
    console.log("La nota si se encuentra en la lista");
else
    console.log("La nota no se encuentra en la lista");
const frase = prompt("introduce una frase:");

for (let i = 0; i < 5; i++) {

  let e = "";
  for (let j = 0; j < i * 4; j++) {
    e += " ";
  }
  console.log(e + frase);
}
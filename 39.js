var tab = [];
var numPag = 0;

for (var i = 0; i < 3; i++) {
  tab[i] = [];

  for (var j = 0; j < 4; j++) {
    tab[i][j] = [];

    for (var k = 0; k < 5; k++) {
      tab[i][j][k] = (numPag * 20) + (j * 5) + k + 1;
    }
  }

  numPag++;
}

for (var i = 0; i < 3; i++) {
  console.log("Página " + (i+1));
  for (var j = 0; j < 4; j++) {
    console.log(tab[i][j].join("\t"));
  }
  console.log("\n");
}

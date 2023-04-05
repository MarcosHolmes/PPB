function shellSort(mat) {
    var n = mat.length;
    var h = 1;
    while (h < n / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (var i = h; i < n; i++) {
        for (var j = i; j >= h && mat[j][0] < mat[j - h][0]; j -= h) {
          var temp = mat[j];
          mat[j] = mat[j - h];
          mat[j - h] = temp;
        }
      }
      h = Math.floor(h / 3);
    }
    return mat;
  }
  var matriz = [[3, 2, 1], [1, 3, 2], [2, 1, 3]];
  console.log("Matriz sin ordenar:");
  console.log(matriz);
  matriz = shellSort(matriz);
  console.log("Matriz ordenada por la primera columna:");
  console.log(matriz);
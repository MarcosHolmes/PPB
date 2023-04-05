  function fNotas(numCursos, numAlumnosPorCurso) {
    let notas = [];
    for (let i = 0; i < numCursos; i++) {
      let curso = [];
      for (let j = 0; j < numAlumnosPorCurso; j++) {
        let nota = Math.floor(Math.random()*10+1);
        curso.push(nota);
      }
      notas.push(curso);
    }
    return notas;
  }
  
  const curss = parseInt(prompt("Cuántos cursos serán? "));
  const alumn = parseInt(prompt("Cuántos alumnos por curso serán? "));
  let notas = fNotas(curss, alumn);

  console.table(notas);
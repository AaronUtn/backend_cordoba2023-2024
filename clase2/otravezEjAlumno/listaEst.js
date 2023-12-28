const mostrarListaEstudiantes = (estudiantes) => {
    console.log("cantidad de alumnos registrados");
    estudiantes.forEach((estudiante) => {
       console.log(`Nombre ${estudiante.nombre}, Edad ${estudiante.edad} `);
    });
   };

module.exports = {mostrarListaEstudiantes};
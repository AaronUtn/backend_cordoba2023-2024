const readlineSync = require('readline-sync');

const {mostrarListaEstudiantes} = require('./listaEst')

const registrarEstudiante = () => {
    const cantidadEstu = readlineSync.question("ingrese la cantidad de estudiantes a registrar:");
    const estudiantes = [];

    for(let i =0; i < cantidadEstu; i++){
        const nombre = readlineSync.question(`ingrese el nombre ${i}:`);
        const edad = readlineSync.question(`ingrese la edad ${nombre}:`);

        const estudiante = {
            nombre,
            edad 
        };;

        estudiantes.push(estudiante);
    }

    mostrarListaEstudiantes(estudiantes);
};



registrarEstudiante();
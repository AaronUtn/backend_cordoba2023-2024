//importo la biblioteca chance
const Chance = require('chance');

//crro una instancia de Chance
const chance = new Chance();

//Genero los datos aleatorios utilizando las funcnones de chance
const randomNombre = chance.name();
const randomEdad = chance.age();
const randomEmail = chance.email();

//imprimir los daoos aleatorios en la consola

console.log('Nombre aleatorio: ', randomNombre);
console.log('Edad aleatorio: ', randomEdad);
console.log('Email aleatorio: ', randomEmail);

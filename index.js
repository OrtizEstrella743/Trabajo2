// index.js - Archivo principal de Trabajo2HM
const Trabajo2HM = require('./app');

console.log("================================================");
console.log("       PROYECTO TRABAJO2HM - 10mo CUATRIMESTRE");
console.log("Gestión del Proceso de Desarrollo de Software");
console.log("================================================");

// Demostración de las funciones
console.log(Trabajo2HM.holaMundo());
console.log(Trabajo2HM.saludar("Desarrollador"));
console.log(`Suma de 7 + 8: ${Trabajo2HM.calcularSuma(7, 8)}`);

// Ejemplo con array
const numeros = [10, 20, 30, 40, 50];
console.log(`Promedio de [${numeros.join(', ')}]: ${Trabajo2HM.calcularPromedio(numeros)}`);

// Verificación de números pares
console.log(`¿El número 15 es par? ${Trabajo2HM.esPar(15) ? 'Sí' : 'No'}`);
console.log(`¿El número 22 es par? ${Trabajo2HM.esPar(22) ? 'Sí' : 'No'}`);

console.log("================================================");
console.log("✅ Proyecto ejecutado correctamente");
console.log("================================================");
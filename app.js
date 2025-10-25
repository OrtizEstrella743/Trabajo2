// app.js - Módulo principal del proyecto Trabajo2HM

class Trabajo2HM {
    static holaMundo() {
        return "¡Hola Mundo desde Trabajo2HM!";
    }

    static saludar(nombre = "Estudiante") {
        return `¡Hola, ${nombre}! Bienvenido al proyecto de Gestión del Desarrollo de Software`;
    }

    static calcularSuma(a, b) {
        return a + b;
    }

    static calcularPromedio(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0) {
            throw new Error("Se requiere un array con al menos un número");
        }
        const suma = numeros.reduce((acc, num) => acc + num, 0);
        return suma / numeros.length;
    }

    static esPar(numero) {
        return numero % 2 === 0;
    }
}

module.exports = Trabajo2HM;
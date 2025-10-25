// app.test.js - Pruebas en el mismo directorio
const Trabajo2 = require('./app');

describe('Proyecto Trabajo2 - Pruebas Unitarias', () => {
    describe('Función holaMundo', () => {
        test('debería retornar el mensaje correcto', () => {
            expect(Trabajo2.holaMundo()).toBe("¡Hola Mundo desde Trabajo2!");
        });
    });

    describe('Función saludar', () => {
        test('debería saludar con nombre por defecto', () => {
            expect(Trabajo2.saludar()).toBe("¡Hola, Estudiante! Bienvenido al proyecto de Gestión del Desarrollo de Software");
        });

        test('debería saludar con nombre personalizado', () => {
            expect(Trabajo2.saludar("María")).toBe("¡Hola, María! Bienvenido al proyecto de Gestión del Desarrollo de Software");
        });
    });

    describe('Función calcularSuma', () => {
        test('debería sumar números positivos', () => {
            expect(Trabajo2.calcularSuma(5, 3)).toBe(8);
            expect(Trabajo2.calcularSuma(10, 15)).toBe(25);
        });

        test('debería sumar números negativos', () => {
            expect(Trabajo2.calcularSuma(-2, -3)).toBe(-5);
            expect(Trabajo2.calcularSuma(-5, 10)).toBe(5);
        });

        test('debería sumar cero correctamente', () => {
            expect(Trabajo2.calcularSuma(0, 5)).toBe(5);
            expect(Trabajo2.calcularSuma(0, 0)).toBe(0);
        });
    });

    describe('Función calcularPromedio', () => {
        test('debería calcular promedio correctamente', () => {
            expect(Trabajo2.calcularPromedio([1, 2, 3])).toBe(2);
            expect(Trabajo2.calcularPromedio([10, 20, 30])).toBe(20);
        });

        test('debería lanzar error con array vacío', () => {
            expect(() => Trabajo2.calcularPromedio([])).toThrow("Se requiere un array con al menos un número");
        });
    });

    describe('Función esPar', () => {
        test('debería identificar números pares', () => {
            expect(Trabajo2.esPar(2)).toBe(true);
            expect(Trabajo2.esPar(10)).toBe(true);
            expect(Trabajo2.esPar(0)).toBe(true);
        });

        test('debería identificar números impares', () => {
            expect(Trabajo2.esPar(1)).toBe(false);
            expect(Trabajo2.esPar(7)).toBe(false);
            expect(Trabajo2.esPar(15)).toBe(false);
        });
    });
});
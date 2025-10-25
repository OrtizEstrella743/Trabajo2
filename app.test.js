const Trabajo2HM = require('../app');

describe('Proyecto Trabajo2HM - Pruebas Unitarias', () => {
    describe('Función holaMundo', () => {
        test('debería retornar el mensaje correcto', () => {
            expect(Trabajo2HM.holaMundo()).toBe("¡Hola Mundo desde Trabajo2HM!");
        });
    });

    describe('Función saludar', () => {
        test('debería saludar con nombre por defecto', () => {
            expect(Trabajo2HM.saludar()).toBe("¡Hola, Estudiante! Bienvenido al proyecto de Gestión del Desarrollo de Software");
        });

        test('debería saludar con nombre personalizado', () => {
            expect(Trabajo2HM.saludar("María")).toBe("¡Hola, María! Bienvenido al proyecto de Gestión del Desarrollo de Software");
            expect(Trabajo2HM.saludar("Carlos")).toContain("Carlos");
        });
    });

    describe('Función calcularSuma', () => {
        test('debería sumar números positivos', () => {
            expect(Trabajo2HM.calcularSuma(5, 3)).toBe(8);
            expect(Trabajo2HM.calcularSuma(10, 15)).toBe(25);
        });

        test('debería sumar números negativos', () => {
            expect(Trabajo2HM.calcularSuma(-2, -3)).toBe(-5);
            expect(Trabajo2HM.calcularSuma(-5, 10)).toBe(5);
        });

        test('debería sumar cero correctamente', () => {
            expect(Trabajo2HM.calcularSuma(0, 5)).toBe(5);
            expect(Trabajo2HM.calcularSuma(0, 0)).toBe(0);
        });
    });

    describe('Función calcularPromedio', () => {
        test('debería calcular promedio correctamente', () => {
            expect(Trabajo2HM.calcularPromedio([1, 2, 3])).toBe(2);
            expect(Trabajo2HM.calcularPromedio([10, 20, 30])).toBe(20);
        });

        test('debería lanzar error con array vacío', () => {
            expect(() => Trabajo2HM.calcularPromedio([])).toThrow("Se requiere un array con al menos un número");
        });

        test('debería lanzar error con parámetro no array', () => {
            expect(() => Trabajo2HM.calcularPromedio("no es array")).toThrow();
        });
    });

    describe('Función esPar', () => {
        test('debería identificar números pares', () => {
            expect(Trabajo2HM.esPar(2)).toBe(true);
            expect(Trabajo2HM.esPar(10)).toBe(true);
            expect(Trabajo2HM.esPar(0)).toBe(true);
        });

        test('debería identificar números impares', () => {
            expect(Trabajo2HM.esPar(1)).toBe(false);
            expect(Trabajo2HM.esPar(7)).toBe(false);
            expect(Trabajo2HM.esPar(15)).toBe(false);
        });
    });
});
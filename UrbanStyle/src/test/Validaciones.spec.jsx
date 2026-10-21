import {validarCorreoElectronico, validarLargoPass, validarTelefono} from "../utils/validaciones.js"

describe('Validaciones de UrbanStyle', () => {
    it("Acepta correo con formato valido y rechaza formatos incorrectos", () => {
        expect(validarCorreoElectronico('usuario@urbanstyle.cl')).toBeTrue();
        expect(validarCorreoElectronico('usuariourbanstyle')).toBeFalse();
    });

    it("Permite contraseñas entre 5 a 12 caracteres", () => {
        expect(validarLargoPass('12345')).toBeTrue();
        expect(validarLargoPass('1234')).toBeFalse();
        expect(validarLargoPass('1234567890123')).toBeFalse();
    });

    it("Valida el formato chileno del celular con su prefijo y digitos", () => {
        expect(validarTelefono('+56912345678')).toBeTrue();
        expect(validarTelefono('912345678')).toBeFalse();
    })
})
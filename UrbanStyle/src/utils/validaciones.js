export function validarLargo(valor) {
    return valor.trim().length >= 3;
}

export function validarCorreoElectronico(email) {
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
}

export function validarLargoPass(password){
    return password.length >=5 && password.length <=12;
}

export function validarIgualdad(pass1, pass2){
    return pass1 == pass2 && pass1 !== '';
}

export function validarDireccion(direccion){
    return direccion.trim().length >= 8
}

export function validarTelefono(phone){
    var exprecionChilena = /^\+569\d{8}$/;
    return exprecionChilena.test(phone)
}

export function validarSelect(valor) {
    return valor !== null && valor !== "";
}
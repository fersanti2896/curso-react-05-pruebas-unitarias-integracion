// Template Strings

const nombre = 'Fernando';
const apellido = 'Nicolás';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Nombre completo: ${nombre} ${apellido}`;

// console.log(nombreCompleto);

function getSaludo(nombre = 'Fersa!') {
    return 'Hola ' + nombre;
}

// console.log(`Este es un saludo ${getSaludo('Wendy')}`);
export {
    getSaludo
}
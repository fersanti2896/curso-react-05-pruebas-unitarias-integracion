
// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar);
console.log(saludar('Fernando nicolás'));
console.log(saludar2('Wendy Torres'));
console.log(saludar3('María Dae'));
console.log(saludar4());

// Para retornar un objeto se usa los paréntesis
const getUser = () => ({
        id: 'ABC123',
        username: 'fersanti2896'
})

const user = getUser();
console.log(user);

// 1.Transformar a una función Flecha. 
// 2. Tiene que retornar un objeto implícito
// function getUsuarioActivo(nombre){
//     return {
//         id: 'ABC576',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
    id: 'ABC576',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
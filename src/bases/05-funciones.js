
// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

// Para retornar un objeto se usa los paréntesis
const getUser = () => ({
        id: 'ABC123',
        username: 'fersanti2896'
});

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

export {
    getUser, 
    getUsuarioActivo
}
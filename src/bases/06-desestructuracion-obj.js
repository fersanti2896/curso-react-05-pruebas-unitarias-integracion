
// Desestructuración de objetos o asignación desestructurante
const persona = {
    nombre: 'Tony', 
    edad: 45, 
    clave: 'Iroman'
};

// Extrae lo que se pone en las llaves el objeto
const {nombre, edad, clave} = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) => {
//     const {nombre, edad, clave} = usuario;

//     console.log(nombre, edad, clave);
// };

// retornaPersona(persona);

const usContext = ({nombre, edad, rango = 'Capitán', clave}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad, 
        latlng: {
            lat: 14.12122,
            lng: -13.21212
        }
    }
};

// Extraer objetos anidados
const {nombreClave, anios, latlng: {lat, lng}} = usContext(persona);
// console.log(nombreClave, anios, lat, lng);

export {
    usContext
}
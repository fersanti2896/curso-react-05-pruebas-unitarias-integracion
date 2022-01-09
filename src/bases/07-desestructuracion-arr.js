
// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Gohan'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3] = personajes;
// console.log(p3);

const retornaArreglos = () => {
    return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglos();
// console.log(letras, numeros);

const usState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

export {
    retornaArreglos
}
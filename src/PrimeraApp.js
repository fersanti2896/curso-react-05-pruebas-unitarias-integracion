/* Functionals Components */
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo} ) => {
    // const saludo2 = { name: 'Fernado', age: 24};

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            <p> { subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
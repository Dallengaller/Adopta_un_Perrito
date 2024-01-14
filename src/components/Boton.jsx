/* src/components/Boton.jsx */
import React from 'react'; // Asegúrate de importar React
import Button from 'react-bootstrap/Button';

const Boton = ({ colorButton, textButton }) => {
    return (
        <>
            <Button variant={colorButton}>{textButton}</Button>
        </>
    );
};

export default Boton;

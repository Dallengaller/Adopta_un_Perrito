/* src/components/Tags.jsx */
import React from 'react';
import Button from 'react-bootstrap/Button';

const Tags = ({ colorButton, textButton }) => {
    return (
        <>
            <Button variant={colorButton}>{textButton}</Button>
        </>
    );
};

export default Tags;

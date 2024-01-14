/* src/components/MyCard.jsx */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ image, title, colorButton, textButton, description }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{description}</p> {/* Agregada la etiqueta <p> para el texto */}
                    <Tags colorButton={colorButton} textButton={textButton} />
                </Card.Body>
            </Card>
        </>
    );
};

export default MyCard;

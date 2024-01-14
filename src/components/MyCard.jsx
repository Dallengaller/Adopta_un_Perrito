/* src/components/MyCard.jsx */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ image, title, textButton, badgeVariant, description }) => {
    return (
        <>
            <Card style={{ width: "18rem", margin: "30px 0" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{description}</p>
                    <Tags text={textButton} variant={badgeVariant} />
                </Card.Body>
            </Card>
        </>
    );
};

export default MyCard;


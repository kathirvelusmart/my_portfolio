import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
import { openInNewTab } from '../CommonFunctions';

function CardComponent({ cardDetails }) {
    return (
        <Card style={{ width: '21rem', marginBottom: 20 }}>
            <Card.Img variant="top" src={cardDetails.certificateImage} />
            <Card.Body>
                <Card.Title>{cardDetails.certificateTitle}</Card.Title>
                <Card.Text>
                    {cardDetails.courseContent}
                </Card.Text>
                <Button variant="primary" onClick={() => openInNewTab(cardDetails.certificateLink)}>View Certificate</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent
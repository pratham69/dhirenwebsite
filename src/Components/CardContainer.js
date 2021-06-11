import React from 'react'
import {Card} from 'react-bootstrap'

const CardContainer = ({card}) => {
    return (
        <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title><h1 style={{fontSize:'2rem'}} className="text-center">{card.title}</h1></Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardContainer

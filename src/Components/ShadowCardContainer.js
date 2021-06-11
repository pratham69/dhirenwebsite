import React from 'react'
import {Card} from 'react-bootstrap'
const ShadowCardContainer = ({children}) => {
    return (
        <Card className="shadow-lg">
        <Card.Body>{children}</Card.Body>
        </Card>
    )
}

export default ShadowCardContainer

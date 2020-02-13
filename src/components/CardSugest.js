import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import NavSugest from './NavSugest'
import ActionCardSugest from './ActionCardSugest'
import CardSugestImage from './CardSugestImage'

class CardSugest extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <Col xs={3}>
                    </Col>
                    <Col xs={8}>
                    <CardSugestImage/>
                    <ActionCardSugest/>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <NavSugest/>
                </Row>
            </Container>
            
        )
    }
}

export default CardSugest
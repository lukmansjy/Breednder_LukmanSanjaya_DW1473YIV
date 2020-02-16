import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CardSugestImage from './CardSugestImage'

class CardSugest extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    {/* <Col xs={0}>
                    </Col> */}
                    <Col xs={11}>
                    <CardSugestImage/>
                    {/* <ActionCardSugest/> */}
                    </Col>
                    <Col xs={1}>
                    </Col>
                    {/* <NavSugest/> */}
                </Row>
            </Container>
            
        )
    }
}

export default CardSugest
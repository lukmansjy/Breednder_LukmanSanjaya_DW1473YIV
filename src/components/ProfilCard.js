import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProfilCardView from './ProfilCardView'

class ProfilCard extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <Col xs={3}>
                    </Col>
                    <Col xs={8}>
                        <ProfilCardView/>
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default ProfilCard
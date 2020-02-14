import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ListImage from '../components/ListImage'
import CardSugest from '../components/CardSugest'

class IndexPage extends Component{
    render(){
        return(
            <Container fluid={true} className="indexPage">
                <Row>
                    <Col xs={3} className="sideLeft">
                        <ListImage/>
                    </Col>
                    <Col xs={9} className="sideRight">
                        <CardSugest />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default IndexPage
import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ListImage from '../components/ListImage'
import CardSugest from '../components/CardSugest'

class IndexPage extends Component{
    render(){
        return(
            <Container fluid={true} className="indexPage">
                <Row>
                    <Col xs={3} className="profil">
                        <ListImage/>
                    </Col>
                    <Col xs={9} className="sugest">
                        <CardSugest />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default IndexPage
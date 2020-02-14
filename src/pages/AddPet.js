import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProfilDetail from '../components/ProfilDetail'
import ProfilCardEdit from '../components/ProfilCardEdit'

class Profil extends Component {
    render(){
        return(
            <Container fluid={true} className="indexPage">
                <Row>
                    <Col xs={3} className="sideLeft">
                        <ProfilDetail addpet="add"/>
                    </Col>
                    <Col xs={9} className="sideRight">
                    <Container fluid={true}>
                        <Row>
                            <Col xs={3}>
                            </Col>
                            <Col xs={8}>
                                <ProfilCardEdit/>
                            </Col>
                            <Col xs={1}>
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profil
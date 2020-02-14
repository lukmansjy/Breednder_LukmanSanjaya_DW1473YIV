import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProfilDetail from '../components/ProfilDetail'
import ProfilCard from '../components/ProfilCard'

class Profil extends Component {
    render(){
        return(
            <Container fluid={true} className="indexPage">
                <Row>
                    <Col xs={3} className="sideLeft">
                        <ProfilDetail/>
                    </Col>
                    <Col xs={9} className="sideRight">
                        <ProfilCard />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profil
import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProfilDetail from '../components/ProfilDetail'
import ProfilCard from '../components/ProfilCard'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) =>{
    console.log('DATA REDUX PROFILE', state)
    return{
        user: state.users,
        petsMe: state.pets.petsMe,
        petsMatch: state.pets.matchs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createPeyment: (data)=> dispatch( createPeyment(data) ),
        // userLoginToken: (data)=> dispatch( userLoginToken(data) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil)
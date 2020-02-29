import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProfilCardView from './ProfilCardView'
import ProfilCardEdit from './ProfilCardEdit'
import { connect } from 'react-redux'

class ProfilCard extends Component{
    constructor(){
        super()
        this.state = {
            editProfil: false
        }
    }
    handleEditProfile = () =>{
        this.setState({
            editProfil: true
        })
    }
    handleEditProfileSave = () =>{
        this.setState({
            editProfil: false
        })
    }
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <Col xs={3}>
                    </Col>
                    <Col xs={8}>
                        {this.state.editProfil ? <ProfilCardEdit handleSave={this.handleEditProfileSave}/> : <ProfilCardView dataPet={this.props.petProfileAktif} hendleEdit={this.handleEditProfile}/>}
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('REDUX PROFIL DETAIL',state)
    return{
        user: state.users,
        petsMe: state.pets.petsMe,
        petsMatch: state.pets.matchs,
        petProfileAktif: state.pets.petProfileAktif
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // destroyStore: ()=> dispatch( destroyStore() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilCard)
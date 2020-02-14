import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProfilCardView from './ProfilCardView'
import ProfilCardEdit from './ProfilCardEdit'

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
                        {this.state.editProfil ? <ProfilCardEdit handleSave={this.handleEditProfileSave}/> : <ProfilCardView hendleEdit={this.handleEditProfile}/>}
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default ProfilCard
import React, {Component, Fragment} from 'react'
import {Container, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap'
import ImageCardMatch from './ImageCardMatch'
import {Link, Redirect} from 'react-router-dom'
import dataJson from '../assets/data/db.json'
import { connect } from 'react-redux'

import {getPetsMatch, setPetProfileActive} from '../_actions/petsA'
import {baseUrl} from '../config'

class ListImage extends Component{
    constructor(){
        super()

        this.state = {
            activePetName: null,
            activePetPhoto: `${baseUrl}uploads/pet/pet-img.png`,
            petProfileActive: [],
            redirectProfile: null
        }
    }

    // Mengatur pet aktif ketika memilih dropdwon
    handleSelect = (eventKey) => {
        this.setPetActive(eventKey);
    }

    setPetActive(id = 0){
        if(this.props.petsMe.length > 0){
            this.setState({
                activePetName: this.props.petsMe[id].name,
                petProfileActive: this.props.petsMe[id]
            })
            if(this.props.petsMe[id].photo != null){
                this.setState({
                    activePetPhoto: this.props.petsMe[id].photo
                })
            }
            this.props.getPetsMatch(this.props.petsMe[id].id)
        }
    }

    handleClickSetPetMeActive = ()=>{
        this.props.setPetProfileActive(this.state.petProfileActive)
        this.setState({
            redirectProfile: true
        })
    }

    componentDidMount(){
        this.setPetActive()
    }

    render(){
        // console.log(this.state.petIdActive)
        const {petsMe, petsMatch} = this.props

        // Menagutir pet aktif ketika komponen dimount gagal load
        if(this.state.activePetName == null){
            this.setPetActive()
        }

        return(
            <Fragment>
                {this.state.redirectProfile ? <Redirect to="/profil"/> : null}
                <div className="profilNav">
                    {/* <Link to="/profil"> */}
                        {/* <img src={require('../../src/assets/icons/cats-couple-love.png')} className="myImage hoverZoom1-1" alt="Logo"/> */}
                        <div onClick={this.handleClickSetPetMeActive} className="myPetImageContainer">
                            <img src={this.state.activePetPhoto} className="myImage hoverZoom1-1" alt="Logo"/>
                        </div>
                    {/* </Link> */}
                    <DropdownButton id="dropdown-item-button" title={this.state.activePetName} onSelect={this.handleSelect} className="dropdwonPets">
                        {petsMe.map((petMe, index)=>(
                            <Dropdown.Item as="button" eventKey={index}>
                                <div className="myPetListWrapper">
                                    <span className="myPetListContainer">
                                        <img src={petMe.photo ? petMe.photo : `${baseUrl}uploads/pet/pet-img.png`} className="myPetImage hoverZoom1-1" alt="Logo"/>
                                    </span>
                                    <span className="petNames">{petMe.name}</span>
                                </div>
                                
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    {/* <span>Gary Cat</span>
                    <img src={require('../assets/icons/arrow-down-icon.png')} alt="nav bottom"/> */}
                </div>
                <div className="scrollsideLeft">
                    <p className="labelBorderButn">Match</p>
                    <Container fluid={true}>
                        <Row>
                            {petsMatch.length > 0 ?
                                <Fragment>
                                    {petsMatch.map( (match, key) =>
                                        (
                                            <Col xs={4} className="imgMatchContain" key={key}>
                                                <ImageCardMatch  data={match}/>
                                            </Col>
                                            )
                                        )
                                    }
                                </Fragment>
                            : <p>No Match Data</p>
                            }
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('mapStateToProps From List IMage',state)
    return{
        petsMe: state.pets.petsMe,
        petsMatch: state.pets.matchs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPetsMatch: (idPet)=> dispatch( getPetsMatch(idPet) ),
        setPetProfileActive: (dataPet)=> dispatch( setPetProfileActive(dataPet) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListImage)
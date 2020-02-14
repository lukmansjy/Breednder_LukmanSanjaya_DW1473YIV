import React, { Fragment } from 'react'
import {Container, Row} from 'react-bootstrap'
import ProfilPhotoEdit from './ProfilPhotoEdit'

const ProfilCardEdit = (props)=>{
    return(
        <Fragment>
            <div className="cardFrontImg">
                <div className="profilImgCard">
                    <div className="containerEditProfil">
                        <Container fluid={true}>
                                <Row>
                                    <ProfilPhotoEdit img={require('../assets/images/home-img.jpg')} />
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                    <ProfilPhotoEdit/>
                                </Row>
                            </Container>
                    </div>
                </div>
                
            </div>
            <div className="contentEditProfil">
                <h5>Edit</h5>
                <h6>Name Pet</h6>
                <input className="inputText" type="text"/>
                <h6>Name Pet</h6>
                <input className="inputText" type="text"/>
                <h6>Gender</h6>
                <select className="myInputSelect mt-8">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <div className="containerBtnSave">
                    <div className="contentMyBtnMini mb-12">
                        <button className="myBtnMini" onClick={props.handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfilCardEdit
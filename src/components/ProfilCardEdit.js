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
                <h5>Details</h5>
                <h6>Name Pet</h6>
                <input className="inputText" type="text"/>
                <h6>Name Pet</h6>
                <input className="inputText" type="text"/>
                <h6>Gender</h6>
                <select className="myInputSelect mt-8 mb-12">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <h6>Age</h6>
                <select className="myInputSelect mt-8 mb-12">
                    <option value="Child">Child</option>
                    <option value="Teenager">Teenager</option>
                    <option value="Adult">Adult</option>
                </select>
                <h6>About Pet</h6>
                <textarea rows="3"></textarea>
                <div className="containerBtnSave">
                    <div className="contentMyBtnMini mb-20">
                        <button className="myBtnMini" onClick={props.handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfilCardEdit
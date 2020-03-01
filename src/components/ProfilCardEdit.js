import React, { Fragment, useState, useEffect } from 'react'
import {Container, Row} from 'react-bootstrap'
import ProfilPhotoEdit from './ProfilPhotoEdit'
import { connect } from 'react-redux'

import {baseUrlApi} from '../config'
import {dataAges, dateGender} from '../config/datas'
import {editPet, getAllPetsMe} from '../_actions/petsA'
import Loading from './Loading'

const ProfilCardEdit = (props)=>{
    const [state, setState] = useState({
        dataSet: false,
        breeder: '',
        namePet: '',
        gender: '',
        ageId: '',
        aboutPet: '',
        photo: `${baseUrlApi}/uploads/pet/pet-img.png`,
        formErrMsg: null,
        editClickSubmit: false
    })

    if(props.petProfileAktif && state.dataSet == false){
        setState({
            ...state,
            breeder: props.petProfileAktif.user.breeder,
            namePet: props.petProfileAktif.name,
            gender: props.petProfileAktif.gender,
            ageId: props.petProfileAktif.age.id,
            aboutPet: props.petProfileAktif.about_pet,
            dataSet: true,
        })
        
    }

    useEffect(()=>{
        if(props.petProfileAktif.photo){
            setState({
                ...state,
                photo: props.petProfileAktif.photo
            })
        }
    }, [state.dataSet])

    useEffect(()=>{
        if(props.petEditSubmit && state.editClickSubmit){
            props.getAllPetsMe()
            props.handleSave()
        }
    })

    let handleInput = (event) =>{
        setState({
            ...state,
            [event.target.name]: event.target.value,
            formErrMsg: null
        })
    }

    const handleSave = ()=>{
        let formErr = false
        if(state.breeder.length <= 0 || state.namePet.length <= 0){
            formErr = true
            setState({
                ...state,
                formErrMsg: 'Nama Breeder atau Pet tidak boleh kosong!'
            })
        }

        let dataEditPet = {
                name: state.namePet,
                gender: state.gender,
                species: {
                    id: props.petProfileAktif.species.id
                },
                age: {
                    id: state.ageId
                },
                about_pet: state.aboutPet
            }
        if(!formErr){
            setState({
                ...state,
                editClickSubmit: true
            })
            props.editPet(dataEditPet, props.petProfileAktif.id)
        }
    }

    console.log('Edit Profil', props.petProfileAktif)
    return(
        <Fragment>
            <div className="cardFrontImg">
                <div className="profilImgCard">
                    <div className="containerEditProfil">
                        <Container fluid={true}>
                                <Row>
                                    <ProfilPhotoEdit img={state.photo} />
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
                <input className="inputText" type="text" name="namePet" onChange={handleInput} value={state.namePet}/>
                <h6>Breeder</h6>
                <input className="inputText" type="text" name="breeder" onChange={handleInput} value={state.breeder}/>
                <h6>Gender</h6>
                <select onChange={handleInput} name="gender" className="myInputSelect mt-8 mb-12">

                    {dateGender && state.gender ? 
                                    
                            dateGender.map((gender, index)=>(

                            <Fragment>
                                { gender == state.gender ?
                                    <option selected value={gender}>{gender}</option>  :
                                    <option value={gender}>{gender}</option>
                                }
                            </Fragment>
                            
                        ))
                        
                    : null}
                </select>
                <h6>Age</h6>
                <select onChange={handleInput} name="ageId" className="myInputSelect mt-8 mb-12">

                    {dataAges && state.ageId ? 
                                    
                        dataAges.map((age, index)=>(

                            <Fragment>
                                { (index+1) == state.ageId ? 
                                    <option selected value={index+1}>{age}</option>  :
                                    <option value={index+1}>{age}</option>
                                }
                            </Fragment>
                            
                        ))
                        
                    : null}
                    
                </select>
                <h6>About Pet</h6>
                <textarea rows="3" onChange={handleInput} name="aboutPet" value={state.aboutPet}></textarea>
                <div className="containerBtnSave">
                    <div className="contentMyBtnMini mb-20">
                        
                        <p>{state.formErrMsg}</p>
                        
                        {props.petIsLoading ? <Loading/> : <button className="myBtnMini" onClick={handleSave}>Save</button>}

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) =>{
    return{
        petProfileAktif: state.pets.petProfileAktif,
        petEditSubmit: state.pets.petEditSubmit,
        petIsLoading: state.pets.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editPet: (data, idPet)=>dispatch( editPet(data, idPet)),
        getAllPetsMe: ()=> dispatch( getAllPetsMe() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilCardEdit)
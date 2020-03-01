import React, {Component, Fragment} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {destroyStore} from '../_actions/usersA'
import {baseUrlApi} from '../config'
import {dataAges} from '../config/datas'

class ProfilDetail extends Component{
    constructor(){
        super()
        this.state = {
            maxDistance: 0,
            valueRange: 0,
            logOut: false,
            dataSet: false,
            phone: '',
            photoPet: '',
            email: '',
            age: null,
            species: ''
        }
    }
    handleDistance =(event)=>{
        this.setState({
            valueRange: event.target.value,
            maxDistance: (event.target.value / 5).toFixed()
        });
    }

    handleLogout = ()=>{
        window.localStorage.removeItem('token')
        this.props.destroyStore()
        this.setState({
            logOut: true
        })
    }
    render(){
        console.log('DATA AGE', dataAges)
        console.log('Profil Detail',this.props.petProfileAktif)
        const {user, photo, age, species} = this.props.petProfileAktif
        const {phone, email} = this.state
        if(this.props.user.loginStatus && this.state.dataSet == false){
            if(photo == null){
                this.setState({
                    phone: user.phone,
                    photoPet: `${baseUrlApi}/uploads/pet/pet-img.png`,
                    dataSet: true,
                    email: user.email,
                    age: age,
                    species: species.name
                })
            }else{
                this.setState({
                    phone: user.phone,
                    photoPet: photo,
                    dataSet: true,
                    email: user.email,
                    age: age,
                    species: species.name
                })
            }
        }
        return(
            <Fragment>
                {this.props.user.loginStatus ? null : <Redirect to="/"/>}
                {this.state.logOut ? <Redirect to='/'/> : null}
                <div className="profilNav">

                    
                    {/* <div className="profilNav">
                        <div onClick={this.handleClickSetPetMeActive} className="myPetImageContainer">
                            <img src={this.state.activePetPhoto} className="myImage hoverZoom1-1" alt="Logo"/>
                        </div> */}

                    
                    <Link to={this.props.addpet? '/profil': '/index'}>
                        <img className="hoverZoom1-8 navProfileRight" src={require('../assets/icons/arrow-left-icon.png')} alt="nav bottom"/>
                    </Link>
                    <div className="myPetImageContainerProfil">
                        <img src={this.state.photoPet} className="myImageProfil" alt="Logo"/>
                    </div>
                    <span>{this.props.addpet? 'Add Pet': 'Profile Pet'}</span>
                </div>
                <div className="profilDetail">
                    <div className="scrollsideLeft">
                        <p className="labelBig">Account Settings</p>  
                        <div className="labelDetailprofil marginLebelProfil">
                            <span className="left">Email</span>
                            <span className="right">{email}</span>
                        </div>
                        <div className="labelDetailprofil marginLebelProfil">
                            <span className="left">Phone</span>
                            <span className="right">{phone}</span>
                        </div>
                        <p className="labelBig">Dicovery Settings</p>  
                        <div className="labelDetailprofil">
                            <span className="left">Maximum Distance</span>
                            <span className="right">{this.state.maxDistance} Km</span>
                        </div>
                        <div className="labelDetailprofil">
                            <div className="mySliderRangeContainer">
                                <input type="range" className="mySliderRange"
                                style={{background: `linear-gradient(-90deg, rgba(${255 - (this.state.valueRange * 2.5)}, ${this.state.valueRange * 2.5} ,0,1) 0%, rgba(236,122,122,0.25) 100%)`}} 
                                onChange={this.handleDistance} value={this.state.valueRange} />
                            </div>
                        </div>
                        <div className="labelDetailprofil">
                            <span className="left">Age</span>
                        </div>
                        <div className="labelDetailprofil">
                            <select className="myInputSelect">

                                {dataAges && this.state.age ? 
                                    
                                    dataAges.map((age, index)=>(

                                        <Fragment>
                                            { (index+1) == this.state.age.id ? 
                                                <option selected value={index+1}>{age}</option>  :
                                                <option value={index+1}>{age}</option>
                                            }
                                        </Fragment>
                                        
                                    ))
                                    
                                : null}

                            </select>  
                        </div>
                        <div className="labelDetailprofil">
                            <span className="left">Species</span>
                        </div>
                        <div className="labelDetailprofil">
                            <select className="myInputSelect">

                                {this.props.species ? 
                                    
                                    this.props.species.map((species)=>(

                                        <Fragment>
                                            {this.state.species == species.name ? 
                                                <option selected value={species.id}>{species.name}</option>  :
                                                <option value={species.id}>{species.name}</option>
                                            }
                                        </Fragment>
                                        
                                    ))
                                    
                                : null}

                            </select>  
                        </div>
                        <div className="labelDetailprofil" style={{paddingBottom: 60}}>
                            <div className="contentMyBtnMini">
                                <Link to="/">
                                    <button className="myBtnMini bgDanger" onClick={this.handleLogout}>Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('REDUX PROFIL DETAIL',state)
    return{
        user: state.users,
        petsMe: state.pets.petsMe,
        petsMatch: state.pets.matchs,
        petProfileAktif: state.pets.petProfileAktif,
        species: state.species.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        destroyStore: ()=> dispatch( destroyStore() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilDetail)
import React, {Component} from 'react'
import {Modal, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {userLogin, userLoginToken, userRegister} from '../_actions/usersA'
import {getAllSpecies} from '../_actions/speciesA'
import Loading from '../components/Loading'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            modalLogin: false,
            modalRegister: false,
            tokenSaved: false,
            regBreederMsg: '',
            regEmailMsg: '',
            regPasswordMsg: '',
            regPhoneMsg: '',
            regAddressdMsg: '',
            regPetNamedMsg: '',
            regErr: false
        }
    }

    handleShowLogin = ()=>{
        this.setState({
            modalLogin: true
        })
    }
    handleHideLogin = ()=>{
        this.setState({
            modalLogin: false
        })
    }

    handleShowRegister = ()=>{
        this.setState({
            modalRegister: true
        })
    }
    handleHideRegister = ()=>{
        this.setState({
            modalRegister: false
        })
    }

    handleLogin = (event)=> {
        event.preventDefault()
        let dataLogin = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value

        }
        this.props.userLogin(dataLogin)
    }

    handleRegister = (event)=>{
        event.preventDefault()

        // Reset State
        this.setState({
            regBreederMsg: '',
            regEmailMsg: '',
            regPasswordMsg: '',
            regPhoneMsg: '',
            regAddressdMsg: '',
            regPetNamedMsg: '',
            regErr: false
        })

        let {breeder, email, password, phone, address, petName, petgender, spesiesId, ageId} = event.target.elements
        let validData = true
        if(breeder.value.length <= 5){
            validData = false
            this.setState({
                regBreederMsg: 'Breeder Harus Lebih dari 5 karakter!'
            })
        }
        if(email.value.length <= 1){
            validData = false
            this.setState({
                regEmailMsg: 'Email tidak boleh kodong!'
            })
        }
        if(password.value.length <= 6){
            validData = false
            this.setState({
                regPasswordMsg: 'Password Harus Lebih dari 6 karakter!'
            })
        }
        if(phone.value.length <= 6){
            validData = false
            this.setState({
                regPhoneMsg: 'Sepertinya no telepon tidak falid!'
            })
        }
        if(address.value.length <= 1){
            validData = false
            this.setState({
                regAddressdMsg: 'Alamat harus diisi!'
            })
        }
        if(petName.value.length <= 1){
            validData = false
            this.setState({
                regPetNamedMsg: 'Nama Pet harus diisi!'
            })
        }
        if(validData){
            let dataRegister = {
                breeder: breeder.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                address: address.value,
                pet: {
                    name: petName.value,
                    gender: petgender.value,
                    spesies: {
                        id: spesiesId.value
                    },
                    age: {
                        id: ageId.value
                    }
                }
            }
            console.log(dataRegister)
            this.props.userRegister(dataRegister)
        }else{
            this.setState({
                regErr: true
            })
        }
    }

    componentDidMount(){
        this.props.getAllSpecies()
        const token = window.localStorage.getItem('token')
        if(token !== null){
            if(this.props.user.data.length == 0){
                const data = {
                    token: token
                }
                this.props.userLoginToken(data)
            }
        }
    }

    render(){
        const {data, dataError, isLoading, loginStatus, error} = this.props.user

        // Cek Token Setelah Berhasil Login
        if(data.token != null){
            if( window.localStorage.getItem('token') !== null){
                this.setState({
                    tokenSaved: true
                })
            }
        }
        return(
            <div className="homeContain">
                {loginStatus ? <Redirect to="/index"/> : null}
                <div className="homeGradient">
                    <div className="nav">
                        <div className="brand">
                            <img src={require('../../src/assets/icons/cats-couple-love.png')} alt="PetsMatch Logo" />
                            <span>PetsMatch</span>
                        </div>
                        <button className="myButtonMenu" onClick={this.handleShowLogin}>Login</button>
                    </div>
                    <div className="msg">
                        <div>
                            <p className="slogan">Swipe Right.</p>
                            <p className="slogan">Make your pet happy</p>
                        </div>
                        <div>
                            <p className="term">by clicking enter, you agree to <u>our terms</u>. Learn how we process your data in our <u>Privacy Policy</u> and <u>Cookie Policy</u>.</p>
                        </div>
                        <div className="containBtnRegister">
                            <button className="myButton" onClick={this.handleShowRegister}>Register</button>
                        </div>
                    </div>

                    {/* ###### MODAL ###### */}
                    {/* MODAL LOGIN */}
                    <Modal show={this.state.modalLogin} onHide={this.handleHideLogin} className="modalContent">
                        <div>
                            <span className="modalTitle">Login</span>
                            <button className="btnModalClose" onClick={this.handleHideLogin}>X</button>
                        </div>
                        <form onSubmit={this.handleLogin}>
                            <div className="formModal">
                            
                                <Form.Control name="email" type="email" placeholder="Email" />
                                <Form.Control name="password"  type="password" placeholder="Password" />
                                {/* <Link to="/index"> */}
                                {dataError.data ? <p className="textError">{dataError.data.message}</p> : null}
                                {dataError.errorNetwork ? <p className="textError">Error Network API</p> : null}
                                
                                {isLoading ? <Loading/> : <button type="submit" className="myButton">Login</button>}
                                    
                                    {/* onClick={()=>this.props.userLogin({email: this.state.email, password: this.state.password})} */}
                                {/* </Link> */}

                            
                            </div>
                        </form>
                    </Modal>

                    {/* MODAL Register */}
                    <Modal show={this.state.modalRegister} onHide={this.handleHideRegister} className="modalContent">
                        <div>
                            <p className="modalTitle">Register</p>
                            <button className="btnModalClose" onClick={this.handleHideRegister}>X</button>
                        </div>
                        <form onSubmit={this.handleRegister}>
                            <div className="formModal formRegister">
                                <p className="labelRegister">Breeder</p>
                                <span className="msgInputErr">{this.state.regBreederMsg}</span>
                                <Form.Control className={this.state.regBreederMsg.length > 0 ? 'is-invalid': ''} name="breeder" type="text" placeholder="Your Name" />

                                <p className="labelRegister">Email</p>
                                <span className="msgInputErr">{this.state.regEmailMsg}</span>
                                <Form.Control className={this.state.regEmailMsg.length > 0 ? 'is-invalid': ''} name="email" type="email" placeholder="Email" />

                                <p className="labelRegister">Password</p>
                                <span className="msgInputErr">{this.state.regPasswordMsg}</span>
                                <Form.Control className={this.state.regPasswordMsg.length > 0 ? 'is-invalid': ''} name="password" type="password" placeholder="Password" />

                                <p className="labelRegister">Phone Breeder</p>
                                <span className="msgInputErr">{this.state.regPhoneMsg}</span>
                                <Form.Control className={this.state.regPhoneMsg.length > 0 ? 'is-invalid': ''} name="phone" type="number" placeholder="Your Phone Number" />

                                <p className="labelRegister">Adress Breeder</p>
                                <span className="msgInputErr">{this.state.regAddressdMsg}</span>
                                <Form.Control className={this.state.regAddressdMsg.length > 0 ? 'is-invalid': ''} name="address" type="text" placeholder="Adrees Breeder" />

                                <p className="labelRegister">Name Pet</p>
                                <span className="msgInputErr">{this.state.regPetNamedMsg}</span>
                                <Form.Control className={this.state.regPetNamedMsg.length > 0 ? 'is-invalid': ''} name="petName" type="text" placeholder="Name Pet" />

                                <p className="labelRegister">Gender Pet</p>
                                <Form.Control name="petgender" as="select" style={{marginBottom: 15}}>
                                    <option value="Male">Male</option>
                                    <option value="Famale">Famale</option>
                                </Form.Control>

                                <p className="labelRegister">Species Pet</p>
                                <Form.Control name="spesiesId" as="select" style={{marginBottom: 15}}>
                                    {this.props.species ? 
                                    
                                    this.props.species.map((species)=>(
                                        <option value={species.id}>{species.name}</option>
                                    ))
                                    
                                    : null}
                                </Form.Control>

                                <p className="labelRegister">Age Pet</p>
                                <Form.Control name="ageId" as="select" style={{marginBottom: 15}}>
                                    <option value="1">Child</option>
                                    <option value="2">Teenager</option>
                                    <option value="3">Adult</option>
                                </Form.Control>

                                {this.state.regErr ? <p className="msgInputErr">From input ada yang salah, silakan cek keatas. Jika sudah diperbaiki silakan klik Register kembali</p> : ''}
                                <button type="submit" className="myButton">Register</button>
                            </div>
                        </form>
                    </Modal>

                </div>

                <div className="homeFotter">
                    <p>FIND YOUR PET'S MATCH</p>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.users,
        species: state.species.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data)=> dispatch( userLogin(data) ),
        userLoginToken: (data)=> dispatch( userLoginToken(data) ),
        getAllSpecies: ()=> dispatch( getAllSpecies() ),
        userRegister: (data) => dispatch( userRegister(data) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
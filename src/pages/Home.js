import React, {Component} from 'react'
import {Modal, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {userLogin, userLoginToken} from '../_actions/usersA'
import Loading from '../components/Loading'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            modalLogin: false,
            modalRegister: false,
            tokenSaved: false
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

    componentDidMount(){
        // cek token
        const token = window.localStorage.getItem('token')
        if(token !== null){
            if(this.props.user.data.length == 0){
                const data = {
                    token: token
                }
                this.props.userLoginToken(data)
            }
            // console.log('xx', this.props.user)
            // this.setState({
            //     tokenSaved: true
            // })
        }
    }

    render(){
        const {data, dataError, isLoading, error} = this.props.user

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
                {this.state.tokenSaved || (data.id > 0) ? <Redirect to="/index"/> : null}
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
                            <span className="modalTitle">Register</span>
                            <button className="btnModalClose" onClick={this.handleHideRegister}>X</button>
                        </div>
                        <div className="formModal formRegister">
                            <Form.Control type="text" placeholder="Breeder" />
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Control type="number" placeholder="Phone Breeder" />
                            <Form.Control type="text" placeholder="Adrees Breeder" />
                            <Form.Control type="text" placeholder="Name Pet" />
                            <Form.Control type="text" placeholder="Gender Pet" />
                            <Form.Control as="select" style={{marginBottom: 15}}>
                                <option>Spesies Pet</option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Bird">Bird</option>
                                <option value="Sugar Glider">Sugar Glider</option>
                            </Form.Control>  
                            <Form.Control type="text" placeholder="Age" />
                            <button className="myButton">Register</button>
                        </div>
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
        user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data)=> dispatch( userLogin(data) ),
        userLoginToken: (data)=> dispatch( userLoginToken(data) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
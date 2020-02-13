import React, {Component} from 'react'
import {Modal, Form } from 'react-bootstrap'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            modalLogin: false,
            modalRegister: false
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

    render(){
        return(
            <div className="homeContain">
                <div className="homeGradient">
                    <div className="nav">
                        <div className="brand">
                            <img src={require('../../src/assets/icons/cats-couple-love.png')} alt="BreedNder Logo" />
                            <span>BreedNder</span>
                        </div>
                        <button className="myButton" onClick={this.handleShowLogin}>Login</button>
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
                            <button className="btnRegister" >Register</button>
                        </div>
                    </div>
                </div>

                <div className="homeFotter">
                    <p>FIND YOUR PET'S MATCH</p>
                </div>

                {/* ###### MODAL ###### */}
                {/* MODAL LOGIN */}
                <Modal show={this.state.modalLogin} onHide={this.handleHideLogin} className="modalContent">
                    <div>
                        <span className="modalTitle">Login</span>
                        <button className="btnModalClose" onClick={this.handleHideLogin}>X</button>
                    </div>
                    <div className="formModal">
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Control type="password" placeholder="Password" />
                        <button onClick={this.handleBtnLogin} className="btnRegister">Login</button>
                    </div>
                </Modal>
                
            </div>
        )
    }
}

export default Home
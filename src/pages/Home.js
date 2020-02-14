import React, {Component} from 'react'
import {Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

    handleBtnLogin = ()=>{
        window.location.href = 'http://localhost:3000/index'
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
                        <Link to="/index">
                            <button className="myButton">Login</button>
                        </Link>
                    </div>
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
                            <option>Spesies Pet 1</option>
                            <option>Spesies Pet 2</option>
                            <option>Spesies Pet 3</option>
                            <option>Spesies Pet 4</option>
                        </Form.Control>  
                        <Form.Control type="text" placeholder="Age" />
                        <button className="myButton">Register</button>
                    </div>
                </Modal>
                
            </div>
        )
    }
}

export default Home
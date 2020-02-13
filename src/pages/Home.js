import React, {Component} from 'react'

class Home extends Component{
    render(){
        return(
            <div className="homeContain">
                <div className="homeGradient">
                    <div className="nav">
                        <div className="brand">
                            <img src={require('../../src/assets/icons/cats-couple-love.png')} alt="BreedNder Logo" />
                            <span>BreedNder</span>
                        </div>
                        <button className="myButton">Login</button>
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
                
            </div>
        )
    }
}

export default Home
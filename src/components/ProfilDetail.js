import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

class ProfilDetail extends Component{
    render(){
        console.log(this.props.addpet)
        return(
            <Fragment>
                <div className="profilNav">
                    <Link to="/index">
                        <img src={require('../assets/icons/arrow-left-icon.png')} alt="nav bottom"/>
                    </Link>
                    <img src={require('../../src/assets/icons/cats-couple-love.png')} className="myImage" alt="Logo"/>
                    <span>{this.props.addpet? 'Add Pet': 'Profile Pat'}</span>
                </div>
                <div className="profilDetail">
                    <div className="scrollsideLeft">
                        <p className="labelBig">Account Settings</p>  
                        <div className="labelDetailprofil marginLebelProfil">
                            <span className="left">Email</span>
                            <span className="right">lukman.rocks@live.com</span>
                        </div>
                        <div className="labelDetailprofil marginLebelProfil">
                            <span className="left">Phone</span>
                            <span className="right">082226455525</span>
                        </div>
                        <p className="labelBig">Dicovery Settings</p>  
                        <div className="labelDetailprofil">
                            <span className="left">Maximum Distance</span>
                            <span className="right">1 mm</span>
                        </div>
                        <div className="labelDetailprofil">
                            <div className="mySliderRangeContainer">
                                <input type="range" className="mySliderRange" />
                            </div>
                        </div>
                        <div className="labelDetailprofil">
                            <span className="left">Age</span>
                        </div>
                        <div className="labelDetailprofil">
                            <select className="myInputSelect">
                                <option value="Child">Child</option>
                                <option value="Teenager">Teenager</option>
                                <option value="Adult">Adult</option>
                            </select>  
                        </div>
                        <div className="labelDetailprofil">
                            <span className="left">Species</span>
                        </div>
                        <div className="labelDetailprofil">
                            <select className="myInputSelect">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Bird">Bird</option>
                                <option value="Sugar Glider">Sugar Glider</option>
                            </select>  
                        </div>
                        <div className="labelDetailprofil" style={{paddingBottom: 60}}>
                            <div className="contentMyBtnMini">
                                <Link to="/">
                                    <button className="myBtnMini">Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </Fragment>
        )
    }
}

export default ProfilDetail
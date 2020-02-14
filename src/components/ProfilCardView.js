import React, { Fragment } from 'react'

const ProfilCardView = (props)=>{
    return(
        <Fragment>
            <div className="cardFrontImg">
                <div className="profilImgCard">
                    <img src={require('../assets/images/home-img.jpg')} alt="Pet"/>
                    <div className="cardIndicatorLeft indicatorActive"></div>
                    <div className="cardIndicatorRight"></div>
                </div>
                
            </div>
            <div className="profilImgCardDetail">
                <p className="nameBreeder">Kucing Bar Bar</p>
                <p className="detailBreeder"><img src={require('../assets/icons/person-icon.png')} alt="Person Icon"/> Breeder: Lukman Sanjaya</p>
                <p className="detailBreeder"><img src={require('../assets/icons/place-icon.png')} alt="Place Icon"/> 1 mm dari sini</p>
                <p className="detailBreeder"><img src={require('../assets/icons/gender-icon.png')} alt="Gender Icon"/> Male - Adult</p>
                <p className="detailBreeder"><img src={require('../assets/icons/phone-icon.png')} alt="Phone Icon"/> 082226455525</p>
                <div className="contentMyBtnMini">
                    <button className="myBtnMini" onClick={props.hendleEdit}>Edit</button>
                </div>
            </div>
            <div className="absoluteUpRight">
                <button className="myBtnMini">Add Pet</button>
            </div>
        </Fragment>
    )
}

export default ProfilCardView
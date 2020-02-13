import React from 'react'

const CardSugestImage = (props)=>{
    return(
        <div className="cardSugestContain">
            <div className="imgCardContain">
                <img className="imgCard" src={require('../assets/images/home-img.jpg')} alt="Pet"/>
                <div className="cardIndicatorLeft indicatorActive"></div>
                <div className="cardIndicatorRight"></div>
                <div className="arrowCard">
                    <button>
                        <img src={require('../assets/icons/arrow-right-icon.png')} alt="Next"/>
                    </button>
                </div>
                <div className="detailCard">
                    <p className="nameBreeder">Kucing Bar Bar</p>
                    <p className="detailBreeder"><img src={require('../assets/icons/person-icon.png')} alt="Person Icon"/> Breeder: Lukman Sanjaya</p>
                    <p className="detailBreeder"><img src={require('../assets/icons/place-icon.png')} alt="Place Icon"/> 1 mm dari sini</p>
                </div>
            </div>
        </div>
    )
}

export default CardSugestImage
import React from 'react'
import BottonSugestAction from '../molecules/BottonSugestAction'

const ActionCardSugest = ()=>{
    return(
        <div className="btnCardSugestContain">
            <BottonSugestAction img={require('../assets/icons/refresh-icon.png')} className="imgButton" alt="Refresh Icon"/>
            <BottonSugestAction img={require('../assets/icons/close-icon.png')} className="imgButtonBig" alt="Close Icon"/>
            <BottonSugestAction img={require('../assets/icons/love-icon.png')} className="imgButtonBig" alt="Love Icon"/>
            <BottonSugestAction img={require('../assets/icons/bolt-icon.png')} className="imgButton" alt="Bolt Icon"/>
        </div>
    )
}

export default ActionCardSugest
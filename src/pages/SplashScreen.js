import React from 'react'

const SplashScreen = ()=>{
    return(
        <div className="splashScreen">
            <img className="rotate" src={require('../assets/icons/loading-icon.png')} alt="loading"/>
            {/* <h1>Loading...</h1> */}
        </div>
    )
}

export default SplashScreen
import React from 'react'

const Loading = ()=>{
    return(
        <div className="loadingInfo">
            <img className="rotate" src={require('../assets/icons/loading-icon.png')} alt="loading" />
        </div>
    )
}

export default Loading
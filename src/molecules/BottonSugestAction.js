import React from 'react'

const BottonSugestAction = (props)=>{
    return(
        <button className="btnCardSugest">
            <img src={props.img} className={props.className} alt={props.alt}/>
        </button>
    )
}

export default BottonSugestAction
import React from 'react'

const BottonNavSugest = (props)=>{
    return(
        <button onClick={props.action}>
            <img src={props.img} alt={props.alt}/>
            <span>{props.name}</span>
        </button>
    )
}

export default BottonNavSugest
import React, {useState} from 'react'
import BottonNavSugest from '../molecules/BottonNavSugest'

const NavSugest = ()=>{
    const [state, setState]= useState({
        showNav: true
    })

    const hideNav = ()=>{
        setState({
            showNav: false
        })
    }

    return(
        <div className={state.showNav? 'navSugest': 'navSugest displayNone'}>
            <BottonNavSugest action={hideNav} img={require('../assets/icons/double-arrow-down-icon.png')} name="Hide" alt="Hide"/>
            <BottonNavSugest img={require('../assets/icons/arrow-left-icon.png')} name="No" alt="No"/>
            <BottonNavSugest img={require('../assets/icons/arrow-right-icon.png')} name="Yes" alt="Yes"/>
            <BottonNavSugest img={require('../assets/icons/arrow-up-icon.png')} name="Open Profile" alt="Open Profile"/>
            <BottonNavSugest img={require('../assets/icons/arrow-down-icon.png')} name="Close Profile" alt="Close Profile"/>
            <input type="text"/>
            <BottonNavSugest img={require('../assets/icons/double-arrow-right-icon.png')} name="Next Photo" alt="Next"/>
        </div>
    )
}

export default NavSugest
import React, {Component, Fragment} from 'react'

class ImageCardMatch extends Component{
    render(){
        return(
            <Fragment>
                <img src={require('../assets/images/home-img.jpg')} className="imgMatch" alt="Pet"/>
                <p className="nameMacth">Meong Meong</p>
            </Fragment>
        )
    }
}

export default ImageCardMatch
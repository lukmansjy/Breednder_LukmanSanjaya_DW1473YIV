import React, {Component, Fragment} from 'react'
import {baseUrl} from '../config'

class ImageCardMatch extends Component{
    render(){
        const {pet_liked} = this.props.data
        if(pet_liked.photo == null){
            pet_liked.photo = `${baseUrl}uploads/pet/pet-img.png`
        }
        return(
            <Fragment>
                <img src={pet_liked.photo} className="imgMatch hoverZoom1-2" alt="Pet"/>
                <p className="nameMacth">{pet_liked.name}</p>
            </Fragment>
        )
    }
}

export default ImageCardMatch
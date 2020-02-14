import React from 'react'
import {Col} from 'react-bootstrap'

const ProfilPhotoEdit = (props)=>{
    return(
        <Col xs={4} className="imgMatchContain">
            <div className="photoProfilAdd">
                <img src={props.img} className="imgAddImage" alt={props.img? 'Remove' : ''}/>
                <button className="btnContolImgae">
                    <img className={props.img? '' : 'rotate45'} src={require('../assets/icons/add-icon.png')} alt={props.img? 'Remove' : 'Add'}/>
                </button>
            </div>
        </Col>
    )
}

export default ProfilPhotoEdit
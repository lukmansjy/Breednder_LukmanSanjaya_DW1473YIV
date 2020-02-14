import React, {Component, Fragment} from 'react'

class ImageCardMatch extends Component{
    render(){
        return(
            <Fragment>
                <img src={this.props.data.photo} className="imgMatch" alt="Pet"/>
                <p className="nameMacth">{this.props.data.name}</p>
            </Fragment>
        )
    }
}

export default ImageCardMatch
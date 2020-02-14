import React, {Component, Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCardMatch from './ImageCardMatch'
import {Link} from 'react-router-dom'
import dataJson from '../assets/data/db.json'

class ListImage extends Component{
    render(){
        return(
            <Fragment>
                <div className="profilNav">
                    <Link to="/profil">
                        <img src={require('../../src/assets/icons/cats-couple-love.png')} className="myImage" alt="Logo"/>
                    </Link>
                    <span>Gary Cat</span>
                    <img src={require('../assets/icons/arrow-down-icon.png')} alt="nav bottom"/>
                </div>
                <div className="scrollsideLeft">
                    <p className="labelBorderButn">Match</p>
                    <Container fluid={true}>
                        <Row>    
                            {dataJson.match.map( (match, key) =>{
                                return(
                                    <Col xs={4} className="imgMatchContain" key={key}>
                                        <ImageCardMatch  data={match}/>
                                    </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default ListImage
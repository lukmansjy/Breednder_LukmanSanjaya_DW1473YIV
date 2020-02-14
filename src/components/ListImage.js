import React, {Component, Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCardMatch from './ImageCardMatch'
import {Link} from 'react-router-dom'

class ListImage extends Component{
    handleClick = ()=>{
        window.location.href = 'http://localhost:3000/profil'
    }
    render(){
        return(
            <Fragment>
                <div className="profilNav">
                    <Link to="/profil">
                        <img onClick={this.handleClick} src={require('../../src/assets/icons/cats-couple-love.png')} className="myImage" alt="Logo"/>
                    </Link>
                    <span>Gary Cat</span>
                    <img src={require('../assets/icons/arrow-down-icon.png')} alt="nav bottom"/>
                </div>
                <div className="scrollsideLeft">
                    <p className="labelBorderButn">Match</p>
                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true}>
                        <Row>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                            <Col xs={4} className="imgMatchContain">
                                <ImageCardMatch/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default ListImage
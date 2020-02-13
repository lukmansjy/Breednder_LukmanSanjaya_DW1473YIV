import React, {Component, Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCardMatch from './ImageCardMatch'

class ListImage extends Component{
    render(){
        return(
            <Fragment>
                <div className="profilNav">
                    <img src={require('../../src/assets/icons/cats-couple-love.png')} className="myImage" alt="Logo"/>
                    <span>Gary Cat</span>
                    <img src={require('../assets/icons/arrow-down-icon.png')} alt="nav bottom"/>
                </div>
                <div className="listMatch">
                    <p>Match</p>
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
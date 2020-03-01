import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ListImage from '../components/ListImage'
import CardSugest from '../components/CardSugest'
import { connect } from 'react-redux'

import {getAllPetsMe} from '../_actions/petsA'
import {getAllSpecies} from '../_actions/speciesA'

class IndexPage extends Component{

    componentDidMount(){
        this.props.getAllPetsMe()
        this.props.getAllSpecies()
    }

    render(){
        return(
            <Container fluid={true} className="indexPage">
                <Row>
                    <Col xs={3} className="sideLeft">
                        <ListImage/>
                    </Col>
                    <Col xs={9} className="sideRight">
                        <CardSugest />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('mapStateToProps From Index Page',state)
    return{
        user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPetsMe: ()=> dispatch( getAllPetsMe() ),
        getAllSpecies: ()=> dispatch( getAllSpecies() )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
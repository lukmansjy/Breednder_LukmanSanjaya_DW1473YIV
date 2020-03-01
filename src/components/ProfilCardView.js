import React, { Fragment, useState, useEffect } from 'react'
import {Modal} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import {createPeyment} from '../_actions/paymentA'
import {baseUrlApi} from '../config'

const ProfilCardView = (props)=>{
    const [state, setState] = useState({
        modalShowPayment: false,
        modalShowConfrim: false,
        addPet: false,
        payConfrm: false,
        imgPay: require('../assets/icons/camera-icon.png'),
        noRek: null,
        imgTransfer: null
    })

    const handleModalShowPayment = ()=>{
        setState({
            ...state,
            modalShowPayment: true
        })
    }
    const handleModaPaymentlClose = ()=>{
        setState({
            ...state,
            modalShowPayment: false
        })
    }

    const handleModalShowConfrim = ()=>{
        setState({
            ...state,
            modalShowPayment: false,
            modalShowConfrim: true
        })
        // setTimeout(()=>{
        //     setState({
        //         ...state,
        //         payConfrm: true
        //     })
        // }, 3000);
    }
    const handleModaConfrimClose = ()=>{
        setState({
            ...state,
            modalShowConfrim: false
        })
    }

    const handleSelectImg = (event)=>{
        setState({
            ...state,
            imgPay: URL.createObjectURL(event.target.files[0])
        })
    }

    const handlePayment = (event) =>{
        event.preventDefault()
        const file = event.target.elements.picture.files[0]
        const noRek = event.target.elements.no_rek.value
        let formData = new FormData() 
        formData.append('payment', file)
        formData.append('no_rek', noRek)
        formData.append('status', 'free')
        props.createPeyment(formData)
    }

    if(props.payment.paymentSubmit && state.noRek == null){
        let {no_rek, proof_of_transfer} = props.payment.data
        setState({
            ...state,
            noRek: no_rek,
            imgTransfer: proof_of_transfer
        })
        
    }

    useEffect(()=>{
        if(state.modalShowPayment === true){
            handleModalShowConfrim()
            
        }
    }, [state.noRek])

    return(
        <Fragment>
            {state.payConfrm? <Redirect to="/add-pet" />: ''}
            <div className="cardFrontImg">
                <div className="profilImgCard">
                    <img src={props.dataPet.photo ? props.dataPet.photo : `${baseUrlApi}/uploads/pet/pet-img.png`} alt="Pet"/>
                    <div className="cardIndicatorLeft indicatorActive"></div>
                    <div className="cardIndicatorRight"></div>
                </div>
                
            </div>
            <div className="profilImgCardDetail">
                <p className="nameBreeder">{props.dataPet.name}</p>
                <p className="detailBreeder">
                    <img src={require('../assets/icons/person-icon.png')}
                        alt="Person Icon"/> Breeder: {props.dataPet.user ? props.dataPet.user.breeder : null}
                </p>
                <p className="detailBreeder">
                    <img src={require('../assets/icons/place-icon.png')}
                        alt="Place Icon"/> 1 mm dari sini
                </p>
                <p className="detailBreeder">
                    <img src={require('../assets/icons/gender-icon.png')}
                        alt="Gender Icon"/> {props.dataPet.user ? `${props.dataPet.gender} - ${props.dataPet.age.name}` : null}
                </p>
                <p className="detailBreeder">
                    <img src={require('../assets/icons/phone-icon.png')}
                        alt="Phone Icon"/> {props.dataPet.user ? props.dataPet.user.phone : null}
                </p>
                <div className="contentMyBtnMini">
                    <button className="myBtnMini" onClick={props.hendleEdit}>Edit</button>
                </div>
            </div>
            <div className="absoluteUpRight">
                <button className="myBtnMini" onClick={handleModalShowPayment}>Add Pet</button>
            </div>

            {/* MODAL PREMIUM PAYMENT*/}
            <Modal show={state.modalShowPayment} onHide={handleModaPaymentlClose} className="containerModalPremium">
                <div className="modalPremium">
                    <div>
                        <h3>Premium</h3>
                        <button className="btnModalClose" onClick={handleModaPaymentlClose}>X</button>
                    </div>
                    <p>Upgrade Breednder mu dan nikmati fitur-fitur <b>PRO</b>.</p>
                    <p><b>Breednder: 670{props.dataPet.user ? props.dataPet.user.id : null}</b></p>
                    <form enctype="multipart/form-data" onSubmit={handlePayment}>
                        <input name="no_rek" className="inputTextPremium" type="text" placeholder="No Rek. Kamu"/>
                        <div className="imageUpload">
                            <label htmlFor="file-input">
                                <img src={state.imgPay} alt="Upload Bukti"/>
                            </label>
                            <input name="picture" id="file-input" onChange={handleSelectImg} type="file" accept="image/png, image/jpeg" />
                        </div>
                        {/* onClick={handleModalShowConfrim} */}
                        <button type="submit" className="btnPremium">Kirim</button>
                    </form>
                </div>
            </Modal>

            {/* MODAL PREMIUM CONFRIM*/}
            <Modal show={state.modalShowConfrim} onHide={handleModaConfrimClose} className="modalKomfrimPay">
                <div>
                    <button className="btnModalClose" onClick={handleModaConfrimClose}>X</button>
                </div>
                <div className="containModalPay">
                    <h3>Konfirmasi Terkirim</h3>
                    <p>Terimakasih Silakan Tunggu Konfirmasi pembayaran</p>
                    <p><h5><u>Detail:</u></h5></p>
                    <p>No Rek Kamu: <b>{state.noRek}</b></p>
                    <p>Bukti Transfer:</p>
                    <p>{state.imgTransfer ? <img src={state.imgTransfer} width="280px"/> : null}</p>
                </div>
            </Modal>
        </Fragment>
    )
}

const mapStateToProps = (state) =>{
    return{
        payment: state.payment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPeyment: (data)=> dispatch( createPeyment(data) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilCardView)
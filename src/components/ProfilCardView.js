import React, { Fragment, useState } from 'react'
import {Modal} from 'react-bootstrap'

const ProfilCardView = (props)=>{
    const [state, setState] = useState({
        modalShowPayment: false,
        modalShowConfrim: false,
        addPet: false
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
        setTimeout(()=>window.location.href = 'http://localhost:3000/add-pet', 3000);
    }
    const handleModaConfrimClose = ()=>{
        setState({
            ...state,
            modalShowConfrim: false
        })
    }

    return(
        <Fragment>
            <div className="cardFrontImg">
                <div className="profilImgCard">
                    <img src={require('../assets/images/home-img.jpg')} alt="Pet"/>
                    <div className="cardIndicatorLeft indicatorActive"></div>
                    <div className="cardIndicatorRight"></div>
                </div>
                
            </div>
            <div className="profilImgCardDetail">
                <p className="nameBreeder">Kucing Bar Bar</p>
                <p className="detailBreeder"><img src={require('../assets/icons/person-icon.png')} alt="Person Icon"/> Breeder: Lukman Sanjaya</p>
                <p className="detailBreeder"><img src={require('../assets/icons/place-icon.png')} alt="Place Icon"/> 1 mm dari sini</p>
                <p className="detailBreeder"><img src={require('../assets/icons/gender-icon.png')} alt="Gender Icon"/> Male - Adult</p>
                <p className="detailBreeder"><img src={require('../assets/icons/phone-icon.png')} alt="Phone Icon"/> 082226455525</p>
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
                    <p><b>Breednder: 303030303030</b></p>
                    <input className="inputTextPremium" type="text" placeholder="No Rek. Kamu"/>
                    <div className="imageUpload">
                        <label htmlFor="file-input">
                            <img src={require('../assets/icons/camera-icon.png')} alt="Upload Bukti"/>
                        </label>
                        <input id="file-input" type="file"/>
                    </div>
                    <button className="btnPremium" onClick={handleModalShowConfrim}>Kirim</button>
                </div>
            </Modal>

            {/* MODAL PREMIUM CONFRIM*/}
            <Modal show={state.modalShowConfrim} onHide={handleModaConfrimClose} className="modalKomfrimPay">
                <h3>Konfirmasi Terkirim</h3>
                <p>Terimakasih Silakan Tunggu Konfirmasi pembayaran</p>
            </Modal>
        </Fragment>
    )
}

export default ProfilCardView
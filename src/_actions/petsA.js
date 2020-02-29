import axios from 'axios'

import {baseUrlApi} from '../config'

// Get All Pets Me After Login
export const getAllPetsMe = ()=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'GET_ALL_PET_ME',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApi}/pets/me`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

// GET All Pets Macth By Id
export const getPetsMatch = (idPet)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'GET_PETS_MATCH',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApi}/matches?pet_id=${idPet}&status=true`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

// Handle untuk set id active, tujiannya ketika klik profil pet
export const setPetProfileActive = (data)=>{
    return {
        type: 'SET_PET_AKTIVE',
        payload: null,
        petProfileAktif: data
    }
}
import axios from 'axios'

import {baseUrlApi} from '../config'

// CREATE PAYMENT
export const createPeyment = (data)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'CREATE_PAYMENT',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApi}/payment`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}

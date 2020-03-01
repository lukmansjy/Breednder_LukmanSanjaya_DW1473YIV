import axios from 'axios'

import {baseUrlApiVersion} from '../config'

// CREATE PAYMENT
export const createPeyment = (data)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'CREATE_PAYMENT',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/payment`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}

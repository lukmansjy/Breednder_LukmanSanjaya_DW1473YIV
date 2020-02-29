import axios from 'axios'

import {baseUrlApi} from '../config'

export const userLogin = (data)=>{
    return {
        type: 'POST_USER_LOGIN',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApi}/login`,
            data: data
        })
    }
}

export const userLoginToken = (data)=>{
    return {
        type: 'USER_LOGIN_TOKEN',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApi}/loginToken`,
            headers: {
                Authorization: `Bearer ${data.token}`
            },
            data: data
        })
    }
}

export const destroyStore = ()=>{
    return {
        type: 'USER_LOGOUT',
        payload: null
    }
}

export const userRegister = (data) =>{
    return {
        type: 'POST_USER_REGISTER',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApi}register`,
            data: data
        })
    }
}
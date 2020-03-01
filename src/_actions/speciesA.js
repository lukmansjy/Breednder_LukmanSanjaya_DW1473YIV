import axios from 'axios'

import {baseUrlApiVersion} from '../config'

// Get All Species
export const getAllSpecies = ()=>{
    return {
        type: 'GET_SPECIES',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApiVersion}/species`
        })
    }
}

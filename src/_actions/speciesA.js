import axios from 'axios'

import {baseUrlApi} from '../config'

// Get All Species
export const getAllSpecies = ()=>{
    return {
        type: 'GET_SPECIES',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApi}species`
        })
    }
}

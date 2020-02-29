const initialState = {
    data: [],
    isLoading: false,
    error: false
}

const species = (state = initialState, action) => {
    switch(action.type){

        // GET ALL SPECIES
        case 'GET_SPECIES_PENDING':
            return {
                ...state,
                isLoading: true,
                paymentSubmit: false
            }
        case 'GET_SPECIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_SPECIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }
        
        default:
            return state
    }
}

export default species
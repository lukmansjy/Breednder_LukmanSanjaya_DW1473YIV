const initialState = {
    data: [],
    dataError:[],
    isLoading: false,
    error: false,
    loginStatus: false
}

const payment = (state = initialState, action) => {
    switch(action.type){

        // POST USER LOGIN TOKEN
        case 'CREATE_PAYMENT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'CREATE_PAYMENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                loginStatus: true,
                dataError: []
            }
        case 'CREATE_PAYMENT_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }
        
        default:
            return state
    }
}

export default payment
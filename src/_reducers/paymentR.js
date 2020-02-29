const initialState = {
    data: [],
    isLoading: false,
    error: false,
    paymentSubmit: false
}

const payment = (state = initialState, action) => {
    switch(action.type){

        // POST PAYMENT (CREATE)
        case 'CREATE_PAYMENT_PENDING':
            return {
                ...state,
                isLoading: true,
                paymentSubmit: false
            }
        case 'CREATE_PAYMENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                paymentSubmit: true
            }
        case 'CREATE_PAYMENT_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true,
                paymentSubmit: false
            }
        
        default:
            return state
    }
}

export default payment
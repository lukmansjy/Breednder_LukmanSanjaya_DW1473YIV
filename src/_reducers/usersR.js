const initialState = {
    data: [],
    dataError:[],
    isLoading: false,
    error: false,
    loginStatus: false
}

const users = (state = initialState, action) => {
    switch(action.type){

        // USER LOGIN
        case 'POST_USER_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_USER_LOGIN_FULFILLED':
            window.localStorage.setItem('token', action.payload.data.token);
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                loginStatus: true,
                dataError: []
            }
        case 'POST_USER_LOGIN_REJECTED':
            let error = []
            if(action.response == null){
                error = {
                    data: null,
                    errorNetwork: action.payload
                }
            }
            if(action.payload.response != null){
                error = {
                    data: action.payload.response.data,
                    errorNetwork: null
                }
            }
            return {
                ...state,
                isLoading: false,
                error: true,
                dataError: error,
                data: []
                
            }
        
        // POST USER LOGIN TOKEN
        case 'USER_LOGIN_TOKEN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOGIN_TOKEN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                loginStatus: true,
                dataError: []
            }
        case 'USER_LOGIN_TOKEN_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }
        
        case 'USER_LOGOUT':
            return {
                data: [],
                dataError:[],
                isLoading: false,
                error: false
            }
        
        default:
            return state
    }
}

export default users
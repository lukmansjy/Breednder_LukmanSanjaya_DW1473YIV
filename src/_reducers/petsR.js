const initialState = {
    petsMe: [],
    matchs: [],
    dataError:[],
    isLoading: false,
    error: false,
    petProfileAktif: []
}

const pets = (state = initialState, action) => {
    switch(action.type){

        // GET PETS ME (kepunyaan pet yg login)
        case 'GET_ALL_PET_ME_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_PET_ME_FULFILLED':
            return {
                ...state,
                isLoading: false,
                petsMe: action.payload.data
            }
        case 'GET_ALL_PET_ME_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true,
                petsMe: []
            }

        // GET ALL PETS MATCH
        case 'GET_PETS_MATCH_PENDING':
            return {
                ...state,
                isLoading: true,
                matchs: []
            }
        case 'GET_PETS_MATCH_FULFILLED':
            console.log('PAT MATCH',action.payload.data)
            return {
                ...state,
                isLoading: false,
                matchs: action.payload.data
            }
        case 'GET_PETS_MATCH_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true,
                matchs: []
            }

        
        case 'SET_PET_AKTIVE':
            // alert(action.petId)
            return {
                ...state,
                petProfileAktif: action.petProfileAktif
            }

            

        default :
            return state
    }
}

export default pets
const initialState = {
    petsMe: [],
    matchs: [],
    dataError:[],
    isLoading: false,
    error: false,
    petProfileAktif: [],
    petEditSubmit: false,
    getAllPetMeLoading: false,
    editPetLoading: false
}

const pets = (state = initialState, action) => {
    switch(action.type){

        // GET PETS ME (kepunyaan pet yg login)
        case 'GET_ALL_PET_ME_PENDING':
            return {
                ...state,
                getAllPetMeLoading: true
            }
        case 'GET_ALL_PET_ME_FULFILLED':
            return {
                ...state,
                getAllPetMeLoading: false,
                petsMe: action.payload.data
            }
        case 'GET_ALL_PET_ME_REJECTED':
            return {
                ...state,
                getAllPetMeLoading: false,
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

        // EDIT PET
        case 'POST_EDIT_PET_PENDING':
            return {
                ...state,
                isLoading: true,
                editPetLoading: true
            }
        case 'POST_EDIT_PET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                petEditSubmit: true,
                editPetLoading: false,
                petProfileAktif: action.payload.data
            }
        case 'POST_EDIT_PET_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true,
                editPetLoading: false
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
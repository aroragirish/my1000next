import { LOGOUT, SAVE_USER, USER_NEEDS_REGISTRATION } from '../types'

const initialState = {

}

export default function userReducer(state = initialState, action) {

    console.log(action);
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                ...action.payload,
                loading: false
            }
        case USER_NEEDS_REGISTRATION: 
            return {
                ...state,
                registerNeeded: action.payload
            }
        case LOGOUT:
            return initialState
        default: return state
    }
}
import { LOGOUT, SAVE_USER } from '../types'

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
        case LOGOUT:
            return initialState
        default: return state
    }
}
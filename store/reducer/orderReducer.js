
const initialState = {

}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PENDING_ORDER':
            return {
                ...state,
                checkedOutOrder: action.payload,
            }
        default: return state
    }
}
import { combineReducers } from 'redux'
import userReducer from './userReducer'
import orderReducer from './orderReducer';

export default combineReducers({
  user: userReducer,
  order: orderReducer
})
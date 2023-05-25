import { combineReducers } from "redux";
import counterData from '../reducer/CounterReducer'
import LoginReducer from '../reducer/LoginReducer'


export default combineReducers({
    counterData,
    LoginReducer
})

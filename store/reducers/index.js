import {combineReducers} from 'redux'
import counterReducer from "./counterReducers";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer
})

export default rootReducer;
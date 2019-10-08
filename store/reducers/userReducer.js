import {FETCH_USER} from "../action/actionTypes";

const userState = {
    users: [],
    user:{},
    error:""
};
export  const userReducer = (state = userState, action ) => {
    switch (action.type){
        case FETCH_USER:
            return { ...state, user: action.payload};
        default:
            return state
    }
};
export default userReducer;
import {COUNTER_DECREMENT,COUNTER_INCREMENT} from '../action/actionTypes'
const counterState = {
    counter: 1000
}

export const counterReducer = (state= counterState,action) => {
    switch (action.type) {
        case COUNTER_INCREMENT :
            return {...state, counter: state.counter + 1}
        case COUNTER_DECREMENT:
            return {...state, counter: state.counter -1}

        default:
            return state
    }
}

export default counterReducer
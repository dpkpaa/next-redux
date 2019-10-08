import {COUNTER_DECREMENT,COUNTER_INCREMENT} from './actionTypes'

export const increment = (payload) => {
    return {
        type:COUNTER_INCREMENT,
        payload: payload
    }
}
export const decrement = (payload) => {
    return {
        type:COUNTER_DECREMENT,
        payload:payload
    }
}
import {createStore} from 'redux'
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
    features: {
        pause: true, // start/pause recording of dispatched actions
        lock: true, // lock/unlock dispatching actions and side effects
        persist: true, // persist states on page reloading
        export: true, // export history of actions in a file
        import: 'custom', // import history of actions from a file
        jump: true, // jump back and forth (time travelling)
        skip: true, // skip (cancel) actions
        reorder: true, // drag and drop actions in the history list
        dispatch: true, // dispatch custom actions or action creators
        test: true // generate tests for the selected actions
    },
    // other options like actionSanitizer, stateSanitizer
});

const makeStore = (initialState, options) => {
    return createStore(rootReducer, initialState,composeEnhancers());
};
// export const store = createStore(rootReducer);
export default makeStore;
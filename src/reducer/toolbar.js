import { createStore } from 'redux'

var toolbar = function (state = {}, action) {
    console.log('toolbarReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}

export default toolbar;

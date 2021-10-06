
import { configureStore, combineReducers } from '@reduxjs/toolkit'

//Store
//action
//reducer
//dispatch


export const increaseCartCountAction = () => {
    return {
        type: 'INCREASE COUNT'
    }
}

const cartReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE COUNT':
            return state + 1;
        default:
            return state;
    }
}


export const store = configureStore({
    reducer: cartReducer
});

// store.subscribe((r) => {
//     console.log('state changed');
// });
// store.dispatch(increaseCartCountAction());


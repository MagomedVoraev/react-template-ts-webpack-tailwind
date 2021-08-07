import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { colorReducer } from './reducers/color';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const reducers = combineReducers({
    colors: colorReducer,
    //    ici les autres reducers
});

// thunk lets us do the asynchrone
export default createStore(reducers, applyMiddleware(thunk));

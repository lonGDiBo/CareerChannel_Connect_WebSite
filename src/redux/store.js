import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from "redux-thunk";
import { sessionReducer } from './reducers/sessionReducer';

const rootReducer=combineReducers({
    session:sessionReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))
console.log(store.getState())
export default store 

import {createStore, combineReducers} from "redux";

import loginWindowReducer from "./login-window-reducer";


let reducers = combineReducers({
loginWindow: loginWindowReducer

});
let store = createStore(reducers);

window.store = store;

export default store;
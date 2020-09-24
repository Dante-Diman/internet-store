import {createStore, combineReducers} from "redux";

import loginWindowReducer from "./login-window-reducer";
import CatalogReducer from "./catalog-reducer"

let reducers = combineReducers({

loginWindow: loginWindowReducer,

Catalog: CatalogReducer

});
let store = createStore(reducers);

window.store = store;

export default store;
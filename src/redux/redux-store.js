import {createStore, combineReducers} from "redux";

import loginWindowReducer from "./login-window-reducer";
import CatalogReducerGroup1 from "./catalog-reducer-group1";
import CatalogReducerGroup2 from "./catalog-reducer-group2";
import CatalogReducerGroup3 from "./catalog-reducer-group3";
let reducers = combineReducers({

loginWindow: loginWindowReducer,

ProductGroup1: CatalogReducerGroup1,
ProductGroup2: CatalogReducerGroup2,
ProductGroup3: CatalogReducerGroup3

});
let store = createStore(reducers);

window.store = store;

export default store;
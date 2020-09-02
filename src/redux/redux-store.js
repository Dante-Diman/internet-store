import {createStore, combineReducers} from "redux";
import priceListReducer from "./price-list-reducer";
import commentReducer from "./comment-reducer";
import mapReducer from "./map-reducer";


let reducers = combineReducers({
    priceList: priceListReducer,
    dialogsPage: commentReducer,
    mapPage: mapReducer

});
let store = createStore(reducers);

window.store = store;

export default store;
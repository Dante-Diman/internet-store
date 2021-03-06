import {combineReducers, configureStore } from '@reduxjs/toolkit';


import loginWindowReducer from './login-window-reducer';
import CatalogReducerGroup from './catalog-group-reducer';
import AddToCartReducer from './cart-reducer';
import ShowDatailsReducer from './product-details-reducer';

const rootReducer = combineReducers(
{
    ProductOptions: ShowDatailsReducer,
    CatalogReducerGroup: CatalogReducerGroup,
    Cart: AddToCartReducer,   
loginWindow: loginWindowReducer,




})
export const store = configureStore ({
reducer:rootReducer,

}

)
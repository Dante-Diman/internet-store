import {combineReducers, configureStore } from '@reduxjs/toolkit';

import CatalogReducerGroup1 from './catalog-reducer-group1';
import CatalogReducerGroup2 from './catalog-reducer-group2';
import CatalogReducerGroup3 from './catalog-reducer-group3';
import loginWindowReducer from './login-window-reducer';
import toolkitGroupReducer4 from './toolkit-group-reducer4';
import AddToCartReducer from './cart-reducer';

const rootReducer = combineReducers(
{
    Cart: AddToCartReducer,   
loginWindow: loginWindowReducer,

ProductGroup1: CatalogReducerGroup1,
ProductGroup2: CatalogReducerGroup2,
ProductGroup3: CatalogReducerGroup3,
toolkit: toolkitGroupReducer4,


})
export const store = configureStore ({
reducer:rootReducer,

}

)
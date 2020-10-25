import {createAction, createReducer} from '@reduxjs/toolkit';



let initialState ={ 
  chosenSize:null,
    showMore: false,
    offers:[
       {id:1, h1:'title1',h2:'title2',p1:'description1', p2:'description2'} 
   
    ],
    
    }
  
    export const AddToCartReducer = createAction('ADD_TO_CART' );
    export default createReducer(initialState, {
      [AddToCartReducer]: function (state, action){

      }



    });

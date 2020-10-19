import {createAction, createReducer} from '@reduxjs/toolkit';
import coat2 from '../assets/catalog/coats/2.jpg';


let initialState ={ 
    id:1,
    productUrl:coat2, 
    productTitle:"Coat", 
    productPrice:"90$",
    productDescription:"Coat-1" ,
    count:1,  
    sizes:[38,39,40,42]
       
    }
  
  export const ShowDatailsReducer = createAction('SHOW_DETAILS_REDUCER'); 


  export default createReducer(initialState, {

    [ShowDatailsReducer]: function (state, action){
    
      let Options = action.payload;

      state.id=Options.id
      state.productUrl=Options.productUrl
      state.productTitle=Options.productTitle
      state.productPrice=Options.productPrice 
      state.productDescription=Options.productDescription
      state.count=Options.count
      state.sizes.map(sizes =>(
        state.sizes=Options.sizes
      ) )
      
    
    
    },


  
  
   

  }) 

 
 

 

import {createAction, createReducer} from '@reduxjs/toolkit';

import img1 from '../assets/catalog/TShorts/1.jpg';


let initialState ={ 
       
    showMore: false,
    CartList:[
        {id:1, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  },
        {id:2, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  },
        {id:3, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  },
        {id:4, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  }
    ],
    
    }
  
    let delid;
    let product;
  export const AddToCartReducer = createAction('ADD_TO_CART' ); 
  export const DelFromCartReducer = createAction('DEL_FROM_CART'); 
  export default createReducer(initialState, {
    [AddToCartReducer]: function (state, action){
      
      state.CartList.push(action.payload)
     
    },
    [DelFromCartReducer]: function (state, action){
     
     debugger;
       delid = action.payload.id;
       product= state.CartList.find(product => product.id === delid);
      console.log(product.id) 
       /* state.CartList.splice(delid-1, 1); */
    }

  }) 

 
 

 
console.log(AddToCartReducer)
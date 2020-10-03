import {createAction, createReducer} from '@reduxjs/toolkit';

import img1 from '../assets/catalog/TShorts/1.jpg';


let initialState ={ 
       
    showMore: false,
    CartList:[
         {id:1, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1", count:1  },
      /*  {id:1, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  },
        {id:3, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  },
        {id:4, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  } */
    ],
    
    }
  
  export const AddToCartReducer = createAction('ADD_TO_CART' ); 
  export const DelFromCartReducer = createAction('DEL_FROM_CART'); 

  export default createReducer(initialState, {

    [AddToCartReducer]: function (state, action){
   
      let AddProductOptions = action.payload;
      
      let increment = action.payload.count;

      let doplers = state.CartList.map( m => ((m.id == AddProductOptions.id && m.productDescription==AddProductOptions.productDescription) ?
      m.count=m.count+increment : state.CartList.push(action.payload) )
       
      );
      
      console.log(doplers);

      
     
    },


    [DelFromCartReducer]: function (state, action){
     
      let  delid = action.payload.id;
      let DelProdDesc = action.payload.productDescription;
       let  delproduct = state.CartList.findIndex(product => ((product.id === delid) && (product.productDescription === DelProdDesc)));
       state.CartList.splice(delproduct, 1);
    }

  }) 

 
 

 
console.log(AddToCartReducer)
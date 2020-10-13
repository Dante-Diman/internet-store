import {createAction, createReducer} from '@reduxjs/toolkit';
import coat2 from '../assets/catalog/coats/2.jpg';


let initialState ={ 
       
  ProductOptions:[
      {id:1, productUrl:coat2, productTitle:"Coat", productPrice:"90$", productDescription:"Coat-1" , count:1}/*не убирать пустой элемент - элементы не добавляются в пустой массив*/
   
    ],
    
    }
  
  export const showDatailsReducer = createAction('SHOW_DETAILS' ); 
 /*  export const DelFromCartReducer = createAction('DEL_FROM_CART'); 
export const up_QTYReducer = createAction('up_QTY'); 
export const down_QTYReducer = createAction('down_QTY');  */

  export default createReducer(initialState, {

    [showDatailsReducer]: function (state, action){
    
      let ProductOptions = action.payload;

    /*  state.ProductOptions = ProductOptions; */
   
     
    },


  
  
   

  }) 

 
 

 

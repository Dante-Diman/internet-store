import {createAction, createReducer} from '@reduxjs/toolkit';
import coat2 from '../assets/catalog/coats/2.jpg';


let initialState ={ [
      {id:1, productUrl:coat2, productTitle:"Coat", productPrice:"90$", productDescription:"Coat-1" , count:1}/*не убирать пустой элемент - элементы не добавляются в пустой массив*/
    ]
       
    }
  
  export const ShowDatailsReducer = createAction('SHOW_DETAILS_REDUCER'); 
 /*  export const DelFromCartReducer = createAction('DEL_FROM_CART'); 
export const up_QTYReducer = createAction('up_QTY'); 
export const down_QTYReducer = createAction('down_QTY');  */

  export default createReducer(initialState, {

    [ShowDatailsReducer]: function (state, action){
    
      let Options = action.payload;

      state.id = Options.id; 


   console.log(state)
     
    },


  
  
   

  }) 

 
 

 

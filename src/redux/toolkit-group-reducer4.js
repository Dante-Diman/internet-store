import {createAction, createReducer} from '@reduxjs/toolkit';

import img1 from '../assets/catalog/TShorts/1.jpg';
import img2 from '../assets/catalog/TShorts/2.jpg';
import img3 from '../assets/catalog/TShorts/3.jpg';
import img4 from '../assets/catalog/TShorts/4.jpg';
import img5 from '../assets/catalog/TShorts/5.jpg';

let initialState ={ 
       
    showMore: false,
    productList:[
        {id:1, productUrl:img1, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-1"  },
        {id:2, productUrl:img2, productTitle:"TShort", productPrice:"0$", productDescription:"TShort-2"  },
        {id:3, productUrl:img3, productTitle:"TShort",productPrice:"0$", productDescription:"TShort-3" },
        {id:4, productUrl:img4, productTitle:"TShort",productPrice:"0$", productDescription:"TShort-4"  },
        {id:5, productUrl:img5, productTitle:"TShort",productPrice:"0$", productDescription:"TShort-5"  }
  
    ],
  
    }
  
 export const CatalogReducerGroup4 = createAction('SHOW_MORE4');
  export default createReducer(initialState, {
    [CatalogReducerGroup4]: function (state){
      if (state.showMore===false) {
        state.showMore = true
      }
      else{
        state.showMore = false
      }
    
    }

  })      

console.log(CatalogReducerGroup4)
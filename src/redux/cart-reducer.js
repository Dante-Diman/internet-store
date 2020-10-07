import {createAction, createReducer} from '@reduxjs/toolkit';



let initialState ={ 
       
    showMore: false,
    CartList:[{},/*не убирать пустой элемент - элементы не добавляются в пустой массив*/
   
    ],
    
    }
  
  export const AddToCartReducer = createAction('ADD_TO_CART' ); 
  export const DelFromCartReducer = createAction('DEL_FROM_CART'); 

  export default createReducer(initialState, {

    [AddToCartReducer]: function (state, action){
    
      

      let AddProductOptions = action.payload;
      
      let increment = action.payload.count;
     
   
      if (state.CartList.length >= 0) {
        let p;
        let oldCart = state.CartList.map (m => (m.count));
        
       state.CartList.filter( m => ((m.id === AddProductOptions.id) ?
        m.count=m.count+increment  :  m.count  )
        );
        state.CartList.find( m => ((m.id === AddProductOptions.id) ?
        p=true  :  p=false  )
        );
        if(p===false){
          state.CartList.push(AddProductOptions);
        }
        let newCart = state.CartList.map (m => (m.count))
        
        if (oldCart===newCart){
          state.CartList.push(AddProductOptions);
        } 
     
        
      }
   
     
    },


    [DelFromCartReducer]: function (state, action){
     
      let  delid = action.payload.id;
      let DelProdDesc = action.payload.productDescription;
       let  delproduct = state.CartList.findIndex(product => ((product.id === delid) && (product.productDescription === DelProdDesc)));
       state.CartList.splice(delproduct, 1);
    }

  }) 

 
 

 
console.log(AddToCartReducer)
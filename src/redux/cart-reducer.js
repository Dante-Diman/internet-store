import {createAction, createReducer} from '@reduxjs/toolkit';
import coat2 from '../assets/catalog/coats/2.jpg';


let initialState ={ 
  chosenSize:null,
    showMore: false,
    CartList:[{},
      {id:1, productUrl:coat2, productTitle:"Coat", productPrice:"90$", productDescription:"Coat-1" , count:1, size:null}/*не убирать пустой элемент - элементы не добавляются в пустой массив*/
   
    ],
    
    }
  
  export const AddToCartReducer = createAction('ADD_TO_CART' ); 
   
  export const DelFromCartReducer = createAction('DEL_FROM_CART'); 
export const up_QTYReducer = createAction('up_QTY'); 
export const down_QTYReducer = createAction('down_QTY'); 
export const chosenSizeReducer = createAction('CHOSEN_SIZE_REDUCER' );

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
    },
    [up_QTYReducer]:function (state, action){
      let AddProductOptions = action.payload;
      let increment = 1;
      state.CartList.filter( m => ((m.id === AddProductOptions.id) ?
       m.count=m.count+increment  :  m.count  )
        );
    },
    [down_QTYReducer]:function (state, action){
      let AddProductOptions = action.payload;
      let increment = 1;
      if (AddProductOptions.count > 1){
        state.CartList.filter( m => ((m.id === AddProductOptions.id) ?
       m.count=m.count-increment  :  m.count  )
        );
      }
      
    },
    [chosenSizeReducer]: function (state, action){
      
      let newSize = action.payload;
        console.log('выбран размер'+ newSize)
        state.chosenSize = newSize;
    },
  }) 

 
 

 

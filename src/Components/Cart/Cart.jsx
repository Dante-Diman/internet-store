

import React from 'react';


import style from './Cart.module.scss';
import CartItemContainer from './CartItemContainer';

class Cart extends React.Component {

  




    render() {
      
      let state = this.props.Cart;

      const numberOfItems =  state.CartList.length ;
    
      let CartElements = state.CartList.slice(1, numberOfItems).map( p => (<CartItemContainer
         id={p.id} productUrl={p.productUrl} 
         productPrice={p.productPrice} 
         productDescription={p.productDescription} 
         count={p.count}
         
         />));

        return (
<>



<div className={style.category_title}>Coats</div>

            <div className={style.product_category}>
            {CartElements}    
        
            </div>

</>
            );

               
    }
}
export default Cart;



import React from 'react';


import style from './Cart.module.scss';
import CartItemContainer from './CartItemContainer';

class Cart extends React.Component {

  




    render() {
      
      let state = this.props.Cart;


let showMore =state.showMore;
      const numberOfItems = showMore ? state.CartList.length : 4
    
      let CartElements = state.CartList.slice(0, numberOfItems).map( p => (<CartItemContainer id={p.id} productUrl={p.productUrl} productPrice={p.productPrice} productDescription={p.productDescription}/>));

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

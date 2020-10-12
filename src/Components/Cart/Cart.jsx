

import React from 'react';


import style from './Cart.module.scss';
import CartItemContainer from './CartItemContainer';
import CartShiping from './CartShiping';

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
<div className={`${style.Cart_Title_Block}`}>
<p className={`${style.Cart_Title}`}>Your Shopping Bag</p>
<i className={`${style.Cart_Title_description}`}>Items reserved for limited time only</i>
</div>
<div className={style.category_title}>
  <div className={`${style.cartItem_column}`} >PRODUCT</div>
  <div className={`${style.cartItem_column}`}>DESCRIPTION</div>
  <div className={`${style.cartItem_column}`}>COLOR</div>
  <div className={`${style.cartItem_column}`}>SIZE</div>
  <div className={`${style.cartItem_column}`}>QTY</div>
  <div className={`${style.cartItem_column}`}>AMOUNT</div>
  <div className={`${style.cartItem_column}`}>DELETE</div>
</div>

            <div className={style.product_category}>
            {CartElements}    
        
            </div>
<div className={`${style.cart_totalSum}`}></div>

<div className={`${style.Cart_Title_Block}`}>
<p className={`${style.Cart_Title}`}>Shipping address </p>
<i className={`${style.Cart_Title_description}`}>All fields are required</i>
</div>
<CartShiping />
<div className={`${style.Cart_Title_Block}`}>
<p className={`${style.Cart_Title}`}>Payment options</p>
<i className={`${style.Cart_Title_description}`}>All fields are required</i>
</div>

</>
            );

               
    }
}
export default Cart;

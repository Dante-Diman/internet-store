

import React from 'react';


import style from './Cart.module.scss';
import CartItemContainer from './CartItemContainer';
import CartShiping from './CartShiping';

class Cart extends React.Component {

  




    render() {
     
      let state = this.props.Cart;

      const numberOfItems =  state.CartList.length ;
    
      let CartElements = state.CartList.slice(1, numberOfItems).map( p => (
      <CartItemContainer
         id={p.id}
         productUrl={p.productUrl} 
         productPrice={p.productPrice} 
         productDescription={p.productDescription} 
         count={p.count}
         size={p.size}
         />));

        return (
<>
<div className={`${style.Cart_Title_Block}`}>
<p className={`${style.Cart_Title}`}>Your Shopping Bag</p>
<i className={`${style.Cart_Title_description}`}>Items reserved for limited time only</i>
</div>
<div className={style.cart_products_wrapper}>
<div className={style.category_title}>
  <div className={`${style.cartItem_column}`} >PRODUCT</div>
  <div className={`${style.cartItem_column}`}>DESC</div>
  <div className={`${style.cartItem_column}`}>COL</div>
  <div className={`${style.cartItem_column}`}>S</div>
  <div className={`${style.cartItem_column}`}>Q</div>
  <div className={`${style.cartItem_column}`}>AMOUNT</div>
  <div className={`${style.cartItem_column}`}>DEL</div>
</div>

            <div className={style.product_category}>
            {CartElements}    
        
            </div>
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



import React from 'react';
import style from './Cart.module.scss';




 
export default class CartItem extends React.Component {
 
 
    render() {
        
        let options= {
            id: this.props.id,
            productUrl:this.props.productUrl,
            productPrice:this.props.productPrice,
            productDescription:this.props.productDescription,
            count:this.props.count,
            productSize:this.props.size,

        }
     
        let DelFromCartReducer = () => {
            this.props.DelFromCartReducer(options);
        };
        let up_QTYReducer = () => {
            this.props.up_QTYReducer(options);
        };
        let down_QTYReducer = () => {
            this.props.down_QTYReducer(options);
        }
               
        return (
<>
        
         
              <div className={style.product_card} >

<div className={`${style.product_image} ${style.cartItem_column}`} style={{
                backgroundImage: `url(${options.productUrl})`,
             
              }}>
</div> 
  <div className={`${style.product_card_description} ${style.cartItem_column}`}>
      {options.productDescription}
    <div >ID товара:{options.id}</div>
  </div>
  <div className={`${style.product_card_color} ${style.cartItem_column}`}>{options.productColor}</div>
  <div className={`${style.product_card_size} ${style.cartItem_column}`}>{options.productSize}</div>
  <div className={`${style.product_card_QTY} ${style.cartItem_column}`}>
      {options.count} 
  <div className={`${style.Cart_QTY_buttons}`}>
  <button className={`${style.up_QTY}`} onClick={up_QTYReducer}>+</button>
  <button className={`${style.down_QTY}`} onClick={down_QTYReducer}>-</button> 
  </div>
  
  
  </div>
  <div className={`${style.product_card_amount} ${style.cartItem_column}`}>{options.productPrice}</div>
  
  
  <button className={`${style.del_button} ${style.cartItem_column}`} onClick={DelFromCartReducer}>X</button>
  </div>

</>       
            );
        
    }
}
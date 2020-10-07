

import React from 'react';
import style from './ProductCard.module.scss';




 
export default class ProductCard extends React.Component {
 
 
    render() {
        let options= {
            id: this.props.id,
            productUrl:this.props.productUrl,
            productPrice:this.props.productPrice,
            productDescription:this.props.productDescription,
            count:this.props.count   
        }      
        let AddToCart = () => {
           
            this.props.AddToCartReducer(options);
           
        }
               
        return (
          
              <div className={style.product_card} >

 <div className={style.product_image} style={{
                backgroundImage: `url(${this.props.productUrl})`,
               
              }}></div> 
  <div className={style.product_card_description}>{options.productDescription}</div>
  <div className={style.product_card_price}>{options.productPrice}</div>
  
  <button className={style.buy_button} onClick={AddToCart}>add to cart</button>
  </div>
                     
            );
        
    }
}
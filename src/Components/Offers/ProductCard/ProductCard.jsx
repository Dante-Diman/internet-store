

import React from 'react';
import style from './ProductCard.module.scss';




 
export default class ProductCard extends React.Component {
 
 
    render() {
        let options= {
            id: this.props.id,
            productUrl:this.props.productUrl,
            productPrice:this.props.productPrice,
            productDescription:this.props.productDescription
        }      
        let AddToCart = () => {
           
            this.props.AddToCartReducer(options);
           
        }
               
        return (
          
              <div className={style.product_card} >

 <div className={style.product_image} style={{
                backgroundImage: `url(${this.props.productUrl})`,
               /*  width: this.props.IMGwidth,
                height: this.props.IMGheight */
              }}></div> 
  <div className={style.product_card_description}>{this.props.productDescription}</div>
  <div className={style.product_card_price}>{this.props.productPrice}</div>
  <button className={style.buy_button} onClick={AddToCart}>Добавить в корзину</button>
  </div>
                     
            );
        
    }
}
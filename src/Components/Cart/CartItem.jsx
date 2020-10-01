

import React from 'react';
import style from './CartItem.module.scss';




 
export default class CartItem extends React.Component {
 
 
    render() {
        
        let options= {
            id: this.props.id,
            productUrl:this.props.productUrl,
            productPrice:this.props.productPrice,
            productDescription:this.props.productDescription
        }
     
        let DelFromCartReducer = () => {
            this.props.DelFromCartReducer(options);
        }
               
        return (
          
              <div className={style.product_card} >

 <div className={style.product_image} style={{
                backgroundImage: `url(${this.props.productUrl})`,
             
              }}></div> 
  <div className={style.product_card_description}>{this.props.productDescription}</div>
  <div className={style.product_card_price}>{this.props.productPrice}</div>
  <div >ID товара:{this.props.id}
           
  </div>
  <div>Количество : ({this.props.count})  </div>
  <button className={style.buy_button} onClick={DelFromCartReducer}>Удалить из карзины</button>
  </div>
                     
            );
        
    }
}
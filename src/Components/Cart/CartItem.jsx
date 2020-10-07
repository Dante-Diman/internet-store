

import React from 'react';
import style from './CartItem.module.scss';




 
export default class CartItem extends React.Component {
 
 
    render() {
        
        let options= {
            id: this.props.id,
            productUrl:this.props.productUrl,
            productPrice:this.props.productPrice,
            productDescription:this.props.productDescription,
            count:this.props.count,

        }
     
        let DelFromCartReducer = () => {
            this.props.DelFromCartReducer(options);
        }
               
        return (
          
              <div className={style.product_card} >

 <div className={style.product_image} style={{
                backgroundImage: `url(${options.productUrl})`,
             
              }}></div> 
  <div className={style.product_card_description}>{options.productDescription}</div>
  <div className={style.product_card_price}>{options.productPrice}</div>
  <div >ID товара:{options.id}
           
  </div>
  <div>Количество : ({options.count})  </div>
  <button className={style.buy_button} onClick={DelFromCartReducer}>Удалить из карзины</button>
  </div>
                     
            );
        
    }
}

import React from 'react';
import style from './BuyBlock.module.scss';
import LikeButton from '../Likebutton/LikeButton'
class BuyBlock extends React.Component {
    
    
    render() {
    
               
        return (
           
        <div className={style.BuyBlock_wrapper}>
            <div className={style.cost_item}>
            <p className={style.real_price}>140₽ <span className={style.old_price}>203₽</span></p>
            </div>
            <div className={style.btn_wrapper}>
            <button className={style.buyButton}>в корзину</button>
            <LikeButton />
            </div>

            <div className={style.delivery}>
                            
            <p><span>ваш регион:</span> {this.props.region} </p>
            <p><span>доставка:</span> {this.props.deliveryTime} </p>
            </div>
        </div>

        
            
         

            );



            
               

                
    }
}
export default BuyBlock;

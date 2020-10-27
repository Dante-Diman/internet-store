

import React from 'react';
import ReactImageZoom from 'react-image-zoom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import img1 from '../../assets/catalog/jackets/1.jpg';
import img2 from '../../assets/catalog/jackets/2.jpg';
import style from './Catalog1.module.scss';
import BuyBlock from './BuyBlock/BuyBlock';
class Catalog1 extends React.Component {
    
    state = {
        productUrl: img1,
        productTitle:'Jacket-red',
        productDescription:'Jacket for pretty womans',
        region:'Красноярск',
        deliveryTime:'10 сентября'
    }
    toggleProductUrl_1 = () =>{
         this.setState({
            productUrl:img1,  
            productTitle:'Jacket-red',
            productDescription:'Jacket for pretty womans'
    });
}
toggleProductUrl_2 = () =>{
    this.setState({
       productUrl:img2,  
       productTitle:'Jacket-black',
       productDescription:'Jacket for you watsup Bro?',
    
});
}

    render() {
    
               
        return (
        <div className={style.desk}>
            <Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item href="/internet-store/catalog/">
  catalog
  </Breadcrumb.Item>
  <Breadcrumb.Item active>1</Breadcrumb.Item>
</Breadcrumb>
            <div className={style.card_info}>
                <p>
                {this.state.productTitle}   
                </p>
                <p>
                {this.state.productDescription} 
                </p>        
            </div>
            
            <div className={style.card_item}>
                
                <div className={style.select_items}>
                    <div className={style.item_icon}>
                        <img src={img1} alt="" onMouseOver={this.toggleProductUrl_1} />
                    </div>
                    <div className={style.item_icon}>
                        <img src={img2} alt="" onMouseOver={this.toggleProductUrl_2} />
                    </div>
                    <div className={style.item_icon}>
                                <img src={img1} alt="" onMouseOver={this.toggleProductUrl_1} />
                            </div>
                </div>
                <div className={style.zoom_item}>
                <ReactImageZoom img={this.state.productUrl} zoomPosition='original' />
                </div>
                <div className={style.zoom_item_mobile}>
                <img src={this.state.productUrl} alt="product" />
                
                </div>
            </div>
            <div className={style.buy_block}>
                <BuyBlock region={this.state.region} deliveryTime={this.state.deliveryTime}/>
                </div>
        </div>

    


            );



            
               

                
    }
}
export default Catalog1;

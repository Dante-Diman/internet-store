
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import style from './ProductDetails.module.scss';

class ProductDetails extends React.Component {
 
    render() {
        
        let options= {
            id: this.props.ProductOptions.id ,
            productTitle: this.props.ProductOptions.productTitle,
            productUrl:this.props.ProductOptions.productUrl,
            productPrice:this.props.ProductOptions.productPrice,
            productDescription:this.props.ProductOptions.productDescription,
            count:this.props.ProductOptions.count   
        }      
     
      
       
        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item href="/internet-store/catalog/2">
  catalog
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/internet-store/catalog/2">
  all
  </Breadcrumb.Item>
        <Breadcrumb.Item active>product:{options.id}</Breadcrumb.Item>
</Breadcrumb>

<div className={style.card}>
    <div className={style.main_image}>

        <div className={style.image_icons_wrapper}>
            <div className={style.icon_image}></div>
            <div className={style.icon_image}></div>
            <div className={style.icon_image}></div>
        </div>

    </div>
    <div className={style.card}>
        <div className={style.card_title}>{options.productTitle}</div>
        <div className={style.card_article}>Article number:{options.id}</div>
        <div className={style.card_price}>{options.productPrice}</div>
    </div>
    <div className={style.card_productDescription}>{options.productDescription}</div>
</div>         





</>
            );

   
    }
}



export default ProductDetails;
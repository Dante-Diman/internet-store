

import React from 'react';

import style from './ProductGroup.module.scss';

import ProductCardContainer from '../ProductCard/ProductCardContainer';

class ProductGroup extends React.Component {

  


handleClick() {

  this.props.Group_Reducer();
 

}

    render() {
    
      let state = this.props.Catalog;


let showMore =state.showMore;
      const numberOfItems = showMore ? state.productList.length : 4
     
      let postElements = state.productList.slice(0, numberOfItems).map( p => (
      <ProductCardContainer 

      
      id={p.id} 
      productTitle={p.productTitle} 
      productUrl={p.productUrl} 
      productPrice={p.productPrice} 
      productDescription={p.productDescription} 
      count={p.count} 
      sizes={p.sizes}
      
      />));
     
        return (
<>



<div className={style.category_title}>{state.productGroupTitle}</div>
<div>
<button className={style.button_show} onClick={()=> this.handleClick()}>show more </button><span>➤</span>
</div>

            <div className={style.product_category}>
            {postElements}    
        
            </div>

</>
            );

               
    }
}
export default ProductGroup;

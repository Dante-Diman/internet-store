

import React from 'react';

import style from './ProductGroup.module.scss';
import ProductCard from '../ProductCard/ProductCard';
class ProductGroup extends React.Component {

  


handleClick() {
  
  this.props.Group_Reducer();
 

}

    render() {
     
      let state = this.props.Catalog;
/* группа пальто */

let showMore =state.showMore;
      const numberOfItems = showMore ? state.productList.length : 4
     
      let postElements = state.productList.slice(0, numberOfItems).map( p => (<ProductCard  id={p.id} productUrl={p.productUrl} productPrice={p.productPrice} productDescription={p.productDescription}/>));

        return (
<>



<div className={style.category_title}>Coats</div>
<button className={style.button_show} onClick={()=> this.handleClick()}>show more <span>&#9658;</span></button>
            <div className={style.product_category}>
            {postElements}    
        
            </div>

</>
            );

               
    }
}
export default ProductGroup;

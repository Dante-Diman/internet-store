

import React from 'react';


import img1 from '../../../assets/catalog/coats/1.jpg';
import img2 from '../../../assets/catalog/coats/2.jpg';
import img3 from '../../../assets/catalog/coats/3.jpg';
import img4 from '../../../assets/catalog/coats/4.jpg';

import img5 from '../../../assets/catalog/coats/5.jfif';




import style from './ProductGroup.module.scss';
import ProductCard from '../ProductCard/ProductCard';
class ProductGroup extends React.Component {

  


handleClick() {
 
  this.props.Group_1_Reducer();


}

    render() {
      
      let state = this.props.Catalog.Group_1;
/* группа пальто */
let showMore =this.props.Catalog.showMore;
      const numberOfItems = showMore ? state.productList.length : 4
     
      let postElements = state.productList.slice(0, numberOfItems).map( p => (<ProductCard  id={p.id} productUrl={p.productUrl} productPrice={p.productPrice} productDescription={p.productDescription}/>));
console.log(this.props)
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

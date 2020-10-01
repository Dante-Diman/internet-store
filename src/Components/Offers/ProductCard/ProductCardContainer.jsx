

import React from 'react';
import { connect } from 'react-redux';
import {AddToCartReducer} from '../../../redux/cart-reducer';

import ProductCard from './ProductCard';



class ProductCardContainer extends React.Component {
 
    render() {
     

        return (
<>
<ProductCard {...this.props} Cart={this.props.Cart}/>


</>
            );

   
    }
}
let mapStateToProps = (state) => ({
    Catalog: state.ProductGroup1,
    Cart: state.Cart
      
      
    });

let mapDispatchToProps = (dispatch) =>{
  return {
   
    AddToCartReducer:(options) =>{
      dispatch(AddToCartReducer(options));
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps) (ProductCardContainer);
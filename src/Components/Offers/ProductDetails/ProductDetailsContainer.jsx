

import React from 'react';
import { connect } from 'react-redux';
import { ShowDatailsReducer } from '../../../redux/product-details-reducer';
import ProductDetails from './ProductDetails';
/* import {AddToCartReducer} from '../../../redux/cart-reducer';
 */





class ProductDetailsContainer extends React.Component {
 
    render() {
     

        return (
<>
<ProductDetails {...this.props}  />


</>
            );

   
    }
}
let mapStateToProps = (state) => ({
   
  ProductOptions : state.ProductOptions
      
      
    });

let mapDispatchToProps = (dispatch) =>{
  return {
   
    showDatailsReducer:() =>{
      dispatch(ShowDatailsReducer());
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps) (ProductDetailsContainer);
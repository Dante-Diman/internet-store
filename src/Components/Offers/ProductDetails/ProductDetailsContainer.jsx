

import React from 'react';
import { connect } from 'react-redux';
import {showDatailsReducer} from '../../../redux/product-details-reducer';
import ProductDetails from './ProductDetails';
/* import {AddToCartReducer} from '../../../redux/cart-reducer';
 */





class ProductDetailsContainer extends React.Component {
 
    render() {
     

        return (
<>
<ProductDetails {...this.props} ProductOptions={this.props.ProductOptions}/>


</>
            );

   
    }
}
let mapStateToProps = (state) => ({
   
  ProductOptions: state.ProductDetails.ProductOptions
      
      
    });

let mapDispatchToProps = (dispatch) =>{
  return {
   
    AddToCartReducer:(options) =>{
      dispatch(showDatailsReducer(options));
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps) (ProductDetailsContainer);
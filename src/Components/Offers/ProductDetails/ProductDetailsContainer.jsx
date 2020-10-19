

import React from 'react';
import { connect } from 'react-redux';
import { AddToCartReducer, chosenSizeReducer } from '../../../redux/cart-reducer';
import { ShowDatailsReducer } from '../../../redux/product-details-reducer';
import ProductDetails from './ProductDetails';
/* import {AddToCartReducer} from '../../../redux/cart-reducer';
 */





class ProductDetailsContainer extends React.Component {
 
    render() {
     

        return (
<>
<ProductDetails {...this.props}  ProductOptions={this.props.ProductOptions}/>


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
    },
    AddToCartReducer:(options) =>{
      dispatch(AddToCartReducer(options));
    },
    ChosenSize:(p) =>{
      dispatch(chosenSizeReducer(p));
    },
  }
} 
export default connect(mapStateToProps, mapDispatchToProps) (ProductDetailsContainer);
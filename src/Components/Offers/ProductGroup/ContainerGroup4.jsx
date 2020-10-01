

import React from 'react';
import { connect } from 'react-redux';
import { AddToCartReducer } from '../../../redux/cart-reducer';
import {CatalogReducerGroup4} from '../../../redux/catalog-group-reducer';
import ProductGroup from './ProductGroup';


class ContainerGroup4 extends React.Component {
 
    render() {
      

        return (
<>
<ProductGroup {...this.props} Catalog={this.props.Catalog} Cart={this.props.Cart}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
  Catalog: state.CatalogReducerGroup.Group4,
  Cart: state.Cart
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    Group_Reducer: () => {
      dispatch(CatalogReducerGroup4());
    },
    AddToCartReducer:() =>{
      dispatch(AddToCartReducer());
    }
  
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (ContainerGroup4);
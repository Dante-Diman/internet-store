

import React from 'react';
import { connect } from 'react-redux';
import { AddToCartReducer } from '../../../redux/cart-reducer';
import {CatalogReducerGroup3} from '../../../redux/catalog-group-reducer';
import ProductGroup from './ProductGroup';


class ContainerGroup3 extends React.Component {
 
    render() {
      

        return (
<>
<ProductGroup {...this.props} Catalog={this.props.Catalog} Cart={this.props.Cart}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
  Catalog: state.CatalogReducerGroup.Group3,
  Cart: state.Cart
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    Group_Reducer: () => {
      dispatch(CatalogReducerGroup3());
    },
    AddToCartReducer:() =>{
      dispatch(AddToCartReducer());
    }
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (ContainerGroup3);
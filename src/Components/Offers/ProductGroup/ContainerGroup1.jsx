

import React from 'react';
import { connect } from 'react-redux';
import  AddToCartReducer  from '../../../redux/cart-reducer';
import {Group_Reducer} from '../../../redux/catalog-reducer-group1';
import ProductGroup from './ProductGroup';


class ContainerGroup1 extends React.Component {
 
    render() {
      

        return (
<>
<ProductGroup {...this.props} Catalog={this.props.Catalog}  Cart={this.props.Cart} />


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
    Group_Reducer: () => {
      dispatch(Group_Reducer());
    },
    AddToCartReducer:() =>{
      dispatch(AddToCartReducer());
    }
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (ContainerGroup1);
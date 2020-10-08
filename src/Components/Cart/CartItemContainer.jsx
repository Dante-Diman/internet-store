

import React from 'react';
import { connect } from 'react-redux';

import { AddToCartReducer, DelFromCartReducer, down_QTYReducer, up_QTYReducer } from '../../redux/cart-reducer';



import CartItem from './CartItem';


class CartItemContainer extends React.Component {
 
    render() {
      

        return (
<>
<CartItem {...this.props} Cart={this.props.Cart}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
Cart: state.Cart,
  
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    AddToCartReducer: () => {
      dispatch(AddToCartReducer());
    },
    DelFromCartReducer: (options) => {
      dispatch(DelFromCartReducer(options));
    },
    up_QTYReducer: (options) => {
      dispatch(up_QTYReducer(options));
    },
    down_QTYReducer: (options) => {
      dispatch(down_QTYReducer(options));
    },
    
   
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (CartItemContainer);
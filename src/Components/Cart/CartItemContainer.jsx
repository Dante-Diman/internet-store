

import React from 'react';
import { connect } from 'react-redux';

import { DelFromCartReducer } from '../../redux/cart-reducer';



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
   /*  AddToCartReducer: () => {
      dispatch(AddToCartReducer());
    }, */
    DelFromCartReducer: (options) => {
      dispatch(DelFromCartReducer(options));
    },
   
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (CartItemContainer);
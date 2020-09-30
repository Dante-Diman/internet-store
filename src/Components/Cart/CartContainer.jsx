

import React from 'react';
import { connect } from 'react-redux';




import Cart from './Cart';


class CartContainer extends React.Component {
 
    render() {
      

        return (
<>
<Cart {...this.props} Cart={this.props.Cart}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
Cart: state.Cart,
  
  
});
let mapDispatchToProps = (dispatch) =>{
  return {

   
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
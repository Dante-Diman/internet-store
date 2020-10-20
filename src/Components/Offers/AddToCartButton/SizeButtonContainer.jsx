import React from 'react'; 
import { connect } from 'react-redux';
import { chosenSizeReducer } from '../../../redux/cart-reducer';

import SizeButton from './SizeButton';


class SizeButtonContainer extends React.Component {
    
           
    render() {
            
       
        return (
 <>
<SizeButton {...this.props} />
</>
        );
        }
}

let mapDispatchToProps = (dispatch) =>{
        return {
                chosenSizeReducer:(size) => {
            dispatch(chosenSizeReducer (size) );
          }
        }
      } 
export default connect(null,mapDispatchToProps) (SizeButtonContainer);
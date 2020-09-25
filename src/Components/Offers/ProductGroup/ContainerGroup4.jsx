

import React from 'react';
import { connect } from 'react-redux';
import {CatalogReducerGroup4} from '../../../redux/toolkit-group-reducer4';
import ProductGroup from './ProductGroup';


class ContainerGroup4 extends React.Component {
 
    render() {
      

        return (
<>
<ProductGroup {...this.props} Catalog={this.props.Catalog}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
Catalog: state.toolkit,
  
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    Group_Reducer: () => {
      dispatch(CatalogReducerGroup4());
    },
   
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (ContainerGroup4);
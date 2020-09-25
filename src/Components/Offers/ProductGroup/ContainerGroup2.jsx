

import React from 'react';
import { connect } from 'react-redux';
import {Group_Reducer} from '../../../redux/catalog-reducer-group2';
import ProductGroup from './ProductGroup';


class ContainerGroup2 extends React.Component {
 
    render() {
      

        return (
<>
<ProductGroup {...this.props} Catalog={this.props.Catalog}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
Catalog: state.ProductGroup2,
  
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    Group_Reducer: () => {
      dispatch(Group_Reducer());
    },
   
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (ContainerGroup2);
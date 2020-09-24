

import React from 'react';
import { connect } from 'react-redux';
import {Group_1_Reducer, Group_2_Reducer} from '../../redux/catalog-reducer';






import ProductGroup from './ProductGroup/ProductGroup';
class Catalog2 extends React.Component {
 
    render() {
      

        return (
<>
<ProductGroup {...this.props} Catalog={this.props.Catalog}/>


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
Catalog: state.Catalog,
  
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    Group_1_Reducer: () => {
      dispatch(Group_1_Reducer());
    },
    Group_2_Reducer: () => {
      dispatch(Group_2_Reducer());
    }

  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (Catalog2);
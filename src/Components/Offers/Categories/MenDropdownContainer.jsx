

import React from 'react';
import { connect } from 'react-redux';
import  AddToCartReducer  from '../../../redux/cart-reducer';
import {CatalogReducerGroup1} from '../../../redux/catalog-group-reducer';
import { ShowDatailsReducer } from '../../../redux/product-details-reducer';
import MenDropdown from './MenDropdown';




class MenDropdownContainer extends React.Component {
 
    render() {
     

        return (
<>
<MenDropdown {...this.props} Price={this.props.Catalog}  Cart={this.props.Cart} />
<MenDropdown {...this.props} Sizes={this.props.Catalog}  Cart={this.props.Cart} />
<MenDropdown {...this.props} Colors={this.props.Catalog}  Cart={this.props.Cart} />


</>
            );

   
    }
}

let mapStateToProps = (state) => ({
 
Price: state.CatalogReducerGroup.SearchOptions.prices,
Sizes: state.CatalogReducerGroup.SearchOptions.sizes,
Colors: state.CatalogReducerGroup.SearchOptions.colors,

Cart: state.Cart
  
  
});
let mapDispatchToProps = (dispatch) =>{
  return {
    Group_Reducer: () => {
      dispatch(CatalogReducerGroup1());
    },
    AddToCartReducer:() =>{
      dispatch(AddToCartReducer());
    },
    ShowDatailsReducer:(Options) =>{
      dispatch(ShowDatailsReducer (Options));
    }
  }
} 
export default connect(mapStateToProps,mapDispatchToProps) (MenDropdownContainer);
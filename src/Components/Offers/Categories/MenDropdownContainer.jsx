

import React from 'react';
import { connect } from 'react-redux';

import MenDropdown from './MenDropdown';
import style from './Men.module.scss';



class MenDropdownContainer extends React.Component {
 
    render() {
     

        return (
<>
<div className={style.lists}>
<MenDropdown {...this.props}  SearchOptions={this.props.Search.sizes} />
<MenDropdown {...this.props}  SearchOptions={this.props.Search.prices} />
<MenDropdown {...this.props}  SearchOptions={this.props.Search.colors} />

</div>
</>
            );

   
    }
}

let mapStateToProps = (state) => ({
  Search: state.CatalogReducerGroup.SearchOptions
});

/* let mapDispatchToProps = (dispatch) =>{
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
}  */
export default connect(mapStateToProps, null) (MenDropdownContainer);
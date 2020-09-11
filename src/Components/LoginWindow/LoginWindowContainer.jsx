import React from 'react';


import { connect } from 'react-redux';
import Offer from './Offer';
import {setSelectedTarif} from './../../redux/'


class OfferContainer extends React.Component {
 render () {
    
    return (
      <div className={s.wrapperContent}>
<LoginWindow {...this.props} loginWindow={this.props.loginWindow}/>

      </div>
   /*    <div className={s.wrapperContent}>
      <Offer {...this.props} priceList={this.props.priceList.tarifs.premiumTarif}   />
      <Offer {...this.props} priceList={this.props.priceList.tarifs.standartTarif} />
      <Offer {...this.props} priceList={this.props.priceList.tarifs.baseTarif}     />
      </div> */
    );
  }
}

let mapStateToProps = (state) => ({
  loginWindow: state.loginWindow,
  /* priceList: state.priceList, */
  
});

 let mapDispatchToProps = (dispatch) =>{
  return {
    setSelectedTarif: (newTarif) => {
      dispatch(setSelectedTarif(newTarif));
    },
    

  }
} 

export default connect(mapStateToProps,mapDispatchToProps) (OfferContainer);
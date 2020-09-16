import React from 'react';
import { connect } from 'react-redux';
import style from './LoginWindow.module.scss';
import {CloseWindowReducer} from '../../redux/login-window-reducer';
import LoginWindow from './LoginWindow';


class LoginWindowContainer extends React.Component {
 render () {
    
    return (
      <div className={style.wrapperContent}>
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
    CloseWindowReducer: (close) => {
      dispatch(CloseWindowReducer(close));
    },
    

  }
} 

export default connect(mapStateToProps,mapDispatchToProps) (LoginWindowContainer);
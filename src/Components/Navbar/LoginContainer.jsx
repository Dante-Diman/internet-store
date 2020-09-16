import React from 'react';
import { connect } from 'react-redux';

import {OpenWindowReducer} from '../../redux/login-window-reducer';
import Login from './Login';


class LoginContainer extends React.Component {

 render () {
    
    return (
      <>
<Login {...this.props} loginWindow={this.props.loginWindow}/>

      </>

    );
  }
}

let mapStateToProps = (state) => ({
  loginWindow: state.loginWindow,
  
  
});

 let mapDispatchToProps = (dispatch) =>{
  return {
    OpenWindowReducer: () => {
      dispatch(OpenWindowReducer());
    },
    

  }
} 

export default connect(mapStateToProps,mapDispatchToProps) (LoginContainer);
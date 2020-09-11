import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'bootstrap-4-react';
import style from './LoginWindow.module.scss';



export const HomeWrapper = styled.div`

`;


class LoginWindow extends React.Component {
 
  state = {
    togleswitch: this.props.togleswitch,
    togleStyleOn: this.props.togleStyleOn,
      
  }
  toggleLoginMenu = () =>{
    if(this.state.togleswitch){
   this.setState({
      togleStyleOn:'',
      togleswitch:true,
   })
  }
  else{
      this.setState({
          togleStyleOn:style.close_Window,
          togleswitch:false,
       })
  }

   
  };

 
  
    render () {
      
      return (
        <div className={`${style.login_window} }`}>
<div className={`${this.state.togleStyleOn}`}>
        <HomeWrapper>
    <Form>
        <Form.Group>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
          <Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">Password</label>
          <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Button primary type="submit">Submit</Button>
        <Button primary type="submit" onClick={this.toggleLoginMenu}>Cancel</Button>
      </Form>
        </HomeWrapper>
        </div>
        </div>
      );
    }
}
  export default LoginWindow;
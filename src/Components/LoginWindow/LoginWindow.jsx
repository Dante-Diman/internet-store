import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'bootstrap-4-react';
import style from './LoginWindow.module.scss';



export const HomeWrapper = styled.div`

`;



class LoginWindow extends React.Component {
 
  closeLoginMenu = () =>{
    this.props.CloseWindowReducer.action;
  };
 

   
  

 
  
    render () {
     /*  let togleswitch = this.props.togleswitch; */
    

     console.log(this.props)
      return (
        <div className={`${style.login_window} }`}>
<div className={this.props.loginWindow.togleStyleOn}>
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
        <Button primary type="submit" onClick={this.props.loginWindow.CloseWindowReducer}>Cancel</Button>
      </Form>
        </HomeWrapper>
        </div>
        </div>
      );
    }
}
  export default LoginWindow;
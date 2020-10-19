import React from 'react'; 
import { connect } from 'react-redux';
import { chosenSizeReducer } from '../../../redux/cart-reducer';
import style from './SizeButton.module.scss';

class SizeButton extends React.Component {
    
           
    render() {
            debugger;
        let  options = {
                size : this.props.size 
        }
              
       let ChosenSize = () =>{
               this.props.chosenSizeReducer();
        } 
         
      
        
          
        return (
<button onClick={ChosenSize} className={style.sizeOpt}>  {options.size}</button>
        )
}}
let mapDispatchToProps = (dispatch) =>{
        return {
         
         
          ChosenSize:(p) =>{
            dispatch(chosenSizeReducer(p));
          },
        }
      } 
export default connect(mapDispatchToProps) (SizeButton);
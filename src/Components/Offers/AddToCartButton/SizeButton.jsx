import React from 'react'; 
import style from './SizeButton.module.scss';

class SizeButton extends React.Component {
    
           
    render() {
           
        
              let  size = this.props.size ;
       

       let chosenSizeReducer = () => {
               this.props.chosenSizeReducer(size);
        } 
         
      
        
          
        return (
<button className={style.sizeOpt} onClick={chosenSizeReducer}>  {size}</button>
        )
}}

export default SizeButton;
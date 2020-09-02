import React from 'react';
import style from './SignBlock.module.scss';



class SignBlock extends React.Component {
render(){

    
    return (
<div >
    <h2 className={style.sign_title}>sign up to receive our updates</h2>
    <p className={style.sign_p} >Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.</p>
        <div className={style.email_block}>
          <input placeholder =  "Your e-mail" type="email" name="userEmail" id="userEmail"/>  
          <button >add</button>
          </div>
        </div>
        );
        
};




}
export default SignBlock;
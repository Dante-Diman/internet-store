import React from 'react';
import style from "./Search.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import LoginContainer from './LoginContainer';


 
export default class Search extends React.Component {
 

     render() {
   
        
    return (
        <div className={style.search_block_container}>
                    
        <div className={style.login_block}>
        <LoginContainer />
          
        </div>
        
         <div className={style.search_block}>
         <i class="fa fa-search "  aria-hidden="true" filter="-ms-filter"></i>
        <input className={style.search_block_input} type="text"/>
        
      

        
        
        </div> 
    </div>
    );
     }
}

 
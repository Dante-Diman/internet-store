import React from 'react';
import style from "./Search.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { NavLink } from 'react-router-dom';


 
export default class Search extends React.Component {
 

     render() {
   
        
    return (
        <div className={style.search_block_container}>
                    
        <div className={style.login_block}>
            <ul >
                <li><NavLink exact to="/Login" activeClassName={style.activeLink} className={style.navItem}>Login</NavLink></li>
                <li><NavLink exact to="/Basket" activeClassName={style.activeLink} className={style.navItem}>Basket</NavLink></li>
            </ul>
        </div>
        
         <div className={style.search_block}>
        
        <input className={style.search_block_input} type="text"/>
        <i class="fa fa-search "  aria-hidden="true" filter="-ms-filter"></i>
      

        
        
        </div> 
    </div>
    );
     }
}

 
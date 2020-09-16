import React from 'react';
import style from "./Search.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { NavLink } from 'react-router-dom';


 
export default class Login extends React.Component {
 
    openLoginMenu = () => {
        this.props.OpenWindowReducer();
      };
     render() {
   
        
    return (
                    
        <div className={style.login_block}>
            <ul >
                <li><NavLink exact to="/Login" activeClassName={style.activeLink} className={style.navItem} onClick={this.openLoginMenu}>Login</NavLink></li>
                <li><NavLink exact to="/Basket" activeClassName={style.activeLink} className={style.navItem}><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
     
   
    );
     }
}

 
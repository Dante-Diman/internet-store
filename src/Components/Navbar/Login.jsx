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
                <li className={style.navItem} onClick={this.openLoginMenu}>login</li>
                <li><NavLink exact to="/internet-store/catalog/basket" activeClassName={style.activeLink} className={style.navItem}><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
     
   
    );
     }
}

 
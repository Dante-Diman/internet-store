import React from 'react';
import style from "./Navbar.module.scss";
import {NavLink} from 'react-router-dom';
import img from '../../assets/logo.jpg';

import "@fortawesome/fontawesome-free/css/all.css";
 
export default class Navbar extends React.Component {
    
 state = {
     togleswitch: true,
     togleStyleOn:style.mobile_bar,

 }
  toggleMobileMenu = () =>{
      if(this.state.togleswitch){
     this.setState({
        togleStyleOn:'',
        togleswitch:false,
     })
    }
    else{
        this.setState({
            togleStyleOn:style.mobile_bar,
            togleswitch:true,
         })
    }

     
    };

     render() {
   
        
    return (
<div className={style.navbar}>
       <div className={style.container}>
       <div className={style.navbar_body}>
      
       <NavLink exact to ="/#" activeClassName={style.navbar_logoActive} className={style.navbar_logo}>
                                <img src={img} alt=""/> 
                    </NavLink>

                    <div className={`${style.navbar_burger } `} onClick={this.toggleMobileMenu}>
                        <span></span>
                    </div>
                   <nav className={`${style.navbar_menu} ${this.state.togleStyleOn}`}  id='menu' >
                   <ul className={style.navbar_list}>
                   <li><NavLink exact to ="/woman" activeClassName={style.activeLink} className={style.navItem}>woman</NavLink></li>
                   <li><NavLink exact to="/men" activeClassName={style.activeLink} className={style.navItem}>men</NavLink></li>
                   <li><NavLink exact to="/kids" activeClassName={style.activeLink} className={style.navItem}>kids</NavLink></li>
                   <li><NavLink exact to="/commingSoon" activeClassName={style.activeLink} className={style.navItem}>comming soon</NavLink></li>
                   <li><NavLink exact to="/about" activeClassName={style.activeLink} className={style.navItem}>about</NavLink></li>
                    <div className={style.mobile_login_basket}>
                   <li><NavLink exact to="/commingSoon" activeClassName={style.activeLink} className={style.navItem}>Login</NavLink></li>
                   <li><NavLink exact to="/about" activeClassName={style.activeLink} className={style.navItem}>Basket</NavLink></li>
                   </div>
                        </ul>
                    
                    </nav>
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
                    
                    </div>
                    </div>
</div>
       
   
    );
     }
}

 
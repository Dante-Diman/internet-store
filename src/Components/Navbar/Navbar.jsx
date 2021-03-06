import React from 'react';
import style from "./Navbar.module.scss";
import {NavLink} from 'react-router-dom';
import img from '../../assets/svg/logo.svg';
import burgersvg from '../../assets/svg/Shape_1.svg'
import "@fortawesome/fontawesome-free/css/all.css";
import Search from './Search';

 
export default class Navbar extends React.Component {
   

 state = {
     togleswitch: true,
     togleStyleOn:style.mobile_bar,
     deployUrl:"https://dante-diman.github.io/internet-store/",
     developmentUrl:"/internet-store/"   

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
      
                    <NavLink exact to ={this.state.developmentUrl} activeClassName={style.navbar_logoActive} className={style.navbar_logo}>
                                <img src={img} alt="logo"/>  
                    </NavLink>

                    <div className={style.search_block}>
                       
                    <Search />
                    </div>

                    <div className={style.burger_wrapper}>
                    <div className={`${style.navbar_burger } `} onClick={this.toggleMobileMenu}>
                       {/*  <span></span> */}
                        <img src={burgersvg} alt="burger"/>
                    </div>
                    </div>
                  <div className={style.navbar_menu_wrapper}>
                   <nav className={`${style.navbar_menu} ${this.state.togleStyleOn}` }  id='menu' >
                   <ul className={style.navbar_list}>
                   <li><NavLink exact to ="/internet-store/woman" activeClassName={style.activeLink} className={style.navItem}>woman</NavLink></li>
                   <li><NavLink exact to="/internet-store/men" activeClassName={style.activeLink} className={style.navItem}>men</NavLink></li>
                   <li><NavLink exact to="/internet-store/kids" activeClassName={style.activeLink} className={style.navItem}>kids</NavLink></li>
                   <li><NavLink exact to="/internet-store/commingsoon" activeClassName={style.activeLink} className={style.navItem}>comming soon</NavLink></li>
                   <li><NavLink exact to="/internet-store/AboutUs" activeClassName={style.activeLink} className={style.navItem}>about</NavLink></li>
                    </ul>
                    </nav>
                    </div>
                    
                    </div>
                    </div>
</div>
       
   
    );
     }
}

 
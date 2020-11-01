import React from 'react';
import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import tweeter from '../../assets/social/twitter_ico.svg';
import facebook from '../../assets/social/facebook_ico.svg';
import instagram from '../../assets/social/instagram_ico.svg';




class Footer extends React.Component {
render(){

    
    return (
<div className={style.footer_wrap}>
            <div className={style.item}>
                <article >
                <h4>collection</h4>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Woman" >
                    Woman  </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Men" >
                    Men  </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Kids" >
                    Kids</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/commingsoon" >
                    Coming Soon</NavLink>
                  
                    
                </article>
            </div>
            <div className={style.item}>
            <article >
            <h4>site</h4>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Terms of Service" >
                Terms of Service </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Privacy Policy" >
                    Privacy Policy</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/CopyrightPolicy" >
                    Copyright Policy</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/PressKit" >
                    Press Kit  </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Support" >
                   Support</NavLink>
                   </article>
            </div>
            <div className={style.item}>
            <article >
                <h4>shop</h4>
                
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/AboutUs" >
                About us</NavLink>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Shipping" >
                Shipping</NavLink>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Metods" >
                Metods</NavLink>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Career" >
                Career</NavLink>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/internet-store/Contact" >
                Contact</NavLink>                  
                
                </article>
            </div>
            <div className={style.item}>
            <article className={style.companyName}>
                <h4>Social</h4>
                <div>Shoper is made with love in Warsaw,</div>
                
                <div className={style.copiright}>2020 © All rights reserved</div>
                <div className={style.social}>
<div className={style.social_item}>
<a href="https://twitter.com/">
<img src={tweeter} alt="tweeter"/>
</a>

</div>
<div className={style.social_item}>
  <a href="https://www.facebook.com/">
   <img src={facebook} alt="facebook"/>
  </a>

</div>
<div className={style.social_item}>
<a href="https://www.instagram.com/">
<img src={instagram} alt="instagram"/>
</a>

</div>




                </div>
            </article>
            </div>
    
</div>
        );
        
};



}
export default Footer;
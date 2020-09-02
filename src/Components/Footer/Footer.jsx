import React from 'react';
import style from './Footer2.module.css';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../../assets/CompanyLogo_small.png';


class Footer2 extends React.Component {
render(){

    
    return (
<div className={style.footer_wrap}>
            <div className={style.item}>
                <article className={style.aboutUs}>
                <h4>About Us</h4>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    About Us  </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Why Us  </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Customers Stories</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Press Resources</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Press Releases</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Contact us  </NavLink>
                    
                </article>
            </div>
            <div className={style.item}>
            <article className={style.Proparties}>
            <h4>Proparties</h4>
                <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Rent a home  </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Lease a home </NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Buy a home</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                    Sell a home</NavLink>
                    <NavLink exact activeClassName={style.activeLink} className={style.footerLink} to="/About Us/About" >
                   Ask advices</NavLink>
                   </article>
            </div>
            <div className={style.item}>
            <article className={style.costamer_testimonals}>
                <h4>Costamer testimonals</h4>
                <p className={style.content}>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Fuga 
                voluptatibus aliquid excepturi nostrum
                 ea vitae culpa praesentium?
                </p>
                </article>
            </div>
            <div className={style.item}>
            <article className={style.companyName}>
                <div><img src={CompanyLogo} alt=""/><span>Realstate company</span></div>
                <br/>
                <span className={style.copiright}>© cssauthor.com</span>
            </article>
            </div>
    
</div>
        );
        
};



}
export default Footer2;
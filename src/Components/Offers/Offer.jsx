import React from 'react';
import style from './Offer.module.scss';
/* import { Link, animateScroll as scroll } from "react-scroll"; */
import img1 from '../../assets/offers/1.jpg';
/* import img2 from '../../assets/offers/2.jpg'; */
import img3 from '../../assets/offers/3.jpg';
/* import img4 from '../../assets/offers/4.jpg'; */
import img5 from '../../assets/offers/5.jpg';
/* import img6 from '../../assets/offers/6.jpg'; */
import img7 from '../../assets/offers/7.jpg';
/* import img8 from '../../assets/offers/8.jpg'; */
import img9 from '../../assets/offers/9.jpg';
import img10 from '../../assets/offers/10.jpg';
import twitter from '../../assets/svg/twit-ico-offer.svg';
import left_arrow from '../../assets/svg/Thin_Left_Down_Arrow.svg';
import { NavLink } from 'react-router-dom';
class Offer extends React.Component {
render(){

    
    return (

<div className={style.gallery_box}>
<div className={style.gallery_wrapper}>

<div className={style.offer_item} 
style={{backgroundImage: `url(${img1})`,}}
>
    <NavLink to="/internet-store/catalog/1" className={style.offer_item_link}>
        <p className={style.offer_item_title}>
        HEATHER <br/>
        GREY BASICS
        </p>
        <p className={style.offer_item_subtitle}>New Arrival</p>
    </NavLink>
</div>
<div className={style.offer_item} 
/* style={{backgroundImage: `url(${img2})`,}} */
>
<div className={style.twit_wrp}>
    <div className={style.line}></div>
    <div className={style.offer_ico_logo}><img src={twitter} alt="instagram"/></div>  
    <div className={style.line}></div>
</div> 
<NavLink to="/internet-store/catalog/2" className={style.offer_item_link}>
   
    <p className={style.offer_description}>Opening Ceremony @IndonesiaFW tomorrow, PMers! Are you ready for the biggest fashion movement in Indonesia? #infoPM pic.twitter.com/3VQvwt4diJ</p>
        <p className={style.offer_description}>@PuspitaMarthaID </p>
</NavLink>
</div>
<div className={style.offer_item} 
style={{backgroundImage: `url(${img3})`,}}
>
<NavLink to="/internet-store/catalog/3">

</NavLink>
</div>
<div className={style.offer_item}
 /* style={{backgroundImage: `url(${img4})`,}} */
>
<div><img src={left_arrow} alt="left_arrow"/></div>
<NavLink to="/internet-store/catalog/4" className={style.offer_item_link}>

<p className={style.offer_item_title}>
elegant shoes
</p>
<p className={style.offer_item_subtitle}>
BRAIDED LEATHER
</p>
</NavLink>
</div>
<div className={style.offer_item} 
style={{backgroundImage: `url(${img5})`,}}
>
<NavLink to="/internet-store/catalog/5" className={style.offer_item_link}>
<p className={style.offer_item_title}>
chuck taylors
</p>
<p className={style.offer_item_subtitle}>
$125.00
</p>
   
</NavLink>
</div>
<div className={style.offer_item} 
/* style={{backgroundImage: `url(${img6})`,}} */
>
<div className={style.twit_wrp}>
    <div className={style.line}></div>
    <div className={style.offer_ico_logo}><img src={twitter} alt="instagram"/></div>  
    <div className={style.line}></div>
</div>
<NavLink to="/internet-store/catalog/6" className={style.offer_item_link}>
<p className={style.offer_description}>
Girls, Girls, Girls: A Look Back at 50 Years of the Pirelli Calendar
</p>
<p className={style.offer_description}>
@Vogue
</p>
    
</NavLink>
</div>
<div className={style.offer_item} 
style={{backgroundImage: `url(${img7})`,}}
>
<NavLink to="/internet-store/catalog/7">
 
</NavLink>
</div>
<div className={style.offer_item}
 /* style={{  backgroundImage: `url(${img8})`,}} */
>
<div><img src={left_arrow} alt="left_arrow"/></div>
<NavLink to="/internet-store/catalog/8"  className={style.offer_item_link}>
<p className={style.offer_item_title}>
Jaxon Hat
</p>
<p className={style.offer_item_subtitle}>
Beanie Hat
</p>
</NavLink>
</div>
<div className={style.offer_item} 
style={{backgroundImage: `url(${img9})`,}}>
<NavLink to="/internet-store/catalog/9"  className={style.offer_item_link}>
<p className={style.offer_item_title}>
basic blazer
</p>
<p className={style.offer_item_subtitle}>
from $199.00
</p>
</NavLink></div>
<div className={style.offer_item} 
style={{backgroundImage: `url(${img10})`,}}
>
    <NavLink to="/internet-store/catalog/10" className={style.offer_item_link}>
    <p className={style.offer_item_title}>
jeans for
ADVENTURE

        </p>
        <p className={style.offer_item_subtitle}>New Arrival</p> 
        </NavLink></div>
</div>
</div>
    



        );
        
};




}
export default Offer;
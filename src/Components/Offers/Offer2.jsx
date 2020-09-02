import React from 'react';
import style from './Offer.module.scss';
/* import { Link, animateScroll as scroll } from "react-scroll"; */
/* import img1 from '../../assets/offers/1.jpg'; */
import img2 from '../../assets/offers/2.jpg';
import img3 from '../../assets/offers/3.jpg';
import img4 from '../../assets/offers/4.jpg';
import img5 from '../../assets/offers/5.jpg';
import img6 from '../../assets/offers/6.jpg';
import img7 from '../../assets/offers/7.jpg';
import img8 from '../../assets/offers/8.jpg';
import img9 from '../../assets/offers/9.jpg';
/* import img10 from '../../assets/offers/10.jpg'; */
class Offer extends React.Component {
render(){

    
    return (

<div className={style.gallery_box}>
<div className={style.gallery_wrapper}>

{/* <div className={style.offer_item}><img src={img1} alt=""/></div> */}
<div className={style.offer_item}><img src={img2} alt=""/></div>
<div className={style.offer_item}><img src={img3} alt=""/></div>
<div className={style.offer_item}><img src={img4} alt=""/></div>
<div className={style.offer_item}><img src={img5} alt=""/></div>
<div className={style.offer_item}><img src={img6} alt=""/></div>
<div className={style.offer_item}><img src={img7} alt=""/></div>
<div className={style.offer_item}><img src={img8} alt=""/></div>
<div className={style.offer_item}><img src={img9} alt=""/></div>
{/* <div className={style.offer_item}><img src={img10} alt=""/></div> */}
	




</div>
</div>
    



        );
        
};




}
export default Offer;
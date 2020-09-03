import React from 'react';
import style from './Grid.module.scss';
import Header from '../Header/Header';
import MainSlider from '../Slider/MainSlider';
import Offer from '../Offers/Offer';
import Offer2 from '../Offers/Offer2';
import SignBlock from '../SignBlock/SignBlock';
import GallerySlider from '../GallerySlider/GallerySlider';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';


class Grid extends React.Component {
render(){
    return (
<div className={`${style.page_wrapper}`}>
    <div className={`${style.header_container} ${style.wrapper}`}>
      
    <Route render={ () => <Navbar />} />
        </div>
        
    <div className={`${style.main_slider} `}>
    <div><MainSlider /></div>
    
    </div>

    <div className={`${style.offers} ${style.wrapper}`}>
     <Route path='/' render={ () => <Offer />} />  
    <Route path='/price-list' render={ () => <Offer2 />} />
        
    </div>
    <div className={`${style.sign_block} ${style.wrapper}`}>
   <SignBlock />
       
        </div>
    <div className={`${style.listing_gallery} `}>
    <GallerySlider />
  </div>
        <div className={`${style.footer}  ${style.wrapper}`}>
           
        </div>
   

</div>

        );
        
};




}
export default Grid;
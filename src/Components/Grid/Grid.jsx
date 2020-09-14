import React from 'react';
import style from './Grid.module.scss';

import MainSlider from '../Slider/MainSlider';
import Offer from '../Offers/Offer';
import Catalog1 from '../Offers/Catalog1';
import Catalog2 from '../Offers/Catalog2';
import SignBlock from '../SignBlock/SignBlock';
import GallerySlider from '../GallerySlider/GallerySlider';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

import LoginWindowContainer from '../LoginWindow/LoginWindowContainer';


class Grid extends React.Component {
    state = {
        
        deployUrl:"https://dante-diman.github.io/internet-store/",
        developmentUrl:"/internet-store/"   
   
    }

render(){
    return (
<div className={`${style.page_wrapper}`}>
    <div className={style.login_window_wrapper}>
    {/* <LoginWindow togleStyleOn={style.close_Window}/> */}
    <LoginWindowContainer />
    </div>
    <div className={`${style.header_container} ${style.wrapper}`}>
      
    <Route render={ () => <Navbar />} />
        </div>
        
    <div className={`${style.main_slider} `}>
  
    <div><MainSlider /></div>
    
    </div>

    <div className={`${style.offers} ${style.wrapper}`}>
    

    <Route exact path={this.state.developmentUrl} render={ () => <Offer />} />  
    <Route exact path='/internet-store/catalog/1' render={ () => <Catalog1 />} />
    <Route exact path='/internet-store/catalog/2' render={ () => <Catalog2 />} />   
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
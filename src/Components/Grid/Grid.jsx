import React from 'react';
import style from './Grid.module.scss';

import MainSlider from '../Slider/MainSlider';
import Offer from '../Offers/Offer';
import Catalog1 from '../Offers/Catalog1';
import Catalog2 from '../Offers/Catalog2';
import Catalog3 from '../Offers/Catalog3';
import SignBlock from '../SignBlock/SignBlock';
import GallerySlider from '../GallerySlider/GallerySlider';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

import LoginWindowContainer from '../LoginWindow/LoginWindowContainer';
import Footer from '../Footer/Footer';
import CartContainer from '../Cart/CartContainer';

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
        <div className={` ${style.site_content}`}>         
        <Route exact path={this.state.developmentUrl} render={ () => <MainSlider />} />
         <Route exact path='/internet-store/catalog/basket' render={ () => <CartContainer />} />
         
          <Route exact path='/internet-store/catalog/1' render={ () => <Catalog1 />} />
            <Route exact path='/internet-store/catalog/2' render={ () => <Catalog2 />} />
            <Route exact path='/internet-store/catalog/3' render={ () => <Catalog3 />} />  
            <Route exact path={this.state.developmentUrl} render={ () => <Offer />} />
            <Route exact path={this.state.developmentUrl} render={ () => <SignBlock />} />
            
           
        </div> 
   
    <div className={`${style.listing_gallery} `}>
    <GallerySlider />
  </div>
        <div className={`${style.footer}  ${style.wrapper}`}>
           <Footer />
        </div>
   

</div>

        );
        
};




}
export default Grid;
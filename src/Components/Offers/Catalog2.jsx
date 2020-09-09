

import React from 'react';

import ReactImageZoom from 'react-image-zoom';
import img1 from '../../assets/catalog/jackets/1.jpg';
import img2 from '../../assets/catalog/jackets/2.jpg';
import style from './Catalog1.module.scss';
class Catalog2 extends React.Component {


    render() {
    
               
        return (
            <div className={style.gallery_box}>

<div className={style.gallery_wrapper}>
    <div className={style.reflectoin_desk}>
        <div className={style.offer_item}>
            <ReactImageZoom img={img2} zoomPosition='original' width='350' height='150' />    
        </div>
    </div>

    <div className={style.offer_item}>
  <img src="" alt=""/>
           
    </div>
            </div>
            
            </div>
            );



            
               

                
    }
}
export default Catalog2;

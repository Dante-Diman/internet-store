

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
   
    </div>
<div className={style.offer_item}>

<ReactImageZoom  {...zoomProps img=img1 } />
           
    </div>
    <div className={style.offer_item}>
  
           
    </div>
            </div>
            
            </div>
            );



            
               

                
    }
}
export default Catalog2;

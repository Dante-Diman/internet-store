import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import style from './GallerySlider.module.scss';
import img1 from '../../assets/gallery_slider/1.jpg';
import img2 from '../../assets/gallery_slider/2.jpg';
import img3 from '../../assets/gallery_slider/3.jpg';
import img4 from '../../assets/gallery_slider/4.jpg';
import img5 from '../../assets/gallery_slider/5.jpg';
import img6 from '../../assets/gallery_slider/6.jpg';

export const HomeWrapper = styled.div`
.slick-arrow::before,.slick-arrow::after {
  font-family: -webkit-pictograph;
  margin-bottom:55px;
  font-size:40px;
  color:white;
font-weight:800;

}

.slick-next::before, .slick-prev::before{
   content:'>';
}
.slick-prev::before{
  content:'<';
}  
.slick-prev {
 /*  background-color: #e4e4e4; */
  height:118px;
  width:39px;
  position:absolute;
  left: 0px;
  z-index:2;
  top:55px;
}


.slick-next{
  /* background-color:#e4e4e4; */
  height:118px;
  width:39px;
  position:absolute;
  right: 0px;
  top:55px;
}

img{
z-index:1;
display:block;

height:118px;
transition-duration: 0.9s;
    -webkit-filter: brightness(60%);
}
img:hover{
    transition-duration: 0.9s;
    -webkit-filter: brightness(100%);
    
}
`;



class GallerySlider extends React.Component {
    render () {
      
      var Wslide= {
        width: 198};

      var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         adaptiveHeight:true, 
        variableWidth: true,
        arrows:true,
       
      };
      return (
      <HomeWrapper>
        <Slider  {...settings}>
          <div  style={{ Wslide}}>
          <img className={style.gallery_slider_image} src={img1} alt="1"/>
          </div>
          <div style={{ Wslide }}>
          <img className={style.gallery_slider_image}  src={img2} alt="2"/>
          </div>
          <div style={{ Wslide }}><img className={style.gallery_slider_image} src={img3} alt="3"/></div>
          <div style={{ Wslide }}><img className={style.gallery_slider_image} src={img4} alt="4"/></div>
          <div style={{ Wslide }}><img className={style.gallery_slider_image} src={img5} alt="5"/></div>
          <div style={{ Wslide }}><img className={style.gallery_slider_image} src={img6} alt="6"/></div>
         
          
        </Slider>
        </HomeWrapper>
      );
    }
  }
  export default GallerySlider;
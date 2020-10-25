import React from 'react';
import Slider from 'react-slick';
import style from './MainSlider.module.scss';
import styled from 'styled-components';
import img1 from '../../assets/main_slider/1.jpg';
import img2 from '../../assets/main_slider/2.jpg';
import img3 from '../../assets/main_slider/3.jpg';





export const HomeWrapper = styled.div`
.slick-list{
  
  max-height:536px;

 

} 
.slick-next{
display:none;
  }
  img{
 z-index:1;
 display:flex; 
max-width:1244px;

}
.slick-dots li.slick-active button:before,.slick-dots li button:before{

  font-size: 14px;
}
.slick-dots {
  bottom: 25px;
}
`;


class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
    render () {
      var Wslide= {
         width: 200 };

      var settings = {
        
        /* infinite: true, */
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      autoplaySpeed: 200,
      pauseOnHover: false,
      arrows: false,
      adaptiveHeight:true, 
        variableWidth: true,
        dots:true,
       
      };
      return (
        <HomeWrapper className={style.home_wrapper}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          
          <div style={{ Wslide}}>
            <div className={style.slide_text}>
              <p className={style.title}>Hazy Shade of spring</p>
              <p className={style.description}>Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.</p>
            </div>
            <img className={style.gallery_slider_image} src={img1} alt="1"/>
          </div>
          <div style={{ Wslide }}><img  src={img2} alt="2"/></div>
          <div style={{ Wslide }}><img  src={img3} alt="3"/></div>
          
          
          
        </Slider>
        <button className={style.button_cheking} onClick={this.play}> check new arrivals </button>
        <button className={style.button_pause} onClick={this.pause} > || </button>
        </HomeWrapper>
      );
    }
  }
  export default MainSlider;
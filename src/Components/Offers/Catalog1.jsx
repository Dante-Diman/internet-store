
import ReactDOM from 'react-dom';
import React from 'react';
import MagicZoom from './zoom/reactMagicZoom.jsx';
import './zoom/scss/_react-magic-zoom.scss';
import img1 from '../../assets/catalog/jackets/1.jpg';
import img2 from '../../assets/catalog/jackets/2.jpg';
import style from './Catalog1.module.scss';
class Catalog1 extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            imageWrapper: {
                style: {
                    width: 5 ,
                }
            },
            reflectoinItem: null,
            reflectionChanged: null
        };

        this.handleRefreshReflection = this.handleRefreshReflection.bind(this);
    }

    handleRefreshReflection(item) {
        this.setState({
            reflectoinItem: item,
            reflectionChanged: new Date(),
        });
    };

    getReflectoinItem() {
        return this.refs.id && this.refs.id.getReflection();
    }

    render() {
        let reflectoinItem1 = this.getReflectoinItem(),
            reflectionOpt = {
                type: 'auto',
                position: {
                    right: '400px',
                    bottom:'-10%'
                },
                size: {
                    height: 295,
                    width: 295
                },
                scale: 15
                   
            };
            let reflectoinItem2 = this.getReflectoinItem(),
            reflectionOpt2 = {
                type: 'auto',
                position: {
                    right: '495px',
                    bottom:'-10%'
                },
                size: {
                    height: 295,
                    width: 295
                },
                scale: 15
                   
            };   
               
        return (
            <div className={style.gallery_box}>

<div className={style.gallery_wrapper}>
<div className={style.reflectoin_desk}>
   
    </div>
<div className={style.offer_item}>

    {reflectoinItem2}
    <MagicZoom
    
                  
                
        reflection={reflectionOpt}
        subscribeOnReflection={this.handleRefreshReflection}
            >
        <img id='image1' src={img1} />
        {reflectoinItem1}        
    </MagicZoom>
           
    </div>
    <div className={style.offer_item}>
    <MagicZoom
      
        reflection={reflectionOpt2}
        subscribeOnReflection={this.handleRefreshReflection}
            >
        <img id='image1' src={img2} />
                 
    </MagicZoom>
           
    </div>
            </div>
            
            </div>
            );



            
               

                
    }
}
export default Catalog1;

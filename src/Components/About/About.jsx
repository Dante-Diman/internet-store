import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import style from './About.module.scss';
class About extends React.Component {
    render() {
        return (
            <div>
                  <Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item active href="/internet-store/AboutUs/">
  AboutUs
  </Breadcrumb.Item>
 
</Breadcrumb>
<div className={style.title}>
    <p className={style.title1}>
    About
    </p>
    <p className={style.description}>
    Lorem ipsum dolor sit amet enim. Etiam ullamcorp uspendisse a pellentesque.
    </p>
    
</div>
<div className={style.parent}>
    <div className={style.aboutColumn}>
        <div className={style.aboutImage}></div>
        <div className={style.aboutText}>
    <p className={style.title2}>
    Who we are?
    </p>
    <p className={style.description}>
    Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. 
    Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. 
    Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.   
    </p>

        </div>

    </div>
    <div className={style.aboutColumn}>
        <div className={style.aboutImage}></div>
        <div className={style.aboutText}>
    <p className={style.title2}>
    What we are doing?
    </p>
    <p className={style.description}>
  
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. 

Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. 

Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.
    </p>

        </div>

    </div>

</div>
<div className={style.underline}></div>
<div className={style.calltocheck}>
    <p>You may also like</p> 
   
</div>

            </div>
        );
    }
}

export default About;
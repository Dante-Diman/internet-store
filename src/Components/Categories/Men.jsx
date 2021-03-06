

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import style from './Category.module.scss';
import CatSearchDropdownContainer from './CatSearchDropdownContainer';
import MenGroupContainer from './MenGroupContainer';


class Men extends React.Component {
 
    render() {
      
        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item active>Men</Breadcrumb.Item>
</Breadcrumb>
<div>
<CatSearchDropdownContainer />
</div>

<MenGroupContainer />

<div className={style.category}>
    <p className={style.categoryTitle}></p>
    <p className={style.categorydescription}></p>
</div>

    


<div className={style.underline}></div>
<div className={style.calltocheck}>
    <p>Check our lookbook</p> 
   
</div>

</>
            );

   
    }
}



export default Men;
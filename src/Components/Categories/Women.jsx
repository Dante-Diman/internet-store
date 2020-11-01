

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';




import style from './Category.module.scss';
import CatSearchDropdownContainer from './CatSearchDropdownContainer';
/* import MenDropdown from './MenDropdown'; */


import WomenGroupContainer from './WomenGroupContainer';


class Women extends React.Component {
 
    render() {
      
        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item active>Women</Breadcrumb.Item>
</Breadcrumb>
<div>
<CatSearchDropdownContainer />
</div>
<WomenGroupContainer />

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



export default Women;
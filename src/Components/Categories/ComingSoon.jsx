

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';




import style from './Category.module.scss';
import CatSearchDropdownContainer from './CatSearchDropdownContainer';
import ComingSoonGroupContainer from './ComingSoonGroupContainer';






class ComingSoon extends React.Component {
 
    render() {
      
        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item active>Coming soon</Breadcrumb.Item>
</Breadcrumb>
<div>
<CatSearchDropdownContainer />
</div>
<ComingSoonGroupContainer />

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



export default ComingSoon;
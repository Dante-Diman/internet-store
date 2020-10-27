

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';


import ContainerGroup1 from '../ProductGroup/ContainerGroup1';
import ContainerGroup2 from '../ProductGroup/ContainerGroup2';
import ContainerGroup3 from '../ProductGroup/ContainerGroup3';
import style from '../Catalog.module.scss';
import MenDropdown from './MenDropdown';

class Men extends React.Component {
 
    render() {
      
           
        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item active>Men</Breadcrumb.Item>
</Breadcrumb>
<ContainerGroup1 />
<ContainerGroup2 />
<ContainerGroup3 />
<div className={style.category}>
    <p className={style.categoryTitle}></p>
    <p className={style.categorydescription}></p>
</div>
<div className={style.categoryOptions}>
    <MenDropdown />
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
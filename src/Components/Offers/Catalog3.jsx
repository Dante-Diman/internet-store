


import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import style from './Catalog2.module.scss';
import ImageGridList from './useStyles/ImageGridList';
class Catalog3 extends React.Component {
 
    render() {
     

        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item href="/internet-store/catalog/2">
  catalog
  </Breadcrumb.Item>
  <Breadcrumb.Item active>all</Breadcrumb.Item>
</Breadcrumb>

<ImageGridList />

<div className={style.underline}></div>
<div className={style.calltocheck}>
    <p>Check our lookbook</p> 
   
</div>

</>
            );

   
    }
}



export default Catalog3;
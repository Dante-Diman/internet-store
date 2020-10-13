
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';



class ProductDetails extends React.Component {
 
    render() {
        debugger;
        console.log(this.props);

        return (
<>
<Breadcrumb>
  <Breadcrumb.Item href="/internet-store">internet-store</Breadcrumb.Item>
  <Breadcrumb.Item href="/internet-store/catalog/2">
  catalog
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/internet-store/catalog/2">
  all
  </Breadcrumb.Item>
        <Breadcrumb.Item active>product:{this.props.id}</Breadcrumb.Item>
</Breadcrumb>



<div ></div>


</>
            );

   
    }
}



export default ProductDetails;

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';



class ProductDetails extends React.Component {
 
    render() {
        let options= {
            id: this.props.ProductOptions.id,
            productUrl:this.props.ProductOptions.productUrl,
            productPrice:this.props.ProductOptions.productPrice,
            productDescription:this.props.ProductOptions.productDescription,
            count:this.props.ProductOptions.count   
        }      
      

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
        <Breadcrumb.Item active>product:{options.id}</Breadcrumb.Item>
</Breadcrumb>






</>
            );

   
    }
}



export default ProductDetails;
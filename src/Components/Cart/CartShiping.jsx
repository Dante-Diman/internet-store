

import React from 'react';
import { Form } from 'bootstrap-4-react';


import style from './CartShiping.module.scss';


class CartShiping extends React.Component {

  
    render() {
      
     
        return (
<>

<div className={style.shiping_form}>
<Form className={`${style.shiping_form_wrap}`}>
<div className={`${style.delivery_method_cont}`}>
  <label htmlFor="selectDeliveryMetod">Select Delivery Metod</label>
            <Form.Select id="selectDeliveryMetod">
              <option>POST</option>
              <option>EMS</option>
              <option>DHL</option>
              <option>Express Shipping</option>
              <option>Self-delivery</option>
            </Form.Select>
</div>
  <div className={`${style.name_cont}`}>
    <div className={`${style.first_name_cont}`}>
      <label htmlFor="FirstName">First Name</label>
      <Form.Input type="text" id="FirstName" placeholder="Enter FirstName" />
    </div>
    <div className={`${style.last_name_cont}`}>
      <label htmlFor="LastName">Last Name</label>
      <Form.Input type="text" id="LastName" placeholder="Enter LastName" />
    </div>
  </div>
<div className={`${style.Address_cont}`}>
    <label htmlFor="FirstAddressLine1">Address (line 1)</label>
    <Form.Input type="text" id="FirstAddressLine1" placeholder="Address" />
</div>  
<div className={`${style.Address_cont}`}>
    <label htmlFor="FirstAddressLine2">Address (line 2)</label>
    <Form.Input type="text" id="FirstAddressLine2" placeholder="Address" />
</div>  
<div className={`${style.location_cont}`}>
  <div className={`${style.city_cont}`}>
    <label htmlFor="City">city</label>
    <Form.Input type="text" id="City" placeholder="Enter your City" />
  </div>
  <div className={`${style.postCode_cont}`}>
    <label htmlFor="postCode">post code</label>
    <Form.Input type="number" id="postCode" placeholder="Enter Post code" />
  </div>

</div>
<div className={`${style.contacts_cont}`}>
  <div className={`${style.email_cont}`}>
    <label htmlFor="email">email</label>
    <Form.Input type="email" id="email" placeholder="Enter your Email" />
  </div>
  <div className={`${style.phoneNumber_cont}`}>
    <label htmlFor="PhoneNumber">Phone Number</label>
    <Form.Input type="Phone" id="PhoneNumber" placeholder="Enter Phone Number" />
  </div>

</div>
<Form.Check className={`${style.check_adress}`}>
            <Form.Checkbox id="CheckaAdress" />
            <Form.CheckLabel htmlFor="CheckaAdress">Use this address for Billing</Form.CheckLabel>
          </Form.Check>
  
          
       
      </Form>
</div>

</>
            );

               
    }
}
export default CartShiping;

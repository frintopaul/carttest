import React, { Component } from 'react';
import CartItemCountsec from './cartitemcountstrip.js';
import CartItem from './cartitems.js';
import item1 from '../assets/images/prd1.jpg';

class CartPage extends Component {
  render(){
    return(

    <div className="listingPagewrap">
      <CartItemCountsec/>
      <CartItem prodImage={item1}/>
      <CartItem prodImage={item1}/>
      <CartItem prodImage={item1}/>

    </div>


      )
  }
}

export default CartPage;


import React, { Component } from 'react';
import Catesec from '../components/categorysection.js'
import ProductSection from '../components/productsection.js'
class ListingPage extends Component {
  render(){
    return(

    <div className="listingPagewrap">
    <Catesec/>
    <ProductSection/>
    </div>


      )
  }
}

export default ListingPage;


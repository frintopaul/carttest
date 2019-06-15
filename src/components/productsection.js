import React, { Component } from 'react';
import ProductItem from './productitem.js'

import prd1 from '../assets/images/prd1.jpg';
import prd2 from '../assets/images/prd2.jpg';
import prd3 from '../assets/images/prd3.jpg';
import prd4 from '../assets/images/prd4.jpg';
import prd5 from '../assets/images/prd5.jpg';
import prd6 from '../assets/images/prd6.jpg';

class ProductSection extends Component {
  render(){
    return(
     <div className="prd_wrap">
       <ProductItem imgUrl={prd1} prdName={"Orbit ray running shoes"} amount={524}/>
       <ProductItem imgUrl={prd2} prdName={"Butchi Red running shoes"} amount={360}/>
       <ProductItem imgUrl={prd3} prdName={"Orbit ray running shoe"} amount={750}/>
       <ProductItem imgUrl={prd4} prdName={"Orbit ray running shoe"} amount={800}/>
       <ProductItem imgUrl={prd5} prdName={"Orbit ray running shoe"} amount={600}/>
       <ProductItem imgUrl={prd6} prdName={"Orbit ray running shoe"} amount={450}/>
     </div>
      )
  }
}

export default ProductSection;


import React, { Component } from 'react';
import wishlistico from '../assets/images/icons/wishlist_addico.png'

class ProductItem extends Component {
  render(){
    return(
     <div className="prd_thumb">
     	<span className="wishlistIco">
     		 <img src={wishlistico} alt=""/>
     	</span>
     	<div className="imgwrap">
       <img src={this.props.imgUrl} alt=""/>
       </div>
       <h2 className="prd_name">{this.props.prdName}</h2>
       <span className="prd_amnt">Rs. {this.props.amount}</span>
       <button className="atc_btn">Add to cart</button>
     </div>
      )
  }
}

export default ProductItem;


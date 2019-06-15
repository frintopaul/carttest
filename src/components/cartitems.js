import React, { Component } from 'react';
import Counter from './couter.js'
class CartItem extends Component {
  render(){
    return(

    <div className="cartitemBox">
    <span className="cls_btn">X</span>
    	<div className="itemboxRow">
			<div className="imgWrap">
				<img src={this.props.prodImage} alt=""/>
			</div>	
			<div className="imgdesc">
				<span className="name">running shoe</span>
				<span className="size">size 6</span>
			</div>	
    	</div>
    	<div className="itemboxRow footer">
    		<div className="counter">
    			<Counter baseVal={1}/>
    		</div>
    		<div className="rate">
    			Rs. 2,350
    		</div>
    	</div>
    </div>


      )
  }
}

export default CartItem;


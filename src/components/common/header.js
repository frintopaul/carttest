import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
  render(){
    return(

     <header>
        <div className="ico_wrap">
        <Link className="cart_link" to={{pathname:"/"}}>
          <img src={require('../../assets/images/icons/leftarrow.png')} alt=""/>
          </Link>
        </div>
        <div className="search_wrap">
            <span className="search_ico">
            <img src={require('../../assets/images/icons/search_ico.png')} alt=""/>
            </span>
            <input type="search"/>
        </div>
        <div className="ico_wrap">
          <span className="badge">2</span>
          <img src={require('../../assets/images/icons/wishlist.png')} alt=""/>
        </div>
        <div className="ico_wrap">
          <Link className="cart_link" to={{pathname:"/cart"}}>
          <span className="badge">2</span>        
          <img src={require('../../assets/images/icons/cart.png')} alt=""/>
          </Link>
        </div>
      </header>


      )
  }
}

export default Header;


import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import './assets/css/custom.min.css'
import Header from './components/common/header.js'
import Catesec from './components/categorysection.js'
import ProductSection from './components/productsection.js'
import ListingPage from './components/listingpage.js'
import CartPage from './components/cartpage.js'





class App extends Component {

  render(){
    return(

      <div className="container">


        <Router>
              <Header/>
              <Switch>
                <Route exact path="/" component={ListingPage} />
                <Route exact path="/cart"  component={CartPage} />
              </Switch>
         </Router>

    {/*    <Header/>
        <Catesec/>
        <ProductSection/>*/}

      </div>


      )
  }
}


export default App;


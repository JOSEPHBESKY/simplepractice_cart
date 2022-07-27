import React from 'react';
import Products from './Products.js';
import Cart from './Cart.js';
import {Switch,Route} from 'react-router-dom';
const Routes= ({productidems,cartitems,handleaddproduct}) => {
  return (
<Switch>
<Route path='/' exact><Products productidems={productidems} handleaddproduct={handleaddproduct}/></Route>
<Route path='/Cart'><Cart cartitems={cartitems} handleaddproduct={handleaddproduct}/></Route>
</Switch>
  )
}

export default Routes;

import React from 'react'
import Products from './Products.js'
import Cart from './Cart.js'
// import {Route,Routes} from 'react-router-dom'
const New= ({productidems,cartitems,handleaddproduct}) => {
  return (<div>
<Products productidems={productidems} handleaddproduct={handleaddproduct}/>
<Cart cartitems={cartitems} handleaddproduct={handleaddproduct}/>
</div> )
}

export default New

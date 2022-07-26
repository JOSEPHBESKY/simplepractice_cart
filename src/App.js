import React from 'react'
import Heater from './Heater'
import New from './New'
import data from './Data'
import  {useState} from "react"
import {BrowserRouter as Router} from 'react-router-dom'
const App = () => {
  const [cartidems,setcartitems]=useState([]);
  const { productidems } = data;
  console.log(cartidems);
  const handleaddproduct=(product)=>{
    const productexist=cartidems.find((item)=>item.id ===product.id)

    if (productexist) {
      setcartitems(cartidems.map((item)=>item.id ===product.id ?{...productexist,qty:productexist.qty +1}:item))
    }
    else{
      setcartitems([...cartidems,{...product,qty:1}])
    }
  }
  const haddleremoveitems=(product)=>{
    const productexist=cartidems.find((item)=>item.id ===product.id)
    if (productexist.qty===1) {
      setcartitems(cartidems.filter((item)=>item.id !==product.id))
    }else{
      setcartitems(
        cartidems.map((item)=>item.id===product.id ? {...productexist,qty:productexist.qty-1}:item)
      )
    }
  }
  return (
    <div> 
    <Router>    <Heater /> <New productidems={productidems} cartitems={cartidems} handleaddproduct={handleaddproduct} handleremoveitems={haddleremoveitems}/> </Router>

    </div>
  )
}

export default App
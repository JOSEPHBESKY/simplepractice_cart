import React from 'react'

const Products = ({productidems,handleaddproducts}) => {
  return (
    <div>{
      productidems.map((productidems)=>(
        <div><h1>{productidems.name}</h1>
        <button onClick={()=>handleaddproducts(productidems)}>addtocart</button>
        </div>
      ))
    }</div>
  )
}

export default Products
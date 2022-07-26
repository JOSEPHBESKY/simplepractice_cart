import React from 'react'

const Cart = (cartitems,handleaddidems,handleremoveidems) => {
  return (
     <div>
    {
      cartitems.map((item)=>(
        <div key={item.id}><h1>{item.name}</h1>
        <button onClick={handleaddidems(item)}> +</button>
        <button onClick={handleremoveidems(item)}>-</button>
        </div>
      ))
    }
    </div>
  )
}

export default Cart
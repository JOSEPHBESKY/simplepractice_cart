import React from 'react'
import {Link} from 'react-router-dom'
// import Home from './Home'
// import Signup from './Signup'
// import Cart from './Cart'
const Heater = () => {
  return (
    <div>
    <h1>
    <Link to="/">idems</Link>
    </h1>
    <div>
    <ul>
    <li><Link to="/">Home</Link></li>
    </ul>
    <ul>
    <li><Link to="/Signup">Signup</Link></li>
    </ul>
    <ul>
    <li><Link to="/Cart">Cart</Link></li>
    </ul>
    </div>
    </div>
    
  )
}

export default Heater
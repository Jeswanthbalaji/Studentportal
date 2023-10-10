import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar' >
      <ul>
        <li> <Link to="/"  >Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/recipe">Recipe</Link></li>
        <li><Link to="/country" >Country</Link></li>



      </ul>
    </div>
  )
}

import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav>
        <img src='../Image/vfc_logo.png' width={200} alt='logo' />
        <ul>
          <Link className='list mx-3' to="/">Home</Link>
          <Link className='list mx-3' to="/">Result</Link>
          <Link className='list mx-3' to="/">About Us</Link>
          <Link className='list mx-3' to="/">Conact Us</Link>
          <Link className='list mx-3' to="/rule"> Rules</Link>
        </ul>
      </nav>
    </div>


  )
}

export default Nav;
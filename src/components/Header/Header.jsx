import React, { useState } from 'react'
import './Header.css'
// import { Link } from 'react-router-dom'

const Header = () => {
    const [hamburger, setHamburger] = useState(false)

    const toggleMenu =() =>{
        setHamburger(!hamburger)
    }

  return ( 
    <div className='header'>
        <div className='logo'>
            Ade<span>Emma</span>
        </div>
        <nav className={`header-ul ${hamburger ? 'active' : ''}`}>
            <a href='home'  className='link'>Home </a>
            <a href='project' className='link'>Projects </a>
            <a href='skill' className='link'>Skill </a>
            <a href='contact' className='link'>Contact </a>
            {/* <li><Link to="/" className='link'>Home</Link> </li>
            <li><Link to="/Project" className='link'>Projects</Link> </li>
            <li><Link to="/Skill" className='link'>Skill</Link> </li>
            <li><Link to="/contact" className='link'>Contact</Link> </li> */}
        </nav>
        <div className={`menu-box ${hamburger ? 'active' : ''}`} onClick={toggleMenu}>
          <span className='hamburger'></span>
          <span className='hamburger'></span>
          <span className='hamburger'></span>
        </div>
    </div>
  )
}

export default Header
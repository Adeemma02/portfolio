import React from 'react'
import './Navbar.css'
import Portfolio from '../Asset/Portfolio.png' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'> <div className='navbar-con'>
        <h2>Adesemowo <span>Emmamuel</span></h2>
        <h4>Front-end Developer</h4>
        <p>I'm a passionate frontend developer. My sevices ranges from developing custom websites to enchancing existing ones with dynamic features <br/>
        If you are seeking a dedicated and innovative frontend developer, I'd love to connect</p>
        <Link to='/contact ' className='bt'><button className='button'>Contact Us </button></Link>
    </div>
      
        <img src={Portfolio} />
    </div>
  )
}

export default Navbar
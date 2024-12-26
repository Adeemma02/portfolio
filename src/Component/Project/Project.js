import React from 'react'
import './Project.css'
import Nurse from '../Asset//Nurse.png'
import Nacos from '../Asset/Nacos.png'
import movie from '../Asset/Movie.png'
import pizza from '../Asset/Pizza.png'
import ecom from '../Asset/ecom.png'

const Project = () => {
  return (
    <div className='Project'>
        <h2 className='project-h2'>Explore some of <span>our Projects</span></h2>
        <div className='project-con'>
        <div className='project-con-item'>
         <img src={Nurse}  className='project-image'/>
           <div className='pro'>
            <div className='project-title'>Nursing Website</div>
            <a
        href="https://www.everythingnursingstaffing.com"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className='project-link'
      > View Demo
      </a>
           </div>
        </div>
        <div className='project-con-item'>
         <img src={Nacos}  className='project-image'/>
           <div className='pro'>
            <div className='project-title'>Nacos Website</div>
            <a
        href="https://nacos-orcin.vercel.app/"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className='project-link'
      > View Demo
      </a>
           </div>
        </div>
        <div className='project-con-item'>
         <img src={movie}  className='project-image'/>
           <div className='pro'>
            <div className='project-title'>Movie APP</div>
            <a
        href="https://movie-app-lyart-rho.vercel.app/"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className='project-link'
      > View Demo
      </a>
           </div>
        </div>
        <div className='project-con-item'>
         <img src={pizza}  className='project-image'/>
           <div className='pro'>
            <div className='project-title'>Pizza APP</div>
            <a
        href="https://pizza-theta-flame.vercel.app/"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className='project-link'
      > View Demo
      </a>
           </div>
        </div>
        <div className='project-con-item'>
         <img src={ecom}  className='project-image'/>
           <div className='pro'>
            <div className='project-title init'>E-Commerce Website</div>
            <div className='project-titl'>(Still developing)</div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Project
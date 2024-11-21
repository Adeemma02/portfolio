import React from 'react'
import './Project.css'
import Nurse from '../Asset//Nurse.png'
import Nacos from '../Asset/Nacos.png'
import todo from '../Asset/cons.png'
import spacex from '../Asset/spacex.png'
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
        href="https://nacos-black.vercel.app/"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className='project-link'
      > View Demo
      </a>
           </div>
        </div>
        <div className='project-con-item'>
         <img src={todo}  className='project-image'/>
           <div className='pro'>
            <div className='project-title'>To-DO APP</div>
            <a
        href="https://consult-page.vercel.app/"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className='project-link'
      > View Demo
      </a>
           </div>
        </div>
        <div className='project-con-item'>
         <img src={spacex}  className='project-image'/>
           <div className='pro'>
            <div className='project-title'>Space X Clone</div>
            <div className='project-titl'>(Still developing)</div>
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
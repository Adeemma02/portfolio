import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Project from '../Component/Project/Project'
import Skill from '../Component/Skill/Skill'
import Contact from '../Component/Contact/Contact'
import Footer from '../Component/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Project />
        <Skill />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
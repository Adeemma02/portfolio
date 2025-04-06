import React from 'react'
import './skill.css'
// import Api from '../Asset/Api.png'
// import Bitbucket from '../Asset/Bitbucket.png'
import Css from '../Asset/css-logo.png'
// import Git from '../Asset/Git.png'
// import Github from '../Asset/Github.png'
// import Gitlab from '../Asset/Gitlab.png'
import Html from '../Asset/html-logo.png'
import Bootstrap from '../Asset/bootsrap-logo.png'
import Nextjs from '../Asset/nextjs-logo.png'
import Wordpress from '../Asset/wordpress-logo.png'
import Javascript from '../Asset/javascript.png'
import Reactlogo from '../Asset/react-logo.png'
import Tailwind from '../Asset/tailwind-logo.png'

const Skill = () => {
  return (
    <div className='skill'>
      <h2 className='skill-h2'>My Skills</h2>
       {/* <hr /> */}
      <div className='slill-item-con'>
      <div className='skill-item ani'> 
    <h3>1. Core Technologies</h3> 
    <p>My foundation in mastering Core Technologies like HTML 5, CSS, JAVASCRIPT (ES6+) that form the backbone of modern web development. I  Create engaging and responsive user interfaces for websites and web applications which are mobile responsive using css.  I use JavaScript to add interactivity to web pages, such as form validation, animations, and user-driven events.  They also provide a solid foundation for integrating advanced frameworks and tools.</p>
    </div>
    <div className='skill-item'>
      <h3>2. Frameworks and Libraries</h3>
    <p>I effectively utilize modern frontend frameworks and libraries to build robust, scalable, and interactive web applications. I use JavaScript library like React to build component-based, reusable, and dynamic user interfaces. I use CSS framework like Tailwind to customize components to meet unique project requirements and fast prototyping and consistent design systems. I can design and develop solutions tailored to solve real-life problems, improving user experience, efficiency, and accessibility across various industries.</p>
    </div>
    <div className='skill-item'>
    <h3>3. Performance Optimization</h3>
    <p>As a frontend developer I focus on performance optimization for providing fast, smooth, and efficient user experiences. I use techniques like minification, bundling, code splitting and images optimization to significantly enhance the speed and responsiveness of my applications. By combining efficient asset management, runtime improvements, and modern tools, I can achieve fast, smooth, and user-friendly applications that meet the high expectations of users and businesses.</p>
    </div>
    <div className='skill-item'>
    <h3>4. Version Control and Collaboration</h3>
    <p>My experience with version control systems like Git, I collaborate with other developers for managing code and fostering teamwork, track changes and maintain a history of our codebase. I use platforms like GitHub, GitLab and Bitbucket for collaboration. By leveraging tools and practices that facilitate collaboration, I can enhance productivity, reduce errors, and deliver high-quality software more effectively. </p>
    </div>
    <div className='skill-item'>
    <h3>5. API Integration</h3>
    <p>With my experience in API integration I send and receive data, enabling dynamic interactions and real-time updates. I provide a more cohesive user experience using API there by giving my users a comprehensive view of their options. The flexibility I provide using API is vital in a rapidly changing digital landscape where businesses must adapt to new technologies and market demands. I use my experience to enhance efficiency, improve user experiences, and drive innovation.</p>
    </div>
      </div>
     <h2 className='skill-h3'>Technologies i've worked with</h2>
    <div className='skill-logo'>
        <img src={Html} className='skill-img' alt='html'/>
        <img src={Css} className='skill-img' alt='css'/>
        <img src={Bootstrap} className='skill-img' alt='bootstrap'/>
        <img src={Tailwind} className='skill-img' alt='tailwind'/>
        <img src={Javascript} className='skill-img' alt='javascript'/>
        <img src={Wordpress} className='skill-img' alt='wordpress-logo'/>
        <img src={Reactlogo} className='skill-img' alt='react'/>
        <img src={Nextjs} className='skill-img' alt='nextjs'/>
      </div>
    </div>
  )
}

export default Skill;
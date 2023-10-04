import React from 'react'
import './about.css'
import ME from '../../assets/about__me.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolder} from 'react-icons/vsc'
const About = () =>{
  return (
    <section id ="about">
      <h5>Get to know</h5>
     <h2>About me</h2>
      <div className="container about__container">
      <div className='about__me'>
      <div className='about__me-image'>
      <img src={ME} alt="About" />
          
          </div>
          
          </div> 
         <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ years working</small>

          </article>
          


          <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>clients</h5>
          <small>world wide</small>

          </article>


          <article className='about__card'>
          <VscFolder className='about__icon'/>
          <h5>projects</h5>
          <small> 5+ proects</small>

          </article>



       
        </div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque aspernatur laboriosam et, quam odit eum unde, repellendus illo a provident eaque? Voluptates enim nulla accusantium esse quam illum excepturi!
</p>
<a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div> 
       </div> 
    </section>
  )
}

export default About

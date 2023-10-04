import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'
function Services() {
  return (
   
    <section id ="services">
    <h5>what i offer</h5>
    <h2>services</h2>
   <div className=' container services__container'>
   <article className='service'>
   <div className='service__head'>
    <h3>ui/ux design</h3>
   </div>
   <ul className='service__list'>
    


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>
    
   </ul>

   </article>
{/* end of ui and ux */}
<article className='service'>
   <div className='service__head'>
    <h3>web development</h3>
   </div>
   <ul className='service__list'>
    


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. .
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p> 
    </li>




    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>

    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>
    
   </ul>

   </article>
   {/* end of second web development? */}


   <article className='service'>
   <div className='service__head'>
    <h3>content creation</h3>
   </div>
   <ul className='service__list'>
    



    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>
    </li>


    <li>
    <BiCheck className='service__list-icons'/><p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </p>
    </li>
    
   </ul>

   </article>
   </div>


    </section>
  )
}

export default Services

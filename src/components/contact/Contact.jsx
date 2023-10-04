import React from 'react'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'

function Contact() {
  return (
    
    <section id ="contact">
      <h5>Get in touch</h5>
      <h2>contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className=" contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>email</h4>
          <h5>rajputanisha34@gmail.com</h5>
          <a href="mailto:rajputanisha34@gmail.com" target='_blank'>send a message</a>
        </article>





        <article className=" contact__option">
        <RiMessengerLine className='contact__option-icon'/>
          <h4>messabger</h4>
          <h5>egatortutorials</h5>
          <a href="https://m.me/" target='_blank'>send a message</a>
        </article>



        <article className=" contact__option">
        <BsWhatsapp className='contact__option-icon' />
          <h4>whatsapp</h4>
          <h5>+9467917184</h5>
          <a href="https://api.whatsapp.com/send?phone+9467917184" target='_blank'>send a message</a>
        </article>

        </div>
        {/* end of contact option */}
        <form action="">
        <input type="text" name='name' placeholder='your name' required />
        <input type="email" name='email' placeholder='your email' required />
        <textarea name="message" rows="7" placeholder='your message'  required></textarea>
        <button type='submit' className='btn btn-primary'>send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact

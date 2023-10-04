import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import './testimonials.css'



// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:AVTR1,
    name:"tina show",
    review: 'lorembktgollllgkn, g;lfvkdfpgkeorvcvfgihjdfevfdojdfosfamdojsa;sit rsj[ut raj[ut raj[ur anijalril anjal;i dfe'
  },



  {
    avatar:AVTR2,
    name:"tina show",
    review: 'lorembktgollllgkn, g;lfvkdfpgkeorvcvfgihjdfevfdojdfosfamdojsa;sit rsj[ut raj[ut raj[ur anijalril anjal;i dfe'
  },

  {
    avatar:AVTR3,
    name:"tina show",
    review: 'lorembktgollllgkn, g;lfvkdfpgkeorvcvfgihjdfevfdojdfosfamdojsa;sit rsj[ut raj[ut raj[ur anijalril anjal;i dfe'
  },

  {
    avatar:AVTR4,
    name:"tina show",
    review: 'lorembktgollllgkn, g;lfvkdfpgkeorvcvfgihjdfevfdojdfosfamdojsa;sit rsj[ut raj[ut raj[ur anijalril anjal;i dfe'
  },
]
const Testimonials = () => {
  return (
   
    <section id ="testimonials">
      <h5>review from client</h5>
      <h2>Testimonials</h2>
      <Swiper className=" container testimonials__container"
      



      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      {
      
    

      
      
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide key ={index} className="testimonials">
          <div className="client__avatar">
            <img src={avatar}  />
          </div>
          <h5 className='client__name'>{name} </h5>

<small className='client__review'>{review}
</small>
        </SwiperSlide>
          )
        
        })
        }  
      </Swiper>
    </section>
  )
}

export default Testimonials

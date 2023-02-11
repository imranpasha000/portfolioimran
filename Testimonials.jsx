import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules

import { Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper Styles

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2> Testimonials</h2>
      <Swiper className='container testimonial__container'
      // install swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'> Lizza Maria</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
              molestias cum consectetur hic corrupti, quos 
              sunt quasi delectus a iusto perferendis, nulla expedita quod saepe optio et corporis ullam!
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="Avatar one" />
          </div>
          <h5 className='client__name'> Mohammad Imran</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
              molestias cum consectetur hic corrupti, quos 
              sunt quasi delectus a iusto perferendis, nulla expedita quod saepe optio et corporis ullam!
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt="Avatar one" />
          </div>
          <h5 className='client__name'> Ansul Kumar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
              molestias cum consectetur hic corrupti, quos 
              sunt  delectus a iusto perferendis, nulla expedita quod saepe optio et corporis ullam!
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt="Avatar one" />
          </div>
          <h5 className='client__name'> Nina Mazzele </h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
              molestias cum consectetur hic corrupti, quos 
              sunt quasi delectus a iusto perferendis, nulla expedita quod saepe optio et corporis ullam!
            </small>
        </SwiperSlide>

        
      </Swiper>
      </section>
  )
}
export default Testimonials

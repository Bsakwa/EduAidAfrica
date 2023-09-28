import React from 'react'
import './reviews.css'
import AV1 from '../../../../assets/Me.jpeg'
import AV2 from '../../../../assets/barry.jpg'
import AV3 from '../../../../assets/avatar3.jpg'
import AV4 from '../../../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay, Pagination} from 'swiper/modules';

const data = [
  {
     avart:AV1,
    name:'Tina Snow',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
  },
  {
   avart:AV4,
   name:'Ozioma',
   reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
 },
 {
  avart:AV3,
  name:'Abdul-basit Seriki',
  reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
},
{
  avart:AV2,
 name:'Emmah Abo',
 reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
},

]


const Testinonial = () => {
  return (
     
    <section id="testimonials" className='w-full h-full p-10'>
    
      <h1 className='text-white text-4xl flex justify-center items-center mb-6  font-extrabold '>Review from client</h1>
      
     <Swiper className ='testimonial_container '
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
     >
        {
          data.map(({avart, name, reveiw},index) =>{
            return(
              <SwiperSlide key = {index} className='testimoninals mb-7'>
              <div className="client_avatar">
                <img src = {avart}  />
              </div><h5 className='text-white font-roboto-flex font-semibold text-xl'> {name}</h5>
                 <small className='client_review font-bold'>
                    {reveiw}
                   </small>
            </SwiperSlide>
            )
          })
        }
     </Swiper>
    </section> 
  )
}

export default Testinonial

import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay, Pagination} from 'swiper/modules';
import ms from '../../../../assets/Mastercard_logo_PNG5.png'
import ps from '../../../../assets/Princeton.png'
import bb from '../../../../assets/Julius Berger.png'
import './N_u.css'

const N_u = () => {
  return (
    <div className='w-full h-full p-7 '>
      <div className="header flex items-center justify-center ">
            <h1 className='text-4xl  font-bold  text-green-100   font-quicksand'>
                  check out for lastest scholarships
            </h1>
            <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' ></span >
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }} 
        modules={[Autoplay, Pagination ]}
        className="mySwiper space-y-4 mt-12 p-8 flex items-center"
      >
        <SwiperSlide className='sd1 relative w-full h-full bg-white p-5 flex flex-col items-center gap-4'>
            <div className="row  relative w-full h-full">
            <img src={ms} alt="" className='object-cover' />
            <div className="content flex flex-col gap-4 justify-start items-start">
                  <h1 className='font-extrabold text-2xl text-center font-nunito-sans'>MasterCard University Undergraduate Scholarship</h1>
                  <p className='font-semibold capitalize' >Application Deadline: <span className='font-semibold  font-roboto text-red-500' > October 13, 2023</span ></p>
                  <p className='font-semibold capitalize' > courses: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >Not specified</span ></p>
                  <p className='font-semibold capitalize' > school to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >University of the Western Cape</span ></p>
                  <p className='font-semibold capitalize' > category: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > Undergraduate</span ></p>
                  <p className='font-semibold capitalize' > country to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >South Africa</span ></p>
            </div>
            <div className="btn bg-green-400 hover:bg-blue-300 font-roboto font-semibold capitalize text-white text-[1.3rem] p-4">
                  apply now
            </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='sd1 relative w-full h-full bg-white p-5 flex flex-col items-center gap-4'>
            <img src={ps} alt="" className='object-cover' />
            <div className="content flex flex-col gap-4 justify-start items-center">
                  <h1 className='font-extrabold text-2xl text-center font-nunito-sans'>Princeton University Fung Global Fellows Program 2024-2025</h1>
                  <div className="detials flex flex-col items-start gap-8">
                        <p className='font-semibold capitalize' >Application Deadline: <span className='font-semibold  font-roboto text-red-500' >  Novermber 15, 2023</span ></p>
                        <p className='font-semibold capitalize' > courses: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >Not specified</span ></p>
                        <p className='font-semibold capitalize' > school to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > College of New jersey</span ></p>
                        <p className='font-semibold capitalize' > category: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > felowship</span ></p>
                        <p className='font-semibold capitalize' > country to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > New jersey</span ></p>
             </div>
            </div>
            <div className="btn bg-green-400 hover:bg-blue-300 font-roboto font-semibold capitalize text-white text-[1.3rem] p-4">
                  apply now
            </div>
        </SwiperSlide>

        <SwiperSlide className='sd1 relative bg-white p-5 flex flex-col items-center gap-4'>
            <img src={bb} alt="" className='object-cover' />
            <div className="content flex flex-col gap-4 justify-start items-start">
                  <h1 className='font-extrabold text-2xl text-center font-nunito-sans'> Julius berger Scholarship</h1>
                  <div className="detials flex flex-col items-start gap-8">
                        <p className='font-semibold capitalize' >Application Deadline: <span className='font-semibold  font-roboto text-red-500' >   october 9, 2023</span ></p>
                        <p className='font-semibold capitalize' > courses: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >Not specified</span ></p>
                        <p className='font-semibold capitalize' > school to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > </span ></p>
                        <p className='font-semibold capitalize' > category: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >  undergraduate</span ></p>
                        <p className='font-semibold capitalize' > country to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > Nigeria</span ></p>
                   </div>     
            </div>
            <div className="btn bg-green-400 hover:bg-blue-300 font-roboto font-semibold capitalize text-white text-[1.3rem] p-4">
                  apply now
            </div>
        </SwiperSlide> 

        <SwiperSlide className='sd1 relative bg-white p-5 flex flex-col items-center gap-4'>
            <img src={bb} alt="" className='object-cover' />
            <div className="content flex flex-col gap-4 justify-start items-start">
                  <h1 className='font-extrabold text-2xl text-center font-nunito-sans'> Julius berger Scholarship</h1>
                  <div className="detials flex flex-col items-start gap-8">
                        <p className='font-semibold capitalize' >Application Deadline: <span className='font-semibold  font-roboto text-red-500' >   october 9, 2023</span ></p>
                        <p className='font-semibold capitalize' > courses: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >Not specified</span ></p>
                        <p className='font-semibold capitalize' > school to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > </span ></p>
                        <p className='font-semibold capitalize' > category: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >  undergraduate</span ></p>
                        <p className='font-semibold capitalize' > country to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > Nigeria</span ></p>
                   </div>     
            </div>
            <div className="btn bg-green-400 hover:bg-blue-300 font-roboto font-semibold capitalize text-white text-[1.3rem] p-4">
                  apply now
            </div>
        </SwiperSlide> 


        <SwiperSlide className='sd1 relative bg-white p-5 flex flex-col items-center gap-4'>
            <img src={bb} alt="" className='object-cover' />
            <div className="content flex flex-col gap-4 justify-start items-start">
                  <h1 className='font-extrabold text-2xl text-center font-nunito-sans'> Julius berger Scholarship</h1>
                  <div className="detials flex flex-col items-start gap-8">
                        <p className='font-semibold capitalize' >Application Deadline: <span className='font-semibold  font-roboto text-red-500' >   october 9, 2023</span ></p>
                        <p className='font-semibold capitalize' > courses: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >Not specified</span ></p>
                        <p className='font-semibold capitalize' > school to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > </span ></p>
                        <p className='font-semibold capitalize' > category: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >  undergraduate</span ></p>
                        <p className='font-semibold capitalize' > country to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > Nigeria</span ></p>
                   </div>     
            </div>
            <div className="btn bg-green-400 hover:bg-blue-300 font-roboto font-semibold capitalize text-white text-[1.3rem] p-4">
                  apply now
            </div>
        </SwiperSlide> 


        <SwiperSlide className='sd1 relative bg-white p-5 flex flex-col items-center gap-4'>
            <img src={bb} alt="" className='object-cover' />
            <div className="content flex flex-col gap-4 justify-start items-start">
                  <h1 className='font-extrabold text-2xl text-center font-nunito-sans'> Julius berger Scholarship</h1>
                  <div className="detials flex flex-col items-start gap-8">
                        <p className='font-semibold capitalize' >Application Deadline: <span className='font-semibold  font-roboto text-red-500' >   october 9, 2023</span ></p>
                        <p className='font-semibold capitalize' > courses: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >Not specified</span ></p>
                        <p className='font-semibold capitalize' > school to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > </span ></p>
                        <p className='font-semibold capitalize' > category: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' >  undergraduate</span ></p>
                        <p className='font-semibold capitalize' > country to study: <span className='font-semibold  font-roboto text-blue-500 hover:text-red-400' > Nigeria</span ></p>
                   </div>     
            </div>
            <div className="btn bg-green-400 hover:bg-blue-300 font-roboto font-semibold capitalize text-white text-[1.3rem] p-4">
                  apply now
            </div>
        </SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default N_u
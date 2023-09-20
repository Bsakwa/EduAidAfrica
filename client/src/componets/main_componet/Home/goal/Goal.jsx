import React from 'react';
import './goal.css'
const Goal = () => {
  return (
    <div className=' hero p-12 w-full h-full'>
      <div className="flex flex-col gap-7">
        <div className="head text-center flex justify-center items-center flex-col">
          <h1 className="header mb-3 font-sm text-4xl text-gray-100">
            Scholarships To Finance Your Education
          </h1>
          <p className="font-medium text-gray-100 text-xl mb-8">
            Our Goal To Compile Information And Resources That Students Often Search For When Studying Abroad
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-full items-center justify-center ">
        <div className="cards flex flex-row gap-4  justify-between relative p-8">
          <div className="maincards flex bg-blue-200 rounded-md flex-col items-center p-6 gap-4   ">
            <div className="imagecontainer">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col itemcenter justify-center gap-4">
              <h1 className='font-normal font-qicksand text-center capitalize text-gray-900 text-[1.5rem]'>
                full scholarship for master courses
              </h1>
              <p className="text-gray-500 font-medium text-center capitalize ">
                Many students don't know that there are quite a lot of Master scholarships available which cover the full tuition fee.
              </p>
            </div>
          </div>

          <div className="maincards flex bg-blue-200 rounded-md flex-col items-center p-6 gap-4   ">
            <div className="imagecontainer">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col itemcenter justify-center gap-4">
              <h1 className='font-normal font-qicksand text-center capitalize text-gray-900 text-[1.5rem]'>
                full scholarship for master courses
              </h1>
              <p className="text-gray-500 font-medium text-center capitalize ">
                Many students don't know that there are quite a lot of Master scholarships available which cover the full tuition fee.
              </p>
            </div>
          </div>
          <div className="maincards flex bg-blue-200 rounded-md flex-col items-center p-6 gap-4   ">
            <div className="imagecontainer">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col itemcenter justify-center gap-4">
              <h1 className='font-normal font-qicksand text-center capitalize text-gray-900 text-[1.5rem]'>
                full scholarship for master courses
              </h1>
              <p className="text-gray-500 font-medium text-center capitalize ">
                Many students don't know that there are quite a lot of Master scholarships available which cover the full tuition fee.
              </p>
            </div>
          </div>

          <div className="maincards flex bg-blue-200 rounded-md flex-col items-center p-6 gap-4   ">
            <div className="imagecontainer">
              <img src="" alt="" />
            </div>

            <div className="flex flex-col itemcenter justify-center gap-4">
              <h1 className='font-normal font-qicksand text-center capitalize text-gray-900 text-[1.5rem]'>
                full scholarship for master courses
              </h1>
              <p className="text-gray-500 font-medium text-center capitalize ">
                Many students don't know that there are quite a lot of Master scholarships available which cover the full tuition fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;

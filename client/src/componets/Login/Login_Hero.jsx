import React from 'react' 
import bg from "../../assets/hero-bg-1.jpg"
import './styles.css'

const Login_Hero = () => {
  return (
    <div className=' '>
      <div className="herocontainer flex">
                  <div className="form-content absolute  top-0 bottom-0 right-0 left  w-full h-full flex justify-between items-center">
                    <div className="text">
                     <h1 className='capitalize flex font-roboto text-[2rem] font-bold ml-[5rem] text-yellow-50 text-center w-[25rem]'>Powering you career by getting scholarship your dream university around the word.</h1> 
                    </div>
                    <div className="form flex relative bg-white flex-col items-start p-4   justify-start mr-12 gap-8">
                      <h1 className="capitalize text-blue-400 font-bold text-[1rem]">register now</h1>
                      <form action="" className= ''>
                          <fieldset>
                            <legend className='capitalize'>First name</legend>
                            <input type="text" placeholder='Barry Argent' />
                          </fieldset>
                     </form>
                    </div>
                    </div>

      </div>
      
    </div>
  )
}

export default Login_Hero
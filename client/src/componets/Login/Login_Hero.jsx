import React, { useState } from 'react';
import './styles.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login_Hero = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegisterPage, setIsRegisterPage] = useState(true); // Initially, show the register page

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTogglePage = () => {
    setIsRegisterPage(!isRegisterPage);
  };

  const [formData, setFormData] = useState({
    UserName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className=' '>
      <div className="herocontainer  flex">
        <div className="form-content   gap-[10rem] mt-8 overflow-hidden w-full h-screen flex justify-between items-center">
          <div className="text">
            <h1 className='capitalize flex font-roboto text-[1.5rem] font-bold ml-[2rem] text-yellow-50 text-center w-[20rem]'>
              Powering your career by getting scholarships to your dream university around the world.
            </h1>
          </div>
          <div className="form flex relative bg-white flex-col rounded-[1rem] items-center p-3 w-full mr-5 mt-10 justify-start">
            {isRegisterPage ? (
              <>
                {/* Register Form */}
                <h1 className="capitalize text-blue-400 font-bold text-[1.5rem]">Register Now</h1>
                <form action="" className='w-full font-quicksand flex flex-col gap-2 p-4 max-w-[30rem]' onSubmit={handleSubmit}>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>UserName</legend>
                    <input className='p-1 text-[0.8rem] overflow-hidden' type="text" placeholder='Barry Argent' name=" UserName" value={formData. UserName} onChange={handleInputChange} />
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Email</legend>
                    <input className='p-1 text-[0.8rem] overflow-hidden' type="email" placeholder='xyz@gmail.com' name="email" value={formData.email} onChange={handleInputChange} />
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Password</legend>
                    <input className='p-1 text-[0.8rem] overflow-hidden' type={passwordVisible ? 'text' : 'password'} placeholder='Enter Password' name="password" value={formData.password} onChange={handleInputChange} />
                  </fieldset>
                  <span className='flex items-center relative gap-1 text-[0.7rem] font-medium'>
                    Show password
                    <div className='icons absolute right-1'>
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible className='text-[0.8rem]' onClick={togglePasswordVisibility} />
                      ) : (
                        <AiOutlineEye className='text-[0.8rem]' onClick={togglePasswordVisibility} />
                      )}
                    </div>
                  </span>
                  <div className="flex gap-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                      Register
                    </button>
                    <button type="button" onClick={() => setFormData({ ...formData,  UserName: '', email: '', password: '', confirmPassword: '' })} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
                      Clear Form
                    </button>
                  </div>
                  <p className="text-[0.8rem] mt-2">
                    Already have an account? <span className="text-blue-500 cursor-pointer" onClick={handleTogglePage}>Sign in</span>
                  </p>
                </form>
              </>
            ) : (
              <>
                {/* Login Form */}
                <h1 className="capitalize text-blue-400 font-bold text-[1.5rem]">Login</h1>
                <form action="" className='w-full font-quicksand flex flex-col gap-2 p-4 max-w-[30rem]' onSubmit={handleSubmit}>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Email</legend>
                    <input className='p-1 text-[0.8rem] overflow-hidden' type="email" placeholder='xyz@gmail.com' name="email" value={formData.email} onChange={handleInputChange} />
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Password</legend>
                    <input className='p-1 text-[0.8rem] overflow-hidden' type={passwordVisible ? 'text' : 'password'} placeholder='Enter Password' name="password" value={formData.password} onChange={handleInputChange} />
                  </fieldset>
                  <span className='flex items-center relative gap-1 text-[0.7rem] font-medium'>
                    Show password
                    <div className='icons absolute right-1'>
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible className='text-[0.8rem]' onClick={togglePasswordVisibility} />
                      ) : (
                        <AiOutlineEye className='text-[0.8rem]' onClick={togglePasswordVisibility} />
                      )}
                    </div>
                  </span>
                  <div className="flex gap-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                      Login
                    </button>
                  </div>
                  <p className="text-[0.8rem] mt-2">
                    Don&apos;t have an account? <span className="text-blue-500 cursor-pointer" onClick={handleTogglePage}>Sign up</span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login_Hero;

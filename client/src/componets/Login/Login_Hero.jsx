import React, { useState } from 'react';
import './styles.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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

  const [formErrors, setFormErrors] = useState({
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

    const errors = {};
    
    // Validation logic
    if (formData.UserName.trim() === '') {
      errors.UserName = 'Username is required.';
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required.';
    }

    if (formData.password.trim() === '') {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter.';
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = 'Password must contain at least one lowercase letter.';
    } else if (!/\d/.test(formData.password)) {
      errors.password = 'Password must contain at least one number.';
    }

    if (isRegisterPage && formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    // Set errors and prevent form submission if there are errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If all validation passes, you can proceed with form submission
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
                    <legend className='text-[0.8rem] font-semibold capitalize'>Username</legend>
                    <input required className='p-1 text-[0.8rem] overflow-hidden' type="text" placeholder='Barry Argent' name="UserName" value={formData.UserName} onChange={handleInputChange} />
                    {formErrors.UserName && <p className="text-red-500">{formErrors.UserName}</p>}
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Email</legend>
                    <input required className='p-1 text-[0.8rem] overflow-hidden' type="email" placeholder='xyz@gmail.com' name="email" value={formData.email} onChange={handleInputChange} />
                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Password</legend>
                    <input required className='p-1 text-[0.8rem] overflow-hidden' type={passwordVisible ? 'text' : 'password'} placeholder='Enter Password' name="password" value={formData.password} onChange={handleInputChange} />
                    {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Confirm Password</legend>
                    <input required className='p-1 text-[0.8rem] overflow-hidden' type={passwordVisible ? 'text' : 'password'} placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
                    {formErrors.confirmPassword && <p className="text-red-500">{formErrors.confirmPassword}</p>}
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
                    <button type="button" onClick={() => setFormData({ UserName: '', email: '', password: '', confirmPassword: '' })} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
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
                    <input required className='p-1 text-[0.8rem] overflow-hidden' type="email" placeholder='xyz@gmail.com' name="email" value={formData.email} onChange={handleInputChange} />
                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                  </fieldset>
                  <fieldset className='w-full p-2'>
                    <legend className='text-[0.8rem] font-semibold capitalize'>Password</legend>
                    <input required className='p-1 text-[0.8rem] overflow-hidden' type={passwordVisible ? 'text' : 'password'} placeholder='Enter Password' name="password" value={formData.password} onChange={handleInputChange} />
                    {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
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
                    Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={handleTogglePage}>Sign up</span>
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

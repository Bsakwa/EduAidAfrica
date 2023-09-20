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

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Add validation logic here and update isFormValid accordingly
    const errors = {};

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

    // Check if there are no errors
    const isValid = Object.keys(errors).length === 0;

    // Update the isFormValid state
    setIsFormValid(isValid);

    // Set form errors
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic if isFormValid is true
    if (isFormValid) {
      console.log('Form submitted:', formData);
    }
  };
  

  return (
    <div className=' '>
      <div className="herocontainer  flex">
        <div className="form-content   gap-[10rem] overflow-hidden w-full h-[87vh] flex justify-between items-center">
          <div className="text w-full flex justify-center">
            <h1 className='capitalize w-full flex font-roboto text-[2rem] font-bold ml-[2rem] text-yellow-50 text-center w-[20rem]'>
              Powering your career by getting scholarships to your dream university around the world.
            </h1>
          </div>
          <div className="form flex relative bg-white w-full flex-col rounded-[1rem] items-center p-3  mr-5 mt-10 justify-start">
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
                    <button type="submit" className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full ${isFormValid ? '' : 'pointer-events-none opacity-50'}`}>
                      <NavLink to='/home'>Register</NavLink>
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
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full" disabled={!isFormValid}>
                      <NavLink to='/home'>Login</NavLink>
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

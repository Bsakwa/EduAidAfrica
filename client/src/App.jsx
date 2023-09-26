import React from 'react'
import Login from './componets/Login/Login'
import { Routes, Route } from 'react-router-dom';
import Home from "./componets/main_componet/Home/Home"
import Scholar from "./componets/main_componet/scholarship_type/Scholar"
import About_us from "./componets/main_componet/About_us/About_us"
import Contact from "./componets/main_componet/contact_us/ContactUs"
import './index.css'
 
 const App = () => {
   return (
     <>
        <Routes>
              <Route path="/home" element={<Home/>} /> 
              <Route path="/Scholarship" element={<Scholar/>} />
              <Route path="/About" element={<About_us/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/" element={<Login/>} />
        </Routes>
     </>
   )
 }
 
 export default App

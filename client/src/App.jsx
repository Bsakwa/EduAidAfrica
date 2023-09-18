import React from 'react'
import Login from './componets/Login/Login'
import { Routes, Route } from 'react-router-dom';
import Home from "./componets/main_componet/Home/Home"
import Scholar from "./componets/main_componet/scholarship_type/Scholar"
import About_us from "./componets/main_componet/About us/About_us"
import Contact_us from "./componets/main_componet/contact us/ContactUs"
import './index.css'
 
 const App = () => {
   return (
     <>
        <Routes>
              <Route path="/home" element={<Home/>} /> 
              <Route path="/Scholarship type" element={<Scholar/>} />
              <Route path="/About us" element={<About_us/>} />
              <Route path="/contact us" element={<Contact_us/>} />
              <Route path="/" element={<Login/>} />
        </Routes>
     </>
   )
 }
 
 export default App
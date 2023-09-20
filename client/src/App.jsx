// import React from 'react'
import Login from "./componets/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/main_componet/Home/Home";
import Scholar from "./componets/main_componet/scholarship_type/Scholar";
import About_us from "./componets/main_componet/About_us/About_us";
import Contact_us from "./componets/main_componet/contact_us/ContactUs";
import Nav from "./componets/main_componet/Nav/Nav";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Scholarship type" element={<Scholar />} />
        <Route path="/educators" element={<About_us />} />
        <Route path="/partners" element={<Contact_us />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

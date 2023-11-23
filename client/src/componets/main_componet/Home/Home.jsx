import React from "react";
import Homeslide from "./hs/hs";
import Nav from "../Nav/Nav";
import Goal from "./goal/Goal";
import N_u from "./News and update/N_u";
import Footer from "./footer/footer";
import HowItWorks from "./works/HowItWorks";
import About from "./about/About"; // Import the About component
import "./Home.css";

const Home = () => {
  return (
    <div className="relative hero">
      <Nav />
      <Homeslide />
      <Goal />
      <HowItWorks />
      <About /> {/* Include the About component here */}
      <N_u />
      <Footer />
    </div>
  );
};

export default Home;

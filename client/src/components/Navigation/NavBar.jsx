import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Scholarship Type</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Apply Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

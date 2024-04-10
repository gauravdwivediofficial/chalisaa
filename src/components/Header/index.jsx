import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
    <nav className="navbar">
      <ul>
        <Link to="/" className="li">
          श्री हनुमान चालीसा
        </Link>
        
        <Link to="/astak" className="li">
          हनुमानाष्टक
        </Link>
        <Link to="/baan" className="li">
          श्री बजरंग बाण पाठ
        </Link>
        <Link to="/arti" className="li">
          आरती
        </Link>
      </ul>
    </nav>
    </>
  );
};

export default Header;

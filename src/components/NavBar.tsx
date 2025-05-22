import React from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
    currmode : number;
    toggleMode : () => void;
}

function NavBar({ currmode, toggleMode }: NavBarProps){
    return (
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
          </div>
          <button onClick={toggleMode}>
            Mode: {currmode === 0 ? "Dark" : currmode === 1 ? "Light" : "Cream"}
          </button>
        </nav>
      );
}

export default NavBar

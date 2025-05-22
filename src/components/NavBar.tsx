import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

type NavBarProps = {
  currmode: number;
  toggleMode: () => void;
};


function NavBar({ currmode, toggleMode }: NavBarProps) {
  const [count, setCount] = useState(0)

const CountHandle = () => {
  setCount(count + 1)
}

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
        </div>
        <button onClick={toggleMode}>
          {currmode === 0 ? "Dark" : currmode === 1 ? "Light" : "Cream"}
        </button>
        <button onClick={CountHandle}>Click me {count}</button>
      </div>
    </nav>
  );
}

export default NavBar;

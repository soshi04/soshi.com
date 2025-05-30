import { Link } from "react-router-dom";
import "./NavBar.css"

type NavBarProps = {
  currmode: number;
  toggleMode: () => void;
};


function NavBar({ currmode, toggleMode }: NavBarProps) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-buttons">
        <button onClick={toggleMode}>
          {currmode === 0 ? "Light" : currmode === 1 ? "Cream" : "Dark"}
        </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

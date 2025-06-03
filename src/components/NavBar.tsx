import { Link } from "react-router-dom";
import "./NavBar.css"
import { IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';


type NavBarProps = {
  currmode: number;
  toggleMode: () => void;
};


function NavBar({ currmode, toggleMode }: NavBarProps) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/projects">works</Link>
          <Link to="/blog">words</Link>
          <Link to="/about">whatever</Link>
        </div>
        <div className="nav-buttons">
            <IconButton size="small" aira-label='github' href="https://github.com/soshi04">
              <GitHubIcon/>
            </IconButton>
            <IconButton size='small' aria-label="switchmode" onClick={toggleMode}>
              {currmode === 0 ? <LightModeIcon/> : <DarkModeIcon/>}
            </IconButton> 
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

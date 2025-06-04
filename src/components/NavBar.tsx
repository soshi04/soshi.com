import { Link } from "react-router-dom";
import "./NavBar.css"
import { IconButton, Stack} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


type NavBarProps = {
  currmode: number;
  toggleMode: () => void;
};


function NavBar({ currmode, toggleMode }: NavBarProps) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Stack direction={"row"} spacing={2} >
        <div className="nav-links">
            <Link to="/">home</Link>
            <Link to="/projects">works</Link>
            <Link to="/blog">words</Link>
            <Link to="/about">whatever</Link>
        </div>
        </Stack>
        <div className="nav-buttons">
            <IconButton size="small" aira-label='github' href="https://github.com/soshi04">
              <GitHubIcon/>
            </IconButton>
            <IconButton size="small" aria-label="linkedin" href="https://www.linkedin.com/in/sohum-joshi/">
              <LinkedInIcon/>
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

import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
  IconButton,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import HomeIcon from "@mui/icons-material/Home";

type NavBarProps = {
  currmode: number;
  toggleMode: () => void;
};

export default function NavBar({ currmode, toggleMode }: NavBarProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '30px',
        px: { xs: 1.5, sm: 2 }, //new
        py: 1,
        backgroundColor: '#fff',
        color: '#fff',
        border: currmode === 0 ? '1.5px solid #444' : '1.5px solid #eee',
        boxShadow: currmode === 0 ? '0 4px 24px 0 #0008' : undefined,
        display: 'flex',
        gap: 2,
        zIndex: 1000,
        alignItems: 'center',
        paddingLeft: 'calc(1.5rem + env(safe-area-inset-left))', //new
        paddingRight: 'calc(1.5rem + env(safe-area-inset-right))', //new
      }}
    >
      <IconButton component={Link} to="/" aria-label="Home">
        <HomeIcon sx={{ fontSize: { xs: 20, sm: 24 }, xs: {paddingLeft: 0.25} }} />
      </IconButton>
      <IconButton component={Link} to="/projects" aria-label="Projects">
        <WorkIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      <IconButton component={Link} to="/blog" aria-label="Blog">
        <ArticleIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      <IconButton component={Link} to="/about" aria-label="Whatever">
        <AllInclusiveIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      <IconButton size="small" href="https://github.com/soshi04" aria-label="GitHub">
        <GitHubIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      <IconButton size="small" href="https://linkedin.com/in/sohum-joshi" aria-label="LinkedIn">
          <LinkedInIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      <IconButton size="small" onClick={toggleMode} aria-label="Toggle Dark Mode">
        
        {currmode === 0 ? <LightModeIcon sx={{ fontSize: { xs: 20, sm: 24 }, xs: {paddingRight:0.25} }} /> : <DarkModeIcon sx={{ fontSize: { xs: 20, sm: 24 }, xs: {paddingRight:0.25} }} />}
      </IconButton>
    </Paper>
  );
}
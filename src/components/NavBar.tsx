import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type NavBarProps = {
  currmode: number;
  toggleMode: () => void;
};

export default function NavBar({ currmode, toggleMode }: NavBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "home", to: "/" },
    { label: "works", to: "/projects" },
    { label: "words", to: "/blog" },
    { label: "whatever", to: "/about" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        px: 3,
        py: 2,
        backgroundColor: "#de8667",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {isMobile ? (
          <>
            <IconButton
              size="small"
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List sx={{ width: 200 }}>
                {navLinks.map((link, idx) => (
                  <ListItem
                    button
                    key={idx}
                    onClick={toggleDrawer(false)}
                    component={Link}
                    to={link.to}
                    {...({} as any)}
                  >
                    <ListItemText primary={link.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            {navLinks.map((link, idx) => (
              <Box
              key={idx}
              component={Link}
              to={link.to}
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": {
                color: "gray",
                textDecoration: "underline",
                },
              }}
            >
              {link.label}
            </Box>
            ))}
          </Stack>
        )}
      </Box>

      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton size="small" href="https://github.com/soshi04" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton
          size="small"
          href="https://linkedin.com/in/sohum-joshi"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton size="small" onClick={toggleMode} aria-label="Toggle Dark Mode">
          {currmode === 0 ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
}
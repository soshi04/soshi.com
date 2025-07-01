import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type MainPageProps = {
  currmode: number;
  toggleMode: () => void;
};

export default function MainPage({ currmode, toggleMode }: MainPageProps) {
  const color = currmode === 0 ? common.white : common.black;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: currmode === 0 ? common.black : common.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        gap: 6,
      }}
    >
      {/* Top section */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          alt="Sohum Avatar"
          src="avatar.jpg"
          sx={{ width: 125, height: 125 }}
        />
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Typography variant="h4" fontWeight={700} color={color}>
              <Typewriter
                words={["Hey, I'm Sohum"]}
                cursor
                cursorStyle=""
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
            {/* Icons in red box space */}
            <Stack direction="row" spacing={1} ml={2}>
              <IconButton size="small" href="https://github.com/soshi04" aria-label="GitHub">
                <GitHubIcon sx={{ color }} />
              </IconButton>
              <IconButton size="small" href="https://linkedin.com/in/sohum-joshi" aria-label="LinkedIn">
                <LinkedInIcon sx={{ color }} />
              </IconButton>
              <IconButton size="small" onClick={toggleMode} aria-label="Toggle Dark Mode">
                {currmode === 0 ? <LightModeIcon sx={{ color }} /> : <DarkModeIcon sx={{ color }} />}
              </IconButton>
            </Stack>
          </Stack>
          <Typography variant="subtitle1" color={color} mt={1}>
            Incoming CS Master's @ Georgia Tech | Machine Learning Engineer | Full-stack Developer
          </Typography>
        </Box>
      </Stack>

      {/* Middle Section */}
      <Box textAlign="center">
        <Typography variant="body1" color={color}>
          I'm currently building <b>Object Detection</b> — a tool to help you detect objects in images using OpenCV.
        </Typography>
        <Typography variant="body1" color={color} mt={1}>
          <b>sjoshi376 [at] gatech [dot] edu</b>
        </Typography>
      </Box>

      {/* Bottom Buttons */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth={400}
        >
        <Button
            fullWidth
            variant="contained"
            component={Link}
            to="/projects"
            sx={{
            backgroundColor: 'orange',
            color: 'white',
            '&:hover': {
                backgroundColor: 'darkorange',
                color: 'white', // prevents blue text on hover
            },
            textDecoration: 'none',
            }}
        >
            WORK
        </Button>
        <Button
            fullWidth
            variant="contained"
            component={Link}
            to="/blog"
            sx={{
            backgroundColor: 'blue',
            color: 'white',
            '&:hover': {
                backgroundColor: 'darkblue',
                color: 'white',
            },
            textDecoration: 'none',
            }}
        >
            WORDS
        </Button>
        <Button
            fullWidth
            variant="contained"
            component={Link}
            to="/about"
            sx={{
            backgroundColor: 'red',
            color: 'white',
            '&:hover': {
                backgroundColor: 'darkred',
                color: 'white',
            },
            textDecoration: 'none',
            }}
        >
            WHATEVER
        </Button>
        </Stack>
    </Box>
  );
}

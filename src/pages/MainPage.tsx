import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
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
        // maxWidth: '1000px', //new 
        // mx: 'auto', //new 
        // width: '100%', //new 
        px: 2,
        gap: 4,
      }}
    >
      {/* Top section */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
        mt={2}
        mb={2}
      >
        <Avatar
          alt="Sohum Avatar"
          src="avatar.jpg"
          sx={{ width: 125, height: 125 }}
        />
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Stack direction={{xs: 'column', sm: 'row'}} alignItems="center" justifyContent="space-between" spacing={2}>
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
            Incoming CS Master's @ Georgia Tech | Machine Learning Engineer
          </Typography>
        </Box>
      </Stack>
      {/* Middle Section */}
      <Box textAlign="center">
        <Typography variant="body1" color={color}>
        I'm currently building <b>GestureRemix</b> — a tool that lets you remix music in real time using hand gestures captured via your webcam.
        </Typography>
        <Typography variant="body1" color={color} mt={1}>
          <b>sjoshi376 [at] gatech [dot] edu</b>
        </Typography>
        <Typography variant="body1" color={color} mt={1}>
            Check out my <Link to={'/projects'}>projects</Link>, read my <Link to={'/blog'}>blog</Link> or see <Link to={'/about'}>whatever</Link> else I'm doing.
        </Typography>
      </Box>
    </Box>
  );
}

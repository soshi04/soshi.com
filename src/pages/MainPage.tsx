import { common } from '@mui/material/colors';
import './MainPage.css';
import { Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

type MainPageProps = {
    currmode: number;
};

function MainPage({ currmode }: MainPageProps) {
    const color = currmode === 0 ? common.white : common.black;
    return (
        <div className="main-page">
            <div className="gradient-overlay"></div>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                position: 'relative',
                zIndex: 1,
            }}>
            <Typography variant='h2' color={color} sx={{ textAlign: 'center', fontWeight: 700 }}>
                <Typewriter
                words={["Hey, I'm Sohum"]}
                cursor
                cursorStyle=''
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
                />
            </Typography>
            <Typography variant='subtitle1' color={color}>
                Incoming CS Master's @ Georgia Tech | Machine Learning Engineer | Full-stack Developer
            </Typography>
            <Typography variant='subtitle1' color={color}>
                I'm currently building <b>Object Detection</b> — a tool to help you detect objects in images using OpenCV.
            </Typography>
            <Typography variant='subtitle1' color={color}>
                Check out my{' '}
                <Link to="/projects" className="custom-link">projects</Link>, read my{' '}
                <Link to="/blog" className='custom-link'>thoughts</Link>, or{' '} get in touch at
            </Typography>
            <Typography variant='subtitle1' color={color}> sjoshi376 [at] gatech [dot] edu </Typography>
            </Box>
        </div>
    );
}

export default MainPage;
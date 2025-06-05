import { common } from '@mui/material/colors';
import './MainPage.css';
import { Typography } from '@mui/material';

type MainPageProps = {
    currmode: number;
};

function MainPage({ currmode }: MainPageProps) {
    return (
        <div className="main-page">
            <div className="gradient-overlay"></div>
            <Typography variant='h2' color={currmode === 0 ? common.white : common.black}>
                Hey, I'm Sohum 👋
            </Typography>
            <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black}>
                Incoming CS Master's @ Georgia Tech | Machine Learning Engineer | Full-stack Developer
            </Typography>
            <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black}>
                I'm currently building <b>Object Detection</b> — a tool to help you detect objects in images using OpenCV.
            </Typography>
            <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black}>
                Check out my <a href="/projects">projects</a>, read my <a href="/blog">thoughts</a>, or <a href="mailto:sjoshi376@gatech.edu">get in touch</a>.
            </Typography>
        </div>
    );
}

export default MainPage;
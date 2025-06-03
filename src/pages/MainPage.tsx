import { common } from '@mui/material/colors';
import './MainPage.css';
import { Typography } from '@mui/material';

type MainPageProps = {
    currmode : number
}

function MainPage( {currmode}: MainPageProps ) {
    return(
        <div className="main-page">
            <Typography variant='h2' color={currmode === 0 ? common.white : common.black }>Welcome to Soshi.com</Typography>
            {/* <h1 className={
                currmode === 0 ? 'h1-dark' : 'h1-light'
            }> Welcome to Soshi.com</h1> */}
             <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black }>This is the home page of Soshi.com</Typography>
             <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black }>Here you can find more about me and my work</Typography>
             <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black }>You can also find my projects and my blog</Typography>
             <Typography variant='subtitle1' color={currmode === 0 ? common.white : common.black }>If you have any questions, please feel free to contact me at <a href="mailto:sjoshi376@gatech.edu">sjoshi376@gatech.edu</a></Typography>
        </div>
    );
}

export default MainPage
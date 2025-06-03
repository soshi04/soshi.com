import './Blog.css';
import { MuiTypography } from '../components/MuiTypography'
import { MuiButton } from '../components/MuiButton'
import { MuiTextField } from '../components/MuiTextField';

function Blog() {
    return (

        <div className="blog-page">
            <h1>Words</h1>
            <MuiTypography/>
            <div className='blog-test-buttons'>
            <MuiButton/>
            </div>
            <MuiTextField/>

        </div>
    );
}

export default Blog;
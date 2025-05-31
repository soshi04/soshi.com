import './MainPage.css';

type MainPageProps = {
    currmode : number
}

function MainPage( {currmode}: MainPageProps ) {
    return(
        <div className="main-page">
            <h1 className={
                currmode === 0 ? 'h1-dark' : 'h1-light'
            }> Welcome to Soshi.com</h1>
            <p>This is the home page of Soshi.com</p>
            <p>Here you can find more about me and my work</p>
            <p>You can also find my projects and my blog</p>
            <p>If you have any questions, please feel free to contact me at <a href="mailto:sjoshi376@gatech.edu">sjoshi376@gatech.edu</a></p>
        </div>
    );
}

export default MainPage
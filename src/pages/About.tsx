import './About.css'


function About() {
    
    return(
        <div>
            <h1>About me Page</h1>
            <div className='about-components'>
                <p>I'm a senior Computer Science student at Georgia Tech with a passion for building intuitive,
                full-stack applications that blend functionality and thoughtful design. 
                My recent projects include a leetcode problem suggestion tool and a personal productivity assistant powered
                by OpenAI, reflecting my focus on using machine learning and web technologies to solve problems.
                I’ve explored deep learning, React, TypeScript, Express, GraphQL, and cloud platforms like Vercel and Google Cloud,
                and I enjoy learning new tools by applying them to hands-on projects. I also have experience fine-tuning LLMs for scientific 
                applications and a growing interest in the intersection of AI and human cognition. Outside of coding, I enjoy climbing,
                playing soccer, and reading.
                </p>
            </div>
            <img className="pic" src="/IMG_1413.JPG" alt="none" />
        </div>
    )}

export default About
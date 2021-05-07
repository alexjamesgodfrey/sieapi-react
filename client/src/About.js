import React from 'react';
import Header from './components/Header.js';
import './styles/About.scss';

const About = () => {
    return(
        <div className="total">
            <div className="main">
                <Header />
                <div className="about">
                    <h1>about me</h1>
                    <div className="FAQ">
                        <h5>can you create a website like this for me to sell or showcase my artwork?</h5>
                        <p>yes. alex godfrey can make you a website just like this one, help you get a domain like sierraapicella
                            .com, and edit the design of the website to your liking. </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;
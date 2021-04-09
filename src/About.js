import React from 'react';
import Header from './components/Header.js';
import './styles/About.scss';

const About = () => {
    return(
        <div className="total">
            <div className="main">
                <Header />
                <div className="about">
                    <h1>About Me</h1>
                </div>
            </div>
        </div>
    )
}

export default About;
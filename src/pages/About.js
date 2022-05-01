import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>
               Qui sommes nous 
            </p>           
        </div>
    );
};

export default About;
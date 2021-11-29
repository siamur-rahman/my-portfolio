
import React from 'react';
import Projects from '../Projects/Projects';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {

    return (
        <div className="container">
            <HeroSection></HeroSection>
            <Projects></Projects>
        </div>
    );
};

export default Home;
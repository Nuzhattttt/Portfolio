import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import TrainingCertificate from '../Training&Certificate/TrainingCertificate';
import Project from '../Project/Project';
import Awards from '../Awards/Awards';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Project />
            <TrainingCertificate />
            <Awards />
            <Contact />
        </div>
    );
};

export default Home;
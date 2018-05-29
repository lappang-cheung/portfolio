import React from 'react';

// Custom classes
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Interest from './Interest';
import Footer from './Footer';

// Custom css
import '../css/style.css';

const Portfolio = () => {
    return(
        <div>
            <Header />
            <Landing />
            <About />
            <Work />
            <Projects />
            <Interest />
            <Footer />
        </div>
    );
}

export default Portfolio;
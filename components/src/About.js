import React from 'react';

const About = () => {
    return (
        <section className="section full-vertical full-horizontal">
            <div className="odd">
                <div className="section__content" id="about">
                    <div className="portfolio">
                        <img src="img/profile_img.jpg" alt="" id="portrait" className="portfolio__image"/>
                        <h2 className="portfolio__heading">Leo Cheung</h2>
                        <p className="portfolio__paragraph">
                            An ambitious developer, who is seeking for new opportunities and rapid growth. Has 2 years of 
                            web development and 3 years of Infrastructure support along with some DevOps experience.
                        </p>
                        <p className="portfolio__paragraph">
                            Outside of coding and work, would always go exploring different parts of Southern Ontario. Having small weekend adventures
                            with girlfriend in eating, hiking and exploration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
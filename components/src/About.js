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
                            My name is Leo Cheung and graduated under the faculty of Mathematics. I had worked in IT field for the last 4years in both support and development.
                        </p>
                        <p className="portfolio__paragraph">
                            I believe in scrappiness and getting shit done. I move fast, and break things. I love tinkering and finding out how things work. As a developer I believe the most important skill I have is the ability to be flexible. I am comfortable in every part of the stack, and am always looking for new things to learn.
                        </p>
                        <p className="portfolio__paragraph">
                            When I am not writing code, I love to geek out over technology. I am obsessed with cars, computer hardware, and entrepreneurship.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
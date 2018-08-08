import React from 'react';

const Work = () => {
    return (
        <section className="section full-horizontal full-vertical" id="work">
            <div className="even">
                <div className="section__content">
                    <h2 className="section__content--heading">
                        Experience
                    </h2>

                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul className="timeline timeline-centered">

                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>May 2018 - August 2018</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">HackerYou, Inc</h3>
                                        <p>Masterclass Fullstack</p>
                                    </div>
                                </li>
                                
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>April 2017 - Feburary 2018</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">SunLife Financial</h3>
                                        <p>Junior Web Application Developer</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>June 2016 - September 2016</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">PitchUpp</h3>
                                        <p>Contracted: Junior Ruby on Rails Developer</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>April 2014 - April 2017</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">SunLife Financial</h3>
                                        <p>Application Developer Support</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>August 2013</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">University of Toronto</h3>
                                        <p>Graduation from University</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>May 2010 - March 2011</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">University of Toronto</h3>
                                        <p>Web Developer (Intern)</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
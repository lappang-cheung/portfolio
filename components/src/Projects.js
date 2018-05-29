import React from 'react';

const Projects = () => {
    return (
        <section className="section full-horizontal full-vertical" id="projects">
            <div className="odd">

                <div className="section__content">
                    <h2 className="section__content--heading">
                        Projects &amp; Challenges
                    </h2>

                    <ul className="section__content--list">

                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://github.com/lappang-cheung/HackerYouChallenge">LCBO Backend Tech Challenge</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    April 2018 - Completed
                                </div>
                            </div>
                        </li>

                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://portfolio-leocheung.appspot.com/">LeoCheung</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    March 2018 - Present
                                </div>
                            </div>
                        </li>
                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://1cupcafe.myshopify.com/">1CupCafe</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    Feburary 2018 - Present
                                </div>
                            </div>
                        </li>
                        
                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://github.com/lappang-cheung/blockchain">NodeCrypto</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    December 2017 - Completed
                                </div>
                            </div>
                        </li>
                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://expensifyreactredux.herokuapp.com">Expensify</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    August 2018 - Completed
                                </div>
                            </div>
                        </li>
                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://calm-tor-79221.herokuapp.com/">NodeChatroom</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    June 2017 - Completed
                                </div>
                            </div>
                        </li>

                        <li className="projects">
                            <div className="projects__left">
                                <div className="projects__left--name">
                                    <a href="https://nameless-beach-21204.herokuapp.com">PodcastFM</a>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="projects__right--date">
                                    April 2016 - Completed
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>
        </section>
    );
}

export default Projects;
import React from 'react';

const Footer = () => {
    return(
        <section className="section full-horizontal full-vertical">
            <div className="section__content">
                <div className="footer">
                    <div className="footer__copyright">
                        <p>&copy; LeoCheung</p>
                    </div>
                    <div className="footer__social-media">
                        <a href="https://github.com/lappang-cheung">
                            <svg className="social-icon">
                                <use xlinkHref="img/sprite.svg#icon-github"></use>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/leo-lappang-cheung/">
                            <svg className="social-icon">
                                <use xlinkHref="img/sprite.svg#icon-linkedin2"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
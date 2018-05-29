import React from 'react';

const Header = () => {
    return(
        <header className="header sticky sticky-nav" id="sticky-header">
            <nav className="nav-user section__content">
                <span className="nav-user__item section__content"><a className="nav-user__item--link" href="#about">About</a></span>
                <span className="nav-user__item section__content"><a className="nav-user__item--link" href="#work">Experience</a></span>
                <span className="nav-user__logo"><a href="#home"><img className="nav-user__logo--icon" src="img/profile_icon.jpg" alt=""/></a></span>
                <span className="nav-user__item section__content"><a className="nav-user__item--link" href="#projects">Projects</a></span>
                <span className="nav-user__item section__content"><a className="nav-user__item--link" href="#interest">Interest</a></span>
            </nav>
        </header>
    );
}

export default Header;
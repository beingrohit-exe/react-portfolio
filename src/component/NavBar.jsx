import React from 'react';
import '../style/NavBar.css'

const NavBar = () => {

    const logo = "<Rohit />"
    return (
        <nav className='portfolio__main-nav'>
            <span className='navbar__logo-span'>
                {logo}
            </span>

            <div className="portfolio__links-div">
                <a href='#home' className="navbar__links">Home</a>
                <a href='#skills' className="navbar__links">Skills</a>
                <a href='#projects' className="navbar__links">Projects</a>
            </div>
        </nav>
    )
}

export default NavBar;
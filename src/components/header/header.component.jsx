
import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our logo and next lecture will explain " ReactComponent as Logo "
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import in our stylesheet
import './header.styles.scss';

// our Header component will be a functional component
const Header = () => (
    // we will create an outer container that will hold the logo and the links to different
    // pages

    // make a new folder in src called assets and inside that folder add in our crown.svg/
    // file, which is our logo
    <div className="header">

        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">

            <Link className="option" to="/shop">
                Shop
            </Link>

            <Link className="option" to="/contact">
                Contact
            </Link>

        </div>

    </div>
);

export default Header;
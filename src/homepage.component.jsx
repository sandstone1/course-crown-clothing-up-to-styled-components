
import React from 'react';

// -- Mark 1 --
// lecture 57: E-commerce Homepage + SASS Setup
import './homepage.styles.scss';

// create a functional component since we do not need any lifecycle methods at this point
// nor do we need to store any state
// End of -- Mark 1 --
const HomePage = () => (

    // -- Mark 1 -- continued
    // inside the div will be menu item container component and the menu item component
    <div className="homepage">

        <div className="directory-menu">

            <div className="menu-item">

                <div className="content">

                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span>

                </div>
            
            </div>
            <div className="menu-item">

                <div className="content">

                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">SHOP NOW</span>

                </div>
            
            </div>
            <div className="menu-item">

                <div className="content">

                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">SHOP NOW</span>

                </div>
            
            </div>
            <div className="menu-item">

                <div className="content">

                    <h1 className="title">WOMENS</h1>
                    <span className="subtitle">SHOP NOW</span>

                </div>
            
            </div>
            <div className="menu-item">

                <div className="content">

                    <h1 className="title">MENS</h1>
                    <span className="subtitle">SHOP NOW</span>

                </div>
            
            </div>

        </div>

    </div>

);

export default HomePage;
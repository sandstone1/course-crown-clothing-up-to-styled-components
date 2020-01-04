
import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our logo and next lecture will explain " ReactComponent as Logo "
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import in our stylesheet
import './header.styles.scss';

// -- Mark 1 --
// lecture 85: Google Sign In Authentication 3
// we want to import the auth library from firebase.utilis.js
import { auth } from '../../firebase/firebase.utils';
// End of -- Mark 1


// our Header component will be a functional component

// -- Mark 1 -- continued
// lecture 85: Google Sign In Authentication 3
// we want to destructure " currentUser " that is being passed into our Header functional
// component from our class based App component and below the second link type:
/*
{
    currentUser ?
    <div></div>
    :
    <Link></Link>
}
// so we are using a ternary operator to conditional render either a div if currentUser is
// true or a <Link> component if currentUser is false and remember if currentUser is an object
// then it will evaluate to true or if currentUser is null then it will evaluate to false
// and we will pass in the same class name as our other Link components and then we will
// add an onClick method inside the div that will equal an anonymous function that calls
// auth.signOut() or returns auth.signOut(), which will sign out the user
// and then inside <Link> we will also have
// the class name of " option " and since currentUser is null then it must mean that the
// user is signed out so we will link to the SignIn componentby typing " to="/signin "
// and provide the heading of " SIGN IN " and I tested this sign in and
// sign out functionality in our app and everything is working correctly
// and lastly add " cursor : pointer; " to " .option " in our header component style
// sheet and now let's style our " SIGN IN WITH GOOGLE " button so that it matches our
// final application style so go to our custom button component or custom-button.component.jsx
*/
// End of -- Mark 1
const Header = ( { currentUser } ) => (
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
                SHOP
            </Link>

            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div>
                :
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            }

        </div>

    </div>
);

export default Header;
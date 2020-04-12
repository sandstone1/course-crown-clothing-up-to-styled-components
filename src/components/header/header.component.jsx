
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
// End of -- Mark 1 --


// -- Mark 2 --
// lecture 103: connect() and mapStateToProps
// we need to import the connect function from react-redux and connect is a
// higher order component that let's us modify components to have access to libraries
// like redux and remember higher order components are just functions that take components
// as arguments and then return a new souped up component
import { connect } from 'react-redux';
// End of -- Mark 2 --


// -- Mark 3 --
// lecture 106: Cart Component
import CartIcon from '../cart-icon/cart-icon.component';
// End of -- Mark 3 --


// -- Mark 4 --
// lecture 107: Card Dropdown Component
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// End of -- Mark 4 --


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
const Header = ( { currentUser, show } ) => (
    // we will create an outer container that will hold the logo and the links to different
    // pages

    // make a new folder in src called assets and inside that folder add in our crown.svg/
    // file, which is our logo

    // -- Mark 3 continued --
    // lecture 106: Cart Component
    // place the CartIcon component at the very end

    // -- Mark 4 continued --
    // lecture 107: Card Dropdown Component
    // place the CartIcon component just outside of the options div
    // next, we need to conditionally show or hide our CartDropdown component and in order
    // to do this we will show or hide this component based on a true or false value and we
    // will create a cart reducer to do this and by having this functionality in the reducer
    // were able to pass this functionality to any component that needs it

    // -- Mark 5 --
    // lecture 108: Implementing Redux in Cart
    // conditionally render the CartDropdown component so change " <CartDropdown /> " to
    /*
        {
            show ? (
                <CartDropdown />
            ) : (
                null
            )
        }
    */
    // we could have done this instead:
    /*
        {
            show ? <CartDropdown /> : null
        }
    */
    // before we add our add item feature to our cart let's commit our code
    // so let's do:
    // Rogers-iMac:crown_clothing Home$ git status
    // Rogers-iMac:crown_clothing Home$ git add .
    // Rogers-iMac:crown_clothing Home$ git commit -m " added cart icon and cart dropdown
    // components to our app and a toggle feature for our cart dropdown "
    // Rogers-iMac:crown_clothing Home$ git push origin master

    // now if I go to my " crown-clothing " project in GutHub, I see the changes were uploaded
    // sucessfully

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
            <CartIcon />

        </div>

        {
            show ? (
                <CartDropdown />
            ) : (
                null
            )
        }

    </div>

);
// End of -- Mark 3 and Mark 4 and Mark 5 --


// -- Mark 2 -- continued
// lecture 103: connect() and mapStateToProps
// we are going to pass connect 2 functions and the second one will be optional 
// and the first function will allow us to access the state and the first function
// is called mapStateToProps and mapStateToProps will be equal to a function and what
// we will return from that function will be an object with key value pairs and we
// pass in " state " as the argument to mapStateToProps and state comes from the root
// reducer and we want to pass in a currentUser property where the value of currentUser
// is eqaul to state.user.currentUser and now currentUser above equal currentUser in our
// user reducer

// now we can remove currentUser form App.js or change
// " <Header currentUser={ this.state.currentUser } /> " to " <Header />  " in App..js

// ==============================
// GO TO SRC/APP.JS -- GO TO Mark 9
// ==============================


// -- Mark 5 --
// lecture 108: Implementing Redux in Cart
// now add in the state from the cart reducer or root reducer to show and hide our
// CartDropdown component and remember we could have done a more advanced destructuring
// construct for mapStateToProps or we could change
// " const mapStateToProps = ( state ) => ( " to this
// " const mapStateToProps = ( { user : { currentUser }, cart : { show } } ) => ( "
const mapStateToProps = ( state ) => (

    {
        currentUser : state.user.currentUser,
        show        : state.cart.show
    }

);


export default connect( mapStateToProps )( Header );

// End of -- Mark 2 and Mark 5 --